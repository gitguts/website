import React, { Component } from "react"

import styles from "../shared/legal.module.scss"
import NameBanner from "../name-banner/name-banner"

export default class TermsOfService extends Component {
  render() {
    return (
      <>
        <NameBanner name={`Regulamin`} />

        <div className={`container ${styles.contentContainer}`}>
          <div className={`row ${styles.contentRow}`}>
            <div className={`col-12`}>
              <h3 className={`${styles.title}`}>Regulamin</h3>
            </div>

            <div className={`col-12`}>
              <h4 className={`${styles.sectionTitle}`}>1. Warunki</h4>
            </div>

            <div className={`col-12`}>
              Wchodząc na stronę internetową https://www.gitguts.io, wyrażasz
              zgodę na przestrzeganie niniejszych warunków świadczenia usług,
              wszystkich obowiązujących praw i przepisów oraz zgadzasz się, że
              jesteś odpowiedzialny za przestrzeganie wszelkich lokalnie
              obowiązujących przepisów prawa. Jeśli nie zgadzasz się z
              którymkolwiek z tych warunków, nie wolno Ci korzystać z tej strony
              ani uzyskiwać do niej dostępu. Materiały zawarte na tej stronie
              internetowej są chronione odpowiednimi przepisami dotyczącymi praw
              autorskich i znaków towarowych.
            </div>

            <div className={`col-12`}>
              <h4 className={`${styles.sectionTitle}`}>
                2. Licencja na użytkowanie
              </h4>
            </div>

            <div className={`col-12`}>
              <ol className={`${styles.lowerLetter}`}>
                <li>
                  Zezwala się na tymczasowe pobranie jednej kopii materiałów
                  (informacji lub oprogramowania) na stronie internetowej
                  wyłącznie do osobistego, niekomercyjnego, krótkotrwałego
                  oglądania. Jest to udzielenie licencji, a nie przeniesienie
                  tytułu, a na mocy tej licencji nie możesz:
                  <ol className={`${styles.lowerRoman}`}>
                    <li>modyfikować lub kopiować materiałów;</li>
                    <li>
                      wykorzystywać materiałów do jakichkolwiek celów
                      komercyjnych, ani do celów publicznego wyświetlania
                      (komercyjnie ani niekomercyjnie);
                    </li>
                    <li>
                      podejmować prób dekompilacji lub inżynierii wstecznej
                      żadnego oprogramowania zawartego na stronie internetowej;
                    </li>
                    <li>
                      usuwać żadnych praw autorskich ani innych zapisów
                      własnościowych z materiałów; ani
                    </li>
                    <li>
                      przenosić materiałów na inną osobę lub odzwierciedlać
                      materiałów na jakimkolwiek innym serwerze.
                    </li>
                  </ol>
                </li>
                <li>
                  Niniejsza licencja wygasa automatycznie, jeśli naruszysz
                  którekolwiek z tych ograniczeń i może zostać wypowiedziana
                  przez administratora strony internetowej w dowolnym momencie.
                  Po zakończeniu przeglądania tych materiałów lub po wygaśnięciu
                  niniejszej licencji, należy zniszczyć wszelkie pobrane
                  materiały znajdujące się w posiadaniu użytkownika, zarówno w
                  formie elektronicznej, jak i drukowanej.
                </li>
              </ol>
            </div>

            <div className={`col-12`}>
              <h4 className={`${styles.sectionTitle}`}>
                3. Wyłączenie odpowiedzialności
              </h4>
            </div>

            <div className={`col-12`}>
              <ol className={`${styles.lowerLetter}`}>
                <li>
                  Materiały zamieszczone na stronie internetowej są dostarczane
                  w stanie aktualnym. Nie udzielamy żadnych gwarancji, wyraźnych
                  ani dorozumianych i niniejszym odrzucamy i negujeemy wszelkie
                  inne gwarancje, w tym, bez ograniczeń, dorozumiane gwarancje
                  lub warunki przydatności handlowej, przydatności do
                  określonego celu, nienaruszania własności intelektualnej lub
                  innego rodzaju naruszenia praw.
                </li>

                <li>
                  Ponadto, nie gwarantujemy ani nie składamy żadnych oświadczeń
                  dotyczących rzetelności, prawdopodobnych wyników ani
                  niezawodności wykorzystania materiałów znajdujących się na
                  naszej stronie internetowej lub w inny sposób związanych z
                  takimi materiałami lub na stronach powiązanych z tą stroną.
                </li>
              </ol>
            </div>

            <div className={`col-12`}>
              <h4 className={`${styles.sectionTitle}`}>4. Ograniczenia</h4>
            </div>

            <div className={`col-12`}>
              W żadnym wypadku my ani nasi dostawcy nie ponoszą
              odpowiedzialności za jakiekolwiek szkody (w tym, bez ograniczeń,
              szkody z tytułu utraty danych lub zysków, lub z powodu przerwy w
              działalności gospodarczej) wynikające z wykorzystania lub
              niemożności wykorzystania materiałów znajdujących się na stronie
              internetowej, nawet jeśli my lub nasz autoryzowany przedstawiciel
              został powiadomiony ustnie lub pisemnie o możliwości wystąpienia
              takiej szkody. Ponieważ niektóre jurysdykcje nie zezwalają na
              ograniczenia gwarancji dorozumianych lub ograniczenia
              odpowiedzialności za szkody wynikowe lub przypadkowe, ograniczenia
              te mogą nie mieć do Ciebie.
            </div>

            <div className={`col-12`}>
              <h4 className={`${styles.sectionTitle}`}>
                5. Rzetelność materiałów
              </h4>
            </div>

            <div className={`col-12`}>
              Materiały pojawiające się na stronie internetowej mogą zawierać
              błędy techniczne, typograficzne lub fotograficzne. Nie
              gwarantujemy, że którykolwiek z materiałów znajdujących się na
              naszej stronie internetowej jest rzetelny, kompletny lub aktualny.
              Możemy dokonywać zmian w materiałach zawartych na naszej stronie
              internetowej w dowolnym czasie i bez uprzedzenia. Nie
              zobowiązujemy się jednak do aktualizacji materiałów.
            </div>

            <div className={`col-12`}>
              <h4 className={`${styles.sectionTitle}`}>6. Linki</h4>
            </div>

            <div className={`col-12`}>
              Nie zapoznaliśmy się ze wszystkimi stronami, do których prowadzą
              linki na naszej stronie internetowej i nie odpowiadamy za
              zawartość żadnej z tych stron. Zamieszczenie jakiegokolwiek linku
              nie oznacza, że popieramy tę stronę. Korzystanie z takich stron
              odbywa się na własne ryzyko użytkownika.
            </div>

            <div className={`col-12`}>
              <h4 className={`${styles.sectionTitle}`}>7. Modyfikacje</h4>
            </div>

            <div className={`col-12`}>
              Możemy zmienić niniejsze warunki świadczenia usług strony
              internetowej w dowolnym czasie i bez uprzedzenia. Korzystając z
              tej strony internetowej wyrażasz zgodę na związanie się aktualną
              wersją niniejszych warunków świadczenia usług.
            </div>

            <div className={`col-12`}>
              <h4 className={`${styles.sectionTitle}`}>8. Prawo właściwe</h4>
            </div>

            <div className={`col-12`}>
              Niniejsze warunki są regulowane i interpretowane zgodnie z prawem
              Polskim, a użytkownik nieodwołalnie poddaje się wyłącznej
              jurysdykcji sądów w tym kraju.
            </div>
          </div>
        </div>
      </>
    )
  }
}
