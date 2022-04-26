var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
    
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
if (matchFunc(startEl)){
  resultSet.push (startEl);
}
  for (let i=0; i < startEl.children.length; i++){
    let elements = traverseDomAndCollectElements (matchFunc, startEl.children [i]);
    resultSet = [...resultSet, ...elements];//resultSet va a ser = a una copia de el mismo + una copia de elements
    //resultSet = elements.push (resultSet)
    //   if (startEl.children[i]===matchFunc()) return resultSet.push
  // }
}
return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if (selector[0]=== "#" ) return "id"
  else if (selector[0] === ".") return "class";
  if (selector.split (".").length > 1) return "tag.class";
  // for (var i=0; i<selector.length; i++) {
  //   if (selector[i] === ".") return "tag.class"
  return "tag"
}
// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);//id, class, tag, o tag.class
  var matchFunction;

  if (selectorType === "id") { 
    matchFunction = function (parametro){
      return "#" + parametro.id === selector;
      // let nuevoSelector = selector[1]
      // for (var i=2; i<selector.length; i++) {
      // nuevoSelector = nuevoSelector + selector[i]}
      // if (nuevoSelector === parametro.id) return true;
    }
  } else if (selectorType === "class") {
    matchFunction = function (parametro){
      let clases = parametro.classList; // classList-> es un atributo que toma todas las clases que hay dentro.
     // es lo mismo que esto-->  const miArray = parametro.className.split (' ')
    let nuevoSelector = selector[1]
    for (var i=2; i<selector.length; i++) {
    nuevoSelector = nuevoSelector + selector[i]
    }
      for (var x=0; x<clases.length; x++) {
      if (nuevoSelector === clases[x]) return true;
      }  
      return false;
    }
    
  } else if (selectorType === "tag.class") {
    matchFunction = function (parametro){
      var [tagBuscado,classBuscada] = selector.split("."); //["p", "small"]
      return matchFunctionMaker(tagBuscado)(parametro) && matchFunctionMaker (`.${classBuscada}`) (parametro)
    // let miTag = selector [0]
    // var i = 1
    // while (selector [i] !== ".") {
    //   miTag += selector[i];
    //   i ++;
    // }
    // if (parametro.tagName && (parametro.tagName.toLowerCase() === miTag.toLowerCase())){
    //   let miClase = selector [i+1];
    //   for (let j = i+2; j<selector.length; j++) {
    //     miClase = miClase + selector[j]
    //   }
    //   const miArray = parametro.className.split (' ')
    //   for (let x=0; x<miArray.length; x++) {
    //     if (miClase === miArray[x]) return true 
    //   } 
   //}return false
    }  


  } else if (selectorType === "tag") {
    matchFunction = function (parametro){
      return parametro.tagName.toLowerCase() === selector; 
    //   return parametro.tagName && (parametro.tagName.toLowerCase() === selector.toLowerCase());
    }
    } 
    return matchFunction;
  }


var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
