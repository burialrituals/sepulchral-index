import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
export async function GET(context){
  const all=[...(await getCollection('reviews')),...(await getCollection('news')),...(await getCollection('interviews')),...(await getCollection('features'))].sort((a,b)=>b.data.pubDate.valueOf()-a.data.pubDate.valueOf());
  return rss({title:'Sepulchral Index',description:'Independent extreme metal journal & archive based in Chile.',site:context.site,items:all.map(item=>({title:item.data.title,pubDate:item.data.pubDate,description:item.data.description,link:`/${item.collection}/${item.id}/`}))});
}
