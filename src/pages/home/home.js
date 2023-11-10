import { HomeStyle } from "./home.styled";


const Home = () => {
    return (
        <HomeStyle>
        <main>
            <section>
            <h1>Über meine Person</h1>
            <p>
                Hier ist etwas Text über uns und unsere Dienstleistungen. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                amet.Duis autem vel eum iriure dolor in hendrerit in vulputate velit
                esse molestie consequat, vel illum dolore eu feugiat nulla facilisis
                at vero eros et accumsan et iusto odio dignissim qui blandit praesent
                luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
                molestie consequat, vel illum dolore eu feugiat nulla facilisis at
                vero eros et accumsan et iusto odio dignissim qui blandit praesent
                luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                Nam liber tempor cum soluta nobis eleifend option congue nihil
                imperdiet doming id quod mazim placerat facer
            </p>
            </section>
    
            <section>
            <h2>Unsere Dienstleistungen</h2>
            <p>Wir bieten folgende Dienstleistungen an:</p>
            <ul>
                <li>Service 1</li>
                <li>Service 2</li>
                <li>Service 3</li>
            </ul>
            </section>
    
            <section>
            <h2>Unsere Projekte</h2>
            <p>Hier sind einige unserer Projekte:</p>
            <img src="bild1.jpg" alt="Projekt 1"></img>
            <p>Beschreibung des ersten Projekts.</p>
            <img src="bild2.jpg" alt="Projekt 2"></img>
            <p>Beschreibung des zweiten Projekts.</p>
            </section>
        </main>
    </HomeStyle>
    );
  };
  
  export default Home;