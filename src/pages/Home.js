import React from 'react'
import { Card } from '../components/stateless/Card'
import { getStorage, ref,getDownloadURL } from "firebase/storage";



export const Home = (props) => {

  

  
  return (
    <div className="main-body">
      <div className="body">
        <img src="http://sarsunacollege.ac.in/Images/InnerBanner/Academic/Academic.png" />

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