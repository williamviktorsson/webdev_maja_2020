#!/bin/bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd $DIR

while read line; do
name=${line//[[:blank:]]/}

cat > js/${name::-1}.js <<EOF
/*
    Do everything you want in functions because you do not want to define global variables.
*/

function example() {
    let nameElement = document.getElementById("${name::-1}");
    let objectEl = document.createElement("h3");
    objectEl.textContent = "Example :)";
    nameElement.appendChild(objectEl);
}

example();

EOF
done < names

while read line; do
name=${line//[[:blank:]]/}
echo '<h2 id="'${name::-1}'">'${name::-1}'</h2>'
done < names

while read line; do
name=${line//[[:blank:]]/}
echo '<script src="'js/${name::-1}.js'"></script>'
done < names