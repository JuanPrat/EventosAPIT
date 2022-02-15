import React from 'react'
import { Card } from '../components/stateless/Card'
import { app } from '../components/state/FirebaseConfig'
import { getStorage, ref, getDownloadURL } from "firebase/storage";



export const Home = (props) => {

  const storage = getStorage(app)
  const imgRef = ref(storage, 'wallpaper.png')

  getDownloadURL(imgRef)
    .then((url) => {
      debugger
      const img = document.getElementById('wallpaper');
      img.setAttribute('src', url);
    })
    .catch((error) => {
      // Handle any errors
    });


  return (
    <div className="main-body">
      <div className="body">
        <div className='wallContainer'>
          <div className="centered"><h1><b>Eventos Apit</b>
            <br></br><h1>Plataforma de eventos académicos del área de 
            tecnología</h1></h1></div>
          <img id="wallpaper" />
        </div>
        <section className="body">
          <form autoComplete="on">
            <input type="text" name="evento" placeholder="Buscar Evento"></input>
          </form>
          <section className="eventos">
            <div className="evento">
              <Card eventTitle="Tecno Café" eventDescription="Lorem ipsum dolor sit amet consectetur adipiscing elit eu justo, platea dictum ornare fringilla pretium urna scelerisque quam, posuere magna sem parturient nibh penatibus rutrum egestas." eventImg="1" speaker="Hernando Recaman Chaux" ubication="P40-604" date="12-04-2022"></Card>
            </div>
            <div className="evento">
              <Card eventTitle="Tecno Café" eventDescription="Lorem ipsum dolor sit amet consectetur adipiscing elit eu justo, platea dictum ornare fringilla pretium urna scelerisque quam, posuere magna sem parturient nibh penatibus rutrum egestas." eventImg="2" speaker="Hernando Recaman Chaux" ubication="P40-604" date="12-04-2022"></Card>
            </div>
            <div className="evento">
              <Card eventTitle="Tecno Café" eventDescription="Lorem ipsum dolor sit amet consectetur adipiscing elit eu justo, platea dictum ornare fringilla pretium urna scelerisque quam, posuere magna sem parturient nibh penatibus rutrum egestas." eventImg="1" speaker="Hernando Recaman Chaux" ubication="P40-604" date="12-04-2022"></Card>
            </div>
            <div className="evento">
              <Card eventTitle="Tecno Café" eventDescription="Lorem ipsum dolor sit amet consectetur adipiscing elit eu justo, platea dictum ornare fringilla pretium urna scelerisque quam, posuere magna sem parturient nibh penatibus rutrum egestas." eventImg="2" speaker="Hernando Recaman Chaux" ubication="P40-604" date="12-04-2022"></Card>
            </div>
            <div className="evento">
              <Card eventTitle="Tecno Café" eventDescription="Lorem ipsum dolor sit amet consectetur adipiscing elit eu justo, platea dictum ornare fringilla pretium urna scelerisque quam, posuere magna sem parturient nibh penatibus rutrum egestas." eventImg="1" speaker="Hernando Recaman Chaux" ubication="P40-604" date="12-04-2022"></Card>
            </div>
            <div className="evento">
              <Card eventTitle="Tecno Café" eventDescription="Lorem ipsum dolor sit amet consectetur adipiscing elit eu justo, platea dictum ornare fringilla pretium urna scelerisque quam, posuere magna sem parturient nibh penatibus rutrum egestas." eventImg="2" speaker="Hernando Recaman Chaux" ubication="P40-604" date="12-04-2022"></Card>
            </div>
            <div className="evento">
              <Card eventTitle="Tecno Café" eventDescription="Lorem ipsum dolor sit amet consectetur adipiscing elit eu justo, platea dictum ornare fringilla pretium urna scelerisque quam, posuere magna sem parturient nibh penatibus rutrum egestas." eventImg="2" speaker="Hernando Recaman Chaux" ubication="P40-604" date="12-04-2022"></Card>
            </div>
            <div className="evento">
              <Card eventTitle="Tecno Café" eventDescription="Lorem ipsum dolor sit amet consectetur adipiscing elit eu justo, platea dictum ornare fringilla pretium urna scelerisque quam, posuere magna sem parturient nibh penatibus rutrum egestas." eventImg="2" speaker="Hernando Recaman Chaux" ubication="P40-604" date="12-04-2022"></Card>
            </div>
            <div className="evento">
              <Card eventTitle="Tecno Café" eventDescription="Lorem ipsum dolor sit amet consectetur adipiscing elit eu justo, platea dictum ornare fringilla pretium urna scelerisque quam, posuere magna sem parturient nibh penatibus rutrum egestas." eventImg="2" speaker="Hernando Recaman Chaux" ubication="P40-604" date="12-04-2022"></Card>
            </div>
            <div className="evento">
              <Card eventTitle="Tecno Café" eventDescription="Lorem ipsum dolor sit amet consectetur adipiscing elit eu justo, platea dictum ornare fringilla pretium urna scelerisque quam, posuere magna sem parturient nibh penatibus rutrum egestas." eventImg="2" speaker="Hernando Recaman Chaux" ubication="P40-604" date="12-04-2022"></Card>
            </div>
          </ section>
        </section>
      </div>
    </div>
  )
}