for i in `ls -d ./src/components/*`
do
  (cd "$i" && echo "$i" && node-sass sass/style.scss style.css --output-style compressed && cd ..)
done
