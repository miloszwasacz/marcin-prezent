#!/bin/bash
code_file_path="./code-files/puzzle"
template_html=template.html
template_js=template.js
output=../zagadki/pietro

for i in 1 2 3
do
    code_file="${code_file_path}${i}.html"
    . "${code_file_path}${i}.conf"
    eval "echo \"$(cat "${template_html}" | sed 's/\"/\\\"/g')\"" > ${output}${i}.html
    eval "echo \"$(cat "${template_js}" | sed 's/\"/\\\"/g')\"" > ${output}${i}.js
done
