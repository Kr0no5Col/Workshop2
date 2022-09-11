const posiciones = ["Mateo","Marcos","Lucas","Juan","Pedro","Pablo"]

//imprimo la clasificacion actual
document.write ("Clasificacion actual" + '<br>')
document.write ("1. "+ posiciones[0] + '<br>')
document.write ("2. "+ posiciones[1]+ '<br>')
document.write ("3. "+ posiciones[2]+ '<br>')
document.write ("4. "+ posiciones[3]+ '<br>')
document.write ("5. "+ posiciones[4]+ '<br>')
document.write ("6. "+ posiciones[5]+ '<br>' + '<br>')

//Cambios en las posiciones y elimino la ultima 
posiciones.splice(1,0, 'Luisa')
posiciones.splice(2,0, 'Carlos')
posiciones.pop()

//se agregan un nuevo lider
posiciones.unshift ('Daniel')

// Se imprimen las posiciones definitvas 

document.write ("Clasificacion Final" + '<br>')
document.write ("1. "+ posiciones[0] + '<br>')
document.write ("2. "+ posiciones[1]+ '<br>')
document.write ("3. "+ posiciones[2]+ '<br>')
document.write ("4. "+ posiciones[3]+ '<br>')
document.write ("5. "+ posiciones[4]+ '<br>')
document.write ("6. "+ posiciones[5]+ '<br>')
document.write ("7. "+ posiciones[6]+ '<br>')
document.write ("8. "+ posiciones[7]+ '<br>')




