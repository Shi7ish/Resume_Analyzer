package com.shirish.resumeanalyzerbackend.service;

import com.shirish.resumeanalyzerbackend.dto.ResumeResponse;
import org.apache.pdfbox.Loader;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
public class ResumeService {

    private final List<String> requiredSkills = List.of(
            "java",
            "spring",
            "sql",
            "react",
            "docker",
            "aws",
            "kubernetes"
    );

    public ResumeResponse analyzeResume(MultipartFile file)
            throws IOException {

        PDDocument document = Loader.loadPDF(file.getBytes());

        PDFTextStripper pdfStripper = new PDFTextStripper();

        String text = pdfStripper.getText(document)
                .toLowerCase();

        document.close();

        List<String> matchedSkills = new ArrayList<>();

        List<String> missingSkills = new ArrayList<>();

        for (String skill : requiredSkills) {

            if (text.contains(skill)) {
                matchedSkills.add(skill);
            } else {
                missingSkills.add(skill);
            }
        }

        int atsScore = (matchedSkills.size() * 100)
                / requiredSkills.size();

        return new ResumeResponse(
                atsScore,
                matchedSkills,
                missingSkills
        );
    }
}