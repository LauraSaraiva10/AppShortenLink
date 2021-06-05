import AsyncStorage from '@react-native-async-storage/async-storage';
import { cos } from 'react-native-reanimated';

export async function getLinksSave(key){
    const myLinks = await AsyncStorage.getItem(key);

    let linkSave = JSON.parse(myLinks) || [];

    return linkSave;
}

export async function saveLink(key, newLink){
    let linksStored = await getLinksSave(key);

    const hasLink = linksStored.some(link => link.id === newLink.id);

    if(hasLink){
        console.log("Esse link já existe na lista!");
        return;
    }

    linksStored.push(newLink);

    await AsyncStorage.setItem(key, JSON.stringify(linksStored));

    console.log('Link guardado com sucesso!');
}

export async function deleteLink(links, id){
  let myLinks = links.filter( (item) => {
    return(item.id !== id);
  });

  await AsyncStorage.setItem('links', JSON.stringify(myLinks));

  console.log('Link removido do storage');

  return myLinks;
}