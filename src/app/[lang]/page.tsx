import { PageHeader } from "@/app/[lang]/_components/PageHeader";
import { HomeCard } from "@/app/[lang]/_components/HomeCard";
import { Locale } from "../../../i18n.config";
import { getDictionaries } from "@/lib/dictionary";

interface HomePageProps {
  params: { lang: Locale };
}

export default async function HomePage({ params: { lang } }: HomePageProps) {
  const { page } = await getDictionaries(lang);

  const cardTexts = {
    welcomeText: {
      title:
        lang === "en" ? "Welcome to Dummy Next" : "Dummy Next-ი მოგესალმებათ",
      description:
        lang === "en"
          ? "This app is my introduction to next.js It showcases general features of Next like SSR and routing. This is me just getting started with next. So, there will be more :D"
          : "ეს საიტი არის ჩემი პირველი Next.js აპლიკაცია. იგი იყენებს Next-ის ზოგად თვისებებს, როგორიცაა SSR და routing - ი. ეს მხოლოდ დასაწყისია, ასე რომ, კიდევ ბევრს ელოდეთ :D",
    },
    features: {
      title: lang === "en" ? "Features" : "თვისებები",
      description:
        lang === "en"
          ? "This app simply displays different data from dummyjson free mock API. To be precise, It uses posts, users and comments, connects them and offers dynamic routes for users and posts. Also you can search posts by their text, load posts by specific tag names by clicking on them, toggle themes, etc."
          : "ეს საიტი განათავსებს სხვადასხვა მონაცემებს dummyjson - ის უფასო mock API - სგან. უფრო ზუსტად საიტი იყენებს პოსტებს, მომხმარებლებსა და კომენტარებს, აკავშირებს მათ ერთმანეთთან და გთავაზობთ დინამიურ გვერდებს პოსტებისა და მომხმარებლების მიხედვით. ასევე, თქვენ შეგიძლიათ მოიძიოთ პოსტები მათი ტექსტის მიხედვით, ჩატვირთოდ პოსტები მათი თაგების მიხედვით, შეცვალოდ ფერები და ენები, და ა.შ",
    },
    whyIMadeThis: {
      title: lang === "en" ? "Why I made this" : "რატომ გავაკეთე ეს საიტი",
      description:
        lang === "en"
          ? "Well, I made this app simply to train myself in next.js practice. I used layouts, error pages, dynamic routes, params and searchParams, SSR and client components. It is just the begining of next.js and I seem to Love it. 😊"
          : "ნუ, ეს საიტი უბრალოდ იმიტომ ავაწყე, რომ მევარჯიშა next.js - ში. საიტში გამოვიყენე layout - ი, error - ის გვერდები, დინამიური გვერდები, params - ი და searchParams - ი, Server Side და Cleint Side კომპონენტები. ეს next.js - ის მხოლოდ დასაწყისია და მე ის ძალიან მომონს. 😊",
    },
  };

  return (
    <div className="w-[80%] text-center flex flex-col items-center pb-4">
      <PageHeader>{page.home.home}</PageHeader>
      <HomeCard
        title={cardTexts.welcomeText.title}
        description={cardTexts.welcomeText.description}
      />
      <HomeCard
        attachment="https://dummyjson.com"
        title={cardTexts.features.title}
        description={cardTexts.features.description}
      />
      <HomeCard
        title={cardTexts.whyIMadeThis.title}
        description={cardTexts.whyIMadeThis.description}
      />
    </div>
  );
}
