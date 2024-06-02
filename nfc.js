const NFTsarray = [];
function mintNFT(_name, _eyecolor, _shirtType, _bling) {
  const NFTobject = {
    name: _name,
    eyecolor: _eyecolor,
    shirtType: _shirtType,
    bling: _bling,
  };
  NFTsarray.push(NFTobject);
  console.log("Person's name: " + _name);
}
function listNFTs() {
  for (let i = 0; i < NFTsarray.length; i++) {
    console.log("\nNo. " + (i + 1));
    console.log("Name: " + NFTsarray[i].name);
    console.log("Eye color: " + NFTsarray[i].eyecolor);
    console.log("Shirt Type: " + NFTsarray[i].shirtType);
    console.log("Bling: " + NFTsarray[i].bling);
  }
}
function getTotalSupply() {
  console.log("\nTotal Supply =" + NFTsarray.length);
}
mintNFT("Akshat", "Black", "Hoodie", "Neck lace");
mintNFT("Rishav", "Red", "Suit", "Ear rings");
mintNFT("Rajni", "Yellow", "Salwar", "Hairband");
listNFTs();
getTotalSupply();
