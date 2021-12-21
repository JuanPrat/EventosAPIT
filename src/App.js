import './App.css';
import Card from './components/stateless/card';

function App() {
  return (
    <div className="App">
      <header></header>
      <div className="main-body">
        <nav>
          <img id="logo" src="https://data.tooliphone.net/iskin/themes/16090/10681/preview-256.png" />
          <section>
            <img id="perfil" src="https://cdn-icons-png.flaticon.com/128/1946/1946429.png" />
            <button id="hamburguer-button">
              <p>-
                -
                -</p>
            </button>
          </section>
        </nav>
        <div className="body">
          <img src="http://sarsunacollege.ac.in/Images/InnerBanner/Academic/Academic.png" />
          <section className="body">
            <form autoComplete="on">
              <input type="text" name="evento" placeholder="Buscar Evento"></input>
            </form>
            <section className="eventos">
              <div className="evento">
                <Card title="Tecno Café" description="Lorem ipsum dolor sit amet consectetur adipiscing elit eu justo, platea dictum ornare fringilla pretium urna scelerisque quam, posuere magna sem parturient nibh penatibus rutrum egestas." img="https://scontent.feoh1-1.fna.fbcdn.net/v/t31.18172-8/19143192_847157915432533_7371565421081223890_o.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEz1jMESIhZL_yyLkegi1KvaRnd-Ob2VG1pGd345vZUbZHSU2J9yJxff87UlraAv91aaQr7PdLlP-EslMlReHGJ&_nc_ohc=e8gS2eWYiegAX-ruB-t&_nc_ht=scontent.feoh1-1.fna&oh=00_AT8BHxpbnTtIhmnRsi7uIxiVdgOlWW2y_ja7lo91i9SgIQ&oe=61E6F92C"></Card>
              </div>
              <div className="evento">
              <Card title="Tecno Café" description="Lorem ipsum dolor sit amet consectetur adipiscing elit eu justo, platea dictum ornare fringilla pretium urna scelerisque quam, posuere magna sem parturient nibh penatibus rutrum egestas." img="https://scontent.feoh1-1.fna.fbcdn.net/v/t31.18172-8/19143192_847157915432533_7371565421081223890_o.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEz1jMESIhZL_yyLkegi1KvaRnd-Ob2VG1pGd345vZUbZHSU2J9yJxff87UlraAv91aaQr7PdLlP-EslMlReHGJ&_nc_ohc=e8gS2eWYiegAX-ruB-t&_nc_ht=scontent.feoh1-1.fna&oh=00_AT8BHxpbnTtIhmnRsi7uIxiVdgOlWW2y_ja7lo91i9SgIQ&oe=61E6F92C"></Card>
              </div>
              <div className="evento">
              <Card title="Tecno Café" description="Lorem ipsum dolor sit amet consectetur adipiscing elit eu justo, platea dictum ornare fringilla pretium urna scelerisque quam, posuere magna sem parturient nibh penatibus rutrum egestas." img="https://scontent.feoh1-1.fna.fbcdn.net/v/t31.18172-8/19143192_847157915432533_7371565421081223890_o.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEz1jMESIhZL_yyLkegi1KvaRnd-Ob2VG1pGd345vZUbZHSU2J9yJxff87UlraAv91aaQr7PdLlP-EslMlReHGJ&_nc_ohc=e8gS2eWYiegAX-ruB-t&_nc_ht=scontent.feoh1-1.fna&oh=00_AT8BHxpbnTtIhmnRsi7uIxiVdgOlWW2y_ja7lo91i9SgIQ&oe=61E6F92C"></Card>
              </div>
              <div className="evento">
              <Card title="Tecno Café" description="Lorem ipsum dolor sit amet consectetur adipiscing elit eu justo, platea dictum ornare fringilla pretium urna scelerisque quam, posuere magna sem parturient nibh penatibus rutrum egestas." img="https://scontent.feoh1-1.fna.fbcdn.net/v/t31.18172-8/19143192_847157915432533_7371565421081223890_o.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEz1jMESIhZL_yyLkegi1KvaRnd-Ob2VG1pGd345vZUbZHSU2J9yJxff87UlraAv91aaQr7PdLlP-EslMlReHGJ&_nc_ohc=e8gS2eWYiegAX-ruB-t&_nc_ht=scontent.feoh1-1.fna&oh=00_AT8BHxpbnTtIhmnRsi7uIxiVdgOlWW2y_ja7lo91i9SgIQ&oe=61E6F92C"></Card>
              </div>
              <div className="evento">
              <Card title="Tecno Café" description="Lorem ipsum dolor sit amet consectetur adipiscing elit eu justo, platea dictum ornare fringilla pretium urna scelerisque quam, posuere magna sem parturient nibh penatibus rutrum egestas." img="https://scontent.feoh1-1.fna.fbcdn.net/v/t31.18172-8/19143192_847157915432533_7371565421081223890_o.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEz1jMESIhZL_yyLkegi1KvaRnd-Ob2VG1pGd345vZUbZHSU2J9yJxff87UlraAv91aaQr7PdLlP-EslMlReHGJ&_nc_ohc=e8gS2eWYiegAX-ruB-t&_nc_ht=scontent.feoh1-1.fna&oh=00_AT8BHxpbnTtIhmnRsi7uIxiVdgOlWW2y_ja7lo91i9SgIQ&oe=61E6F92C"></Card>
              </div>
              <div className="evento">
              <Card title="Tecno Café" description="Lorem ipsum dolor sit amet consectetur adipiscing elit eu justo, platea dictum ornare fringilla pretium urna scelerisque quam, posuere magna sem parturient nibh penatibus rutrum egestas." img="https://scontent.feoh1-1.fna.fbcdn.net/v/t31.18172-8/19143192_847157915432533_7371565421081223890_o.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEz1jMESIhZL_yyLkegi1KvaRnd-Ob2VG1pGd345vZUbZHSU2J9yJxff87UlraAv91aaQr7PdLlP-EslMlReHGJ&_nc_ohc=e8gS2eWYiegAX-ruB-t&_nc_ht=scontent.feoh1-1.fna&oh=00_AT8BHxpbnTtIhmnRsi7uIxiVdgOlWW2y_ja7lo91i9SgIQ&oe=61E6F92C"></Card>
              </div>

            </ section>
          </section>
        </div>
        <footer>
          <p>footer</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
