// Per-locale copy for the site. PL is the default (served at /), EN at /en/.
// Components read the active locale via `getLang(Astro)` and pull strings from `copy[lang]`.
// Strings ending in `Html` contain inline markup and are rendered with `set:html`.

export type Lang = 'pl' | 'en';
export const LOCALES: Lang[] = ['pl', 'en'];

export function getLang(astro: { currentLocale?: string }): Lang {
  return astro.currentLocale === 'en' ? 'en' : 'pl';
}

// Locale-aware home URL (PL is unprefixed).
export const homeUrl: Record<Lang, string> = { pl: '/', en: '/en/' };
// BCP-47 tags for <html lang>, og:locale, Intl date formatting.
export const bcp47: Record<Lang, string> = { pl: 'pl-PL', en: 'en-GB' };
export const ogLocale: Record<Lang, string> = { pl: 'pl_PL', en: 'en_US' };

// Given the current path, return its PL and EN equivalents (works on any page,
// so the language switcher and hreflang stay correct off the home page too).
export function localizedPaths(pathname: string): Record<Lang, string> {
  const stripped = pathname.replace(/^\/en(\/|$)/, '/');
  return { pl: stripped, en: stripped === '/' ? '/en/' : '/en' + stripped };
}

// Polish has 3 plural forms; English 2.
export function cityWord(lang: Lang, n: number): string {
  if (lang === 'en') return n === 1 ? 'city' : 'cities';
  if (n === 1) return 'miasto';
  const t = n % 10;
  const h = n % 100;
  return t >= 2 && t <= 4 && (h < 10 || h >= 20) ? 'miasta' : 'miast';
}

export const copy = {
  pl: {
    seo: {
      title: 'Git Guts — bezpłatne warsztaty z gita',
      description:
        'Bezpłatne warsztaty, które uczą nie tylko jak używać gita, ale też jak działa w środku.',
    },
    nav: {
      about: 'O nas',
      workshops: 'Warsztaty',
      events: 'Wydarzenia',
      contributors: 'Kontrybutorzy',
    },
    hero: {
      eyebrowSha: '· a1b2c3d',
      h1Html: 'Poznaj gita <em>od podszewki</em>.',
      leadHtml:
        'Bezpłatne warsztaty, które uczą nie tylko jak <span class="mono">commit</span>ować, ale też jak git działa w środku — blob po blobie, drzewo po drzewie.',
      ctaPrimary: 'Zapisz się na warsztaty',
      ctaSecondary: 'Zobacz program',
      graph: {
        basics: 'feat: od podstaw',
        internals: 'feat: wnętrzności .git',
        branch: 'branch',
        merge: 'merge: społeczność dev',
        whatsIn: '// co siedzi w .git',
      },
    },
    stats: {
      eyebrowSha: '· 4 lata społeczności',
      participants: 'uczestników na warsztatach',
      citiesSuffix: 'w Polsce',
      free: '100%',
      freeLabel: 'za darmo, dla każdego poziomu',
    },
    about: {
      eyebrowSha: 'o nas',
      title: 'Entuzjaści gita, którzy lubią się dzielić.',
      lead: 'Jesteśmy inicjatywą edukującą programistów na każdym poziomie w zakresie najpopularniejszego systemu kontroli wersji na świecie.',
      cards: [
        {
          k: '// kim jesteśmy',
          h: 'Ewangeliści dobrych praktyk',
          p: 'Entuzjaści zakochani w gicie i w dobrych praktykach pracy z kodem. Dzielenie się wiedzą to dla nas frajda.',
        },
        {
          k: '// co robimy',
          h: 'Uczymy efektywnej pracy',
          p: 'Pokazujemy jak skutecznie korzystać z gita i jak poprawnie organizować proces wytwarzania oprogramowania.',
        },
        {
          k: '// czemu to robimy',
          h: 'Bo git jest super :)',
          p: 'Bo zarówno dzielenie się wiedzą, jak i sam git, są po prostu super. To wystarczający powód.',
        },
      ],
    },
    workshops: {
      eyebrowSha: 'warsztaty',
      titleHtml:
        'Dwa warsztaty. Od pierwszego commita po wnętrze <span class="mono" style="color:var(--orange)">.git</span>.',
      badgeBasic: 'Podstawy',
      badgeAdvanced: 'Zaawansowany',
      materials: 'Materiały',
      prework: 'Prework',
    },
    events: {
      eyebrowSha: '· wydarzenia',
      title: 'Cztery lata warsztatów na żywo.',
      lead: 'Warsztaty, które poprowadziliśmy w miastach w całej Polsce — i online.',
      participants: 'uczestników',
      webinar: 'Webinar',
    },
    contributors: {
      eyebrowSha: 'kontrybutorzy',
      title: 'Kontrybutorzy',
      lead: 'Kto stoi za Git Guts.',
      name: 'Łukasz Rybka',
      bio: 'Piszę kod, wykładam na uczelni i występuję na konferencjach na całym świecie. Pasjonują mnie systemy rozproszone, developer experience i rzemiosło uczenia — a Git Guts prowadzę po godzinach, żeby pokazywać gita od podszewki.',
    },
    newsletter: {
      h2: 'Wracamy z nowymi materiałami i warsztatami.',
      p: 'Zostaw maila, a damy znać, gdy ruszą zapisy na kolejne edycje. Zero spamu — tylko konkrety o warsztatach.',
      placeholder: 'twoj@email.dev',
      emailLabel: 'Adres e-mail',
      submit: 'Zapisz się',
      success: '✓ Prawie gotowe — sprawdź skrzynkę i potwierdź zapis.',
    },
    footer: {
      about:
        'Inicjatywa edukująca programistów na każdym poziomie w zakresie systemu kontroli wersji git.',
      colSite: 'Strona',
      colDocs: 'Dokumenty',
      join: 'Dołącz',
      privacy: 'Polityka prywatności',
      terms: 'Regulamin',
      cookies: 'Polityka cookies',
      rights: 'Wszystkie prawa zastrzeżone',
    },
    legal: {
      back: '← Strona główna',
      updated: 'Obowiązuje od',
    },
  },

  en: {
    seo: {
      title: 'Git Guts — free git workshops',
      description:
        'Free workshops that teach not just how to use git, but how it works inside.',
    },
    nav: {
      about: 'About',
      workshops: 'Workshops',
      events: 'Events',
      contributors: 'Contributors',
    },
    hero: {
      eyebrowSha: '· a1b2c3d',
      h1Html: 'Get to know git <em>inside out</em>.',
      leadHtml:
        'Free workshops that teach not just how to <span class="mono">commit</span>, but how git actually works inside — blob by blob, tree by tree.',
      ctaPrimary: 'Sign up for a workshop',
      ctaSecondary: 'See the program',
      graph: {
        basics: 'feat: the basics',
        internals: 'feat: git internals',
        branch: 'branch',
        merge: 'merge: dev community',
        whatsIn: '// what lives in .git',
      },
    },
    stats: {
      eyebrowSha: '· 4 years of community',
      participants: 'workshop participants',
      citiesSuffix: 'in Poland',
      free: '100%',
      freeLabel: 'free, for every level',
    },
    about: {
      eyebrowSha: 'about',
      title: 'Git enthusiasts who love to share.',
      lead: "We're an initiative teaching developers at every level about the world's most popular version control system.",
      cards: [
        {
          k: '// who we are',
          h: 'Advocates of good practice',
          p: 'Enthusiasts in love with git and with good practices for working with code. Sharing knowledge is our idea of fun.',
        },
        {
          k: '// what we do',
          h: 'We teach effective work',
          p: 'We show how to use git effectively and how to organize the software development process the right way.',
        },
        {
          k: '// why we do it',
          h: 'Because git is great :)',
          p: "Because both sharing knowledge and git itself are simply great. That's reason enough.",
        },
      ],
    },
    workshops: {
      eyebrowSha: 'workshops',
      titleHtml:
        'Two workshops. From your first commit to the guts of <span class="mono" style="color:var(--orange)">.git</span>.',
      badgeBasic: 'Basics',
      badgeAdvanced: 'Advanced',
      materials: 'Materials',
      prework: 'Prework',
    },
    events: {
      eyebrowSha: '· events',
      title: 'Four years of live workshops.',
      lead: 'Workshops we ran in cities across Poland — and online.',
      participants: 'participants',
      webinar: 'Webinar',
    },
    contributors: {
      eyebrowSha: 'contributors',
      title: 'Contributors',
      lead: "Who's behind Git Guts.",
      name: 'Łukasz Rybka',
      bio: 'I write code, lecture at university, and take the stage at conferences around the world — passionate about distributed systems, developer experience, and the craft of teaching. I run Git Guts after hours, to show git inside out.',
    },
    newsletter: {
      h2: "We're coming back with new materials and workshops.",
      p: "Leave your email and we'll let you know when sign-ups for the next editions open. No spam — just the essentials about the workshops.",
      placeholder: 'you@email.dev',
      emailLabel: 'Email address',
      submit: 'Subscribe',
      success: '✓ Almost there — check your inbox to confirm.',
    },
    footer: {
      about:
        'An initiative teaching developers at every level about the git version control system.',
      colSite: 'Site',
      colDocs: 'Documents',
      join: 'Join',
      privacy: 'Privacy policy',
      terms: 'Terms',
      cookies: 'Cookie policy',
      rights: 'All rights reserved',
    },
    legal: {
      back: '← Home',
      updated: 'In effect from',
    },
  },
} as const;
