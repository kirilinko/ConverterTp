  let Devise, Mesure, Codage, Converter, AllDevises, AllMesures, ResetCodage, ResetMesure, ResetDevise;
  
  AllDevises={
    'Fcfa':{'Euro':0.0015, 'Dollar':0.0017, 'Fcfa':1},
    'Euro':{ 'Euro':1,'Dollar':1.09, 'Fcfa':650},
    'Dollar':{'Euro':0.92, 'Dollar':1, 'Fcfa':600}
  }
  
  AllMesures={
    'km':{'m':1000, 'cm':100000, 'km':1},
    'm':{'cm':100, 'km':0.001, 'm':1},
    'cm':{'m':0.01, 'km':0.00001000000, 'cm':1}
    
  }

   DecToBin=(decimal)=>{
  	return (Number(decimal).toString(2));
  }

   DecToHex=(decimal)=>{
  	return (Number(decimal).toString(16)).toUpperCase();
  }

  BinToDec=(binary)=>{
  	return parseInt(binary, 2);
  }

  BinToHex=(binary)=>{ 
  	return parseInt(binary, 2).toString(16).toUpperCase();
  }
   
  HexToDec=(hexString)=>{
    return parseInt(hexString, 16);
}

  HexToBin=(hexString)=>{
    return (parseInt(hexString, 16).toString(2)).padStart(8, '0');
}
  Selfsame=(same)=>{
  	return same;
  }