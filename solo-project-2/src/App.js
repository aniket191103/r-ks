import './App.css';
import Nav from './component/Nav';
import Header from './component/Header';
function App() {
  return (
   <>
   <Nav/>
   <Header
   Img="/images/Mount-Fuji.jpg"
   Country="Japan"
   Name="Mount Fuji!"
   Date="22 January 2024- 30 November 2024"
   Description="Mount Fuji, or Fujiyama Japanese Fuji-san, Mountain, central Japan. The highest mountain in Japan, it rises to 12,388 ft (3,776 m) near the Pacific coast in central Honshu. Mount Fuji, with its graceful volcanic cone (dormant since 1707), has become famous internationally. It is considered a sacred symbol of Japan, and thousands of Japanese climb to the shrine on its peak every summer. The mountain is the major feature of Fuji-Hakone-Izu National Park, created in 1936."
   />

<Header
   Img="/images/Syndey-opera.jpg"
   Country="Australia"
   Name="Sydney Opera"
   Date="22 January 2021- 30 November 2024"
   Description="Sydney Opera House, opera house located on Port Jackson (Sydney Harbour), New South Wales, Australia. Its unique use of a series of gleaming white sail-shaped shells as its roof structure makes it one of the most-photographed buildings in the world."
   />

<Header
   Img="/images/geirangerfjord.jpg"
   Country="Norway"
   Name="geirangerfjord!"
   Date="22 January 2016- 30 November 2021"
   Description="The Geirangerfjord is one of Norway's most visited tourist sites and has been included on the UNESCO World Heritage List, along with the Nærøyfjord, since 2005."
   />

   </>

  );
}

export default App;
