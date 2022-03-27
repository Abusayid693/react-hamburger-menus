for i in `ls -d ./src/*`
do
  (cd "$i" && echo "$i" && node-sass sass/style.scss style.css)
done
