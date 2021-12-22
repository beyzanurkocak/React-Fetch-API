import React from "react";
import { ReactDOM } from "react";


function Notes() {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
  }
  
  setInterval(Notes, 1000);


  //
  function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  
  const element = <Welcome name="Sara" />;
  ReactDOM.render(
    element,
    document.getElementById('root')
  );

  //
  Not: Bileşen isimlendirmelerinde daima büyük harfle başlayınız.

Çünkü React, küçük harfle başlayan bileşenlere DOM etiketleri gibi davranır. Örneğin <div />, bir HTML div etiketini temsil eder, fakat <Welcome /> ise bir bileşeni temsil eder ve kodun etki alanında Welcome‘ın tanımlı olmasını gerektirir.

Bu isimlendirmenin nedeni hakkında detaylı bilgi edinmek için lütfen Derinlemesine JSX sayfasına bakınız.