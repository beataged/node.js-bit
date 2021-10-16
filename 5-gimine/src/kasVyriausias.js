/**
 * Skirta rasti ilgiausiai gimineje isgyvenusi asmeni
 * @param {Object[]} giminesMedis gimines medi aprasantis objektas 
 * @returns {number} Ilgiausiai gyvenusio asmens amzius 
 */
function kasVyriausias(giminesMedis){
    let maxAge = 0;
    giminesMedis.forEach(element =>{
        if(element.age > maxAge){
            maxAge = element.age;
        }
    });
    return maxAge;
}

module.exports = kasVyriausias;