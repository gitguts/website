import React, { Component } from "react"

import styles from "./cookies.module.scss"
import NameBanner from "../name-banner/name-banner"

export default class Cookies extends Component {
  render() {
    return (
      <>
        <NameBanner name={`Polityka Cookie`} />

        <div className={`container ${styles.container}`}>
          <div className={`row ${styles.contentRow}`}>
            <div className={`col-12`}>
              <h3 className={`${styles.title}`}>Polityka Cookies</h3>
            </div>

            <div className={`col-12`}>
              Używamy plików cookie, aby poprawić jakość korzystania z witryny
              https://www.gitguts.io. Niniejsza polityka dotycząca plików cookie
              jest częścią polityki prywatności naszej strony internetowej,
              dotyczącą stosowania plików cookie pomiędzy urządzeniem
              użytkownika a naszą stroną internetową. Podajemy również
              podstawowe informacje na temat usług dostarczanych przez osoby
              trzecie, z których możemy korzystać, a które mogą również używać
              plików cookie w ramach swoich usług, choć nie są one objęte naszą
              polityką.
            </div>
            <div className={`col-12`}>
              Jeśli nie życzysz sobie akceptować naszych plików cookie,
              powinieneś w ustawieniach przeglądarki ustawić opcję blokowania
              plików cookie ze strony https://www.gitguts.io, przyjmując
              jednocześnie, że możemy nie być w stanie dostarczyć Ci niektórych
              z pożądanych przez Ciebie treści i usług.
            </div>

            <div className={`col-12`}>
              <h4 className={`${styles.sectionTitle}`}>
                Co to jest plik cookie?
              </h4>
            </div>
            <div className={`col-12`}>
              Plik cookie to mały fragment danych przechowywany przez stronę
              internetową na Twoim urządzeniu podczas odwiedzania strony,
              zazwyczaj zawierający informacje o samej stronie internetowej,
              unikalny identyfikator, który pozwala stronie rozpoznać
              przeglądarkę internetową po powrocie na stronę, dodatkowe dane
              służące plikowi cookie oraz długość życia samego pliku cookie.
              Pliki cookie są wykorzystywane do umożliwienia niektórym
              funkcjonalnościom (np. logowanie), śledzenia korzystania ze strony
              (np. analiza), do przechowywania ustawień użytkownika (np. strefa
              czasowa, preferencje dotyczące powiadomień) oraz do personalizacji
              treści (np. reklama, język). Pliki cookie tworzone przez
              odwiedzaną przez Ciebie stronę internetową są zwykle nazywane
              "first- party cookies " i zazwyczaj śledzą jedynie Twoją aktywność
              na tej konkretnej stronie. Pliki cookie tworzone przez inne strony
              i spółki (np. osoby trzecie) są nazywane " third-party cookies" i
              mogą być wykorzystywane do śledzenia użytkownika na innych
              stronach internetowych, które korzystają z tej samej usługi od
              osób trzecich.
            </div>

            <div className={`col-12`}>
              <h4 className={`${styles.sectionTitle}`}>
                Rodzaje plików cookie i sposób ich używania
              </h4>
            </div>

            <div className={`col-12`}>
              <h5 className={`${styles.paragraphTitle}`}>
                Niezbędne plki cookie (essiential cookies)
              </h5>
            </div>

            <div className={`col-12`}>
              Niezbędne pliki cookie mają kluczowe znaczenie dla jakości Twojego
              korzystania ze strony internetowej, umożliwiając korzystanie z
              podstawowych funkcjonalności, takich jak loginy użytkownika,
              zarządzanie kontem, koszyki zakupowe i przetwarzanie płatności.
              Używam niezbędnych plików cookie do umożliwienie niektórych
              funkcjonalności na naszej stronie internetowej.
            </div>

            <div className={`col-12`}>
              <h5 className={`${styles.paragraphTitle}`}>
                Analityczne pliki cookie (performance cookies)
              </h5>
            </div>

            <div className={`col-12`}>
              Analityczne pliki cookie są wykorzystywane do śledzenia sposobu, w
              jaki korzystasz ze strony internetowej podczas swojej wizyty, bez
              gromadzenia Twoich danych osobowych. Zazwyczaj informacje te są
              anonimowe i agregowane z informacjami zbieranymi od wszystkich
              użytkowników strony, aby pomóc spółkom zrozumieć wzorce
              korzystania ze strony, zidentyfikować i zdiagnozować problemy lub
              błędy, które mogą napotkać ich użytkownicy, a także podejmować
              lepsze decyzje strategiczne w celu poprawy ogólnych doświadczeń
              użytkowników strony. Te pliki cookie mogą być tworzone przez
              odwiedzaną przez Ciebie stronę internetową (first-party cookies)
              lub przez usługi osób trzecich. Na naszej stronie stosujemy
              analityczne pliki cookie.
            </div>

            <div className={`col-12`}>
              <h5 className={`${styles.paragraphTitle}`}>
                Funkcjonalne pliki cookie (functionality cookies)
              </h5>
            </div>

            <div className={`col-12`}>
              Funkcjonalne pliki cookie są wykorzystywane do zbierania
              informacji o Twoim urządzeniu i wszelkich ustawieniach, które
              można skonfigurować na odwiedzanej przez Ciebie stronie
              internetowej (np. ustawienia języka i strefy czasowej). Dzięki tym
              informacjom, strony internetowe mogą dostarczać Tobie dostosowane,
              ulepszone lub zoptymalizowane treści i usług. Te pliki cookie mogą
              być tworzone przez odwiedzaną witrynę internetową (first-party
              cookies) lub przez usługi osób trzecich. Na naszej stronie
              stosujemy funkcjonalne pliki cookie w stosunku do wybranych
              funkcjonalności naszej strony.
            </div>

            <div className={`col-12`}>
              <h5 className={`${styles.paragraphTitle}`}>
                Marketingowe/reklamowe pliki cookie (targeting/advertising
                cookies)
              </h5>
            </div>

            <div className={`col-12`}>
              Marketingowe/reklamowe pliki cookie są wykorzystywane w celu
              określenia, jaka treść promocyjna jest lepiej dopasowana dla
              Ciebie i Twoich zainteresowań. Strony internetowe mogą
              wykorzystywać je do dostarczania ukierunkowanych reklam lub do
              ograniczenia liczby wyświetleń danej reklamy. Pomaga to spółkom
              poprawić skuteczność ich kampanii i jakość prezentowanych Tobie
              treści. Te pliki cookie mogą być tworzone przez odwiedzaną stronę
              internetową (first-party cookies) lub przez usługi osób trzecich.
              Marketingowe/reklamowe pliki cookie tworzone przez osoby trzecie
              mogą być wykorzystywane do śledzenia użytkownika na innych
              stronach internetowych, które korzystają z tej samej usługi osoby
              trzeciej. Na naszej stronie stosujemy marketingowe/reklamowe pliki
              cookie.
            </div>

            <div className={`col-12`}>
              <h5 className={`${styles.paragraphTitle}`}>
                Pliki cookie osób trzecich na mojej stronie
              </h5>
            </div>

            <div className={`col-12`}>
              Na naszych stronach internetowych możemy angażować spółki i osoby
              trzecie, np. dostawców usług analitycznych i partnerów w zakresie
              treści. Udzielamy tym osobom trzecim dostępu do wybranych
              informacji w celu wykonania określonych zadań w naszym imieniu.
              Mogą one również tworzyć third- party cookies w celu świadczenia
              dostarczanych przez siebie usług. Third-party cookies mogą być
              wykorzystywane do śledzenia użytkownika na innych stronach
              internetowych, które korzystają z tych samych usług osób trzecich.
              Ponieważ nie mamy kontroli nad plikami cookie innych firm, nie są
              one objęte polityką dotyczącą plików cookie stosowaną przez nas.
            </div>

            <div className={`col-12`}>
              <h4 className={`${styles.sectionTitle}`}>
                Nasza obietnica ochrony prywatności osób trzecich
              </h4>
            </div>

            <div className={`col-12`}>
              Dokonujemy przeglądu polityk prywatności wszystkich moich
              zewnętrznych dostawców przed rozpoczęciem korzystania z ich usług
              w celu zapewnienia, że ich praktyki są zgodne z naszymi. Nigdy
              świadomie nie wprowadzamy usług osób trzecich, które zagrażają lub
              naruszają prywatność naszych użytkowników.
            </div>

            <div className={`col-12`}>
              <h4 className={`${styles.sectionTitle}`}>
                Jak możesz kontrolować pliki cookie lub zrezygnować z ich
                stosowania
              </h4>
            </div>

            <div className={`col-12`}>
              Jeśli nie życzysz sobie akceptować naszych plików cookie,
              powinieneś w ustawieniach przeglądarki ustawić opcję blokowania
              plików cookie z naszej strony. Większość przeglądarek jest
              skonfigurowana tak, aby domyślnie akceptować pliki cookie, można
              jednak aktualizować te ustawienia aby całkowicie odrzucić pliki
              cookie lub aby ustawić powiadomienia użytkownika, gdy strona
              internetowa próbuje utworzyć lub zaktualizować plik cookie.
            </div>

            <div className={`col-12`}>
              Jeśli przeglądasz strony internetowe z wielu urządzeń, być może
              będziesz musiał zaktualizować ustawienia dla każdego z nich.
            </div>

            <div className={`col-12`}>
              Chociaż niektóre pliki cookie mogą być blokowane przy niewielkim
              wpływie na wrażenia z korzystania ze strony internetowej, to
              blokowanie wszystkich plików cookie może spowodować brak dostępu
              do niektórych funkcjonalności i zawartości odwiedzanych przez
              Ciebie stron.
            </div>
          </div>
        </div>
      </>
    )
  }
}
