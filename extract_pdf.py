#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Extract chapters from PDF and save as Markdown
"""

import pdfplumber
import re
import os

pdf_path = r"D:\投稿\《远方与火炬》 (3).pdf"
output_dir = r"C:\Users\doras\.qclaw\workspace-agent-9c941465\website\books\torch-and-horizon\zh"

# Create output directory if not exists
os.makedirs(output_dir, exist_ok=True)

print(f"Opening PDF: {pdf_path}")

with pdfplumber.open(pdf_path) as pdf:
    print(f"Total pages: {len(pdf.pages)}")
    
    # Extract all text
    full_text = ""
    for i, page in enumerate(pdf.pages):
        text = page.extract_text()
        if text:
            full_text += f"\n\n<!-- Page {i+1} -->\n\n"
            full_text += text
    
    print(f"Extracted {len(full_text)} characters")
    
    # Save full text for inspection
    with open(os.path.join(output_dir, "_full_extracted.txt"), "w", encoding="utf-8") as f:
        f.write(full_text)
    
    print(f"Saved full text to: {output_dir}_full_extracted.txt")
    print("\n" + "="*50)
    print("First 1000 characters:")
    print("="*50)
    print(full_text[:1000])

print("\nDone!")
