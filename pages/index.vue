<script lang="ts" setup>
const selected = 0;
const dropdownConcurency = false;
const dropdownCrypto = false;
const currencySelected = {
  img: "country-icon/eng.png",
  name: "USD",
};
const currencies = [
  {
    img: "country-icon/eng.png",
    name: "USD",
  },
];
const cryptoSelected = {
  img: "crypto-icon/bitcoin.png",
  name: "BTC",
};
const cryptocurrencies = [
  {
    img: "crypto-icon/bitcoin.png",
    name: "BTC",
  },
];
const trendings = [
  {
    id: 1,
    name: "Bitcoin",
    price: 43180.13,
    logo: "bitcoin.png",
    increase: true,
    data: [40, 35, 60, 75, 60, 75, 50],
  },
  {
    id: 2,
    name: "Ethereum",
    price: 3480.65,
    logo: "ethereum.png",
    increase: false,
    data: [25, 30, 60, 50, 80, 55, 80],
  },
  {
    id: 3,
    name: "Solana",
    price: 150.2,
    logo: "solana.png",
    increase: true,
    data: [40, 45, 40, 80, 50, 60, 35],
  },
  {
    id: 4,
    name: "Dogecoin",
    price: 0.1572,
    logo: "dogecoin.png",
    increase: true,
    data: [35, 70, 60, 80, 50, 60, 40],
  },
];
const topGainers = [
  {
    id: 1,
    name: "PAPPAY",
    price: 0.00374,
    logo: "pappay.png",
    increase: true,
    data: [30, 50, 45, 60, 70, 40, 45],
  },
  {
    id: 2,
    name: "Bitcoin Asia",
    price: 0.02096,
    logo: "bitcoin-asia.png",
    increase: true,
    data: [25, 60, 50, 60, 35, 50, 70],
  },
  {
    id: 3,
    name: "MoonRock",
    price: 0.004907,
    logo: "moonrock.png",
    increase: true,
    data: [40, 35, 40, 25, 50, 70, 45],
  },
  {
    id: 4,
    name: "NinjaFloki",
    price: 0.000123,
    logo: "ninjafloki.png",
    increase: true,
    data: [45, 35, 40, 30, 25, 45, 35],
  },
];
const recents = [
  {
    id: 1,
    name: "MetaCraft",
    price: 0.0608,
    logo: "metacraft.png",
    increase: false,
    data: [40, 50, 45, 60, 35, 40, 45],
  },
  {
    id: 2,
    name: "Frog",
    price: 0.5875,
    logo: "frog.png",
    increase: false,
    data: [25, 50, 45, 48, 40, 60, 45],
  },
  {
    id: 3,
    name: "Musk Doge",
    price: 0.04041,
    logo: "musk-doge.png",
    increase: true,
    data: [25, 35, 60, 45, 50, 45, 45],
  },
  {
    id: 4,
    name: "2SHARE",
    price: 1366.24,
    logo: "2share.png",
    increase: true,
    data: [35, 30, 60, 50, 35, 45, 40],
  },
];
const accordions = [
  {
    title: "Why should I choose NEFA?",
    description:
      "We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over 8 million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.",
  },
  {
    title: "How secure is NEFA?",
    description:
      "We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.",
  },
  {
    title: "Do I have to buy a whole Bitcoin?",
    description:
      "We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.",
  },
  {
    title: "How do I actually buy Bitcoin?",
    description:
      "We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.",
  },
];
const steps = [
  {
    img: "sign-up.png",
    title: "Sign Up",
    description:
      "Sign up for your free NEFA Wallet on web, iOS or Android and follow our easy process to set up your profile",
  },
  {
    img: "fund.png",
    title: "Fund",
    description:
      "Choose your preferred payment method such as bank transfer or credit card to top up your NEFA Wallet",
  },
  {
    img: "buy-crypto.png",
    title: "Buy Crypto",
    description:
      "Buy Bitcoin or Ethereum, then securely store it in your Wallet or send it on easily to your friends anywhere",
  },
];
</script>

<template>
  <div class="w-full overflow-hidden">
    <!-- Hero section -->
    <section id="hero" class="w-full pb-24">
      <BaseSection>
        <div
          class="col-span-12 px-6 mt-12 space-y-4 text-center lg:col-span-6 xl:mt-10 sm:space-y-6 sm:text-left"
        >
          <span
            data-aos="fade-right"
            data-aos-once="true"
            class="text-base font-semibold uppercase text-gradient"
            >Sign Up Today</span
          >
          <h1
            data-aos="fade-right"
            data-aos-once="true"
            class="text-[2.5rem] sm:text-5xl xl:text-6xl font-bold leading-tight capitalize sm:pr-8 xl:pr-10"
          >
            Wynajem <span class="text-header-gradient">dmuchanych zamkow</span> i wiele więcej
          </h1>
          <p
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-delay="300"
            class="hidden paragraph sm:block"
          >
            Buy and sell 200+ cryptocurrencies with 20+ flat currencies using bank
            transfers or your credit/debit card.
          </p>
          <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="700"
            class="flex flex-col mt-2 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4"
          >
            <BaseButton
              class="max-w-full px-8 py-4 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] border border-[#0c66ee] text-white"
            >
              Get Started
            </BaseButton>
            <BaseButton
              class="max-w-full px-6 py-4 bg-inherit text-gradient border border-[#0c66ee] flex items-center justify-center"
            >
              <span>Download App</span>
              <ChevronDownIcon :size="20" class="mt-1 text-[#0c66ee]" />
            </BaseButton>
          </div>
        </div>
        <div class="hidden col-span-12 sm:flex lg:col-span-6">
          <div class="w-full">
            <img
              data-aos="fade-up"
              data-aos-once="true"
              src="@/assets/img/header-image-f.png"
              class="-mt-4"
              alt=""
            />
          </div>
        </div>
        <img
          data-aos="fade-up"
          data-aos-delay="300"
          src="@/assets/img/pattern/ellipse-1.png"
          class="absolute hidden w-6 sm:block bottom-12 xl:bottom-16 left-4 xl:left-0"
        />
        <img
          data-aos="fade-up"
          data-aos-delay="300"
          src="@/assets/img/pattern/ellipse-2.png"
          class="hidden sm:block absolute top-4 sm:top-10 right-64 sm:right-96 xl:right-[32rem] w-6"
        />
        <img
          data-aos="fade-up"
          data-aos-delay="300"
          src="@/assets/img/pattern/ellipse-3.png"
          class="absolute hidden w-6 sm:block bottom-56 right-24"
        />
        <img
          data-aos="fade-up"
          data-aos-delay="300"
          src="@/assets/img/pattern/star.png"
          class="hidden sm:block absolute top-20 sm:top-28 right-16 lg:right-0 lg:left-[30rem] w-8"
        />
      </BaseSection>
    </section>

    <section
      class="max-w-screen-xl mx-2 sm:mx-auto px-4 sm:px-6 lg:px-0 py-6 pb-20 sm:py-8 rounded-[2.25rem] sm:rounded-xl bg-white shadow-lg sm:shadow-md transform mt-14 mb-24"
    >
      <div class="flex flex-col items-center justify-center w-full overflow-hidden lg:flex-row">
        <div 
          data-aos="fade-up"
          class="w-full mt-6 space-y-6 border-gray-200 lg:w-1/4 lg:mt-0 xl:border-r lg:px-8"
        >
          <div class="flex flex-col items-center text-center">
            <EmoticonHappyOutlineIcon size="50"/>
            Atrakcje, które rozbudzą dziecięcą wyobraźnię!
          </div>
        </div>

        <div 
          data-aos="fade-up"
          data-aos-delay="150"
          class="w-full mt-6 space-y-6 border-gray-200 lg:w-1/4 lg:mt-0 xl:border-r lg:px-8"
        >
          <div class="flex flex-col items-center text-center">
          <VectorLineIcon size="50"/>
            Zamki skrojone na miarę twojej imprezy!
          </div>
        </div>

        <div 
          data-aos="fade-up"
          data-aos-delay="300"
          class="w-full mt-6 space-y-6 border-gray-200 lg:w-1/4 lg:mt-0 xl:border-r lg:px-8"
        >
          <div class="flex flex-col items-center text-center">
          <AccountFileTextOutlineIcon size="50"/>
            Doświadczenie, na które możesz liczyć!
          </div>
        </div>

        <div 
          data-aos="fade-up"
          data-aos-delay="450"
          class="w-full mt-6 space-y-6 border-gray-200 lg:w-1/4 lg:mt-0 lg:px-8"
        >
          <div class="flex flex-col items-center text-center">
            <BookOpenBlankVariantOutlineIcon size="50"/>
              Wszystok co najlepsze prosto i przejrzysto!
          </div>
        </div>
      </div>
    </section>

    <!-- Crypto statistic section -->
    <!-- <section
      class="max-w-screen-xl mx-2 sm:mx-auto px-4 sm:px-6 lg:px-0 py-6 pb-20 sm:py-8 rounded-[2.25rem] sm:rounded-xl bg-white shadow-lg sm:shadow-md transform lg:-translate-y-12 my-24"
    >
      <div class="flex flex-col items-center justify-center w-full lg:flex-row">
        <LandingCryptoStatistic
          data-aos="fade-up"
          title="🔥 Trending"
          :datasets="trendings"
          class="border-gray-200 xl:border-r lg:px-8"
        />
        <LandingCryptoStatistic
          data-aos="fade-up"
          data-aos-delay="150"
          title="🚀 Top Gainers"
          :datasets="topGainers"
          class="border-gray-200 xl:border-r lg:px-8"
        />
        <LandingCryptoStatistic
          data-aos="fade-up"
          data-aos-delay="300"
          title="💎 Recently Added"
          :datasets="recents"
          class="lg:px-8"
        />
        <LandingTile
          data-aos="fade-up"
          data-aos-delay="300"
          title="💎 Recently Added"
          class="w-full border-gray-200 xl:border-r lg:px-8 lg:w-1/3"
        >
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full px-2 py-2 overflow-hidden align-middle sm:px-6">
          </div>
        </div>
        </LandingTile>
      </div>
    </section> -->

    <!-- Buy and trade section -->
    <section class="w-full mt-24 mb-24 sm:mt-56">
      <BaseSection>
        <LandingTile
          data-aos="fade-up"
          title="🔥 Nowości"
          class="col-span-12 md:col-span-4"
        />

        <LandingTile
          data-aos="fade-up"
          data-aos-delay="100"
          title="🚀 Najszybsze"
          class="col-span-12 md:col-span-4"
        />

        <LandingTile
          data-aos="fade-up"
          data-aos-delay="200"
          title="💎 Najlepsze"
          class="col-span-12 md:col-span-4"
        />

        <LandingTile
          data-aos="fade-up"
          data-aos-delay="300"
          title="🧨 Okazje"
          class="col-span-12 md:col-span-4"
        />
      </BaseSection>
    </section>

    <!-- Partners section -->
    <section
      class="relative max-w-full my-24 overflow-hidden shadow bg-partner sm:mx-6 sm:rounded-2xl"
    >
      <div
        class="flex flex-col items-center justify-center w-full px-6 py-16 space-y-4 text-center sm:px-0"
      >
        <h3 data-aos="flip-down" class="text-2xl font-semibold text-neutral-800">
          Trusted Partners Worldwide
        </h3>
        <p data-aos="flip-down" class="paragraph">
          We're partners with countless major organisations around the globe
        </p>
        <div data-aos="fade-up" class="flex flex-wrap items-center justify-center">
          <LandingPartnerImage
            v-for="img in [
              'clever.png',
              'diamon-cutts.png',
              'swiss-finance.png',
              'gambio.png',
            ]"
            :key="img"
            :img="img"
          />
        </div>
      </div>
    </section>

    <!-- Credit card section -->
    <section class="w-full my-36">
      <BaseSection data-aos="fade-down">
        <div class="col-span-12 lg:col-span-7">
          <div class="w-full">
            <img src="@/assets/img/nefa-cc.webp" class="w-[95%]" alt="" />
          </div>
        </div>
        <div class="col-span-12 px-4 mt-20 space-y-6 lg:col-span-5 sm:px-6">
          <h2 class="text-4xl font-semibold">
            Introducing the <span class="text-header-gradient">NEFA</span> Credit Card
          </h2>
          <p class="paragraph">
            Subject to cardholder and rewards terms which will be available at
            application.
          </p>
          <ul class="space-y-4 sm:space-y-2">
            <LandingListItem title="Up to 3% back on purchases" />
            <LandingListItem title="Earn rewards in bitcoin or any crypto on NEFA" />
            <LandingListItem title="No annual fee" />
          </ul>
          <BaseButton
            class="w-full sm:max-w-[240px] px-10 py-4 bg-inherit text-gradient border border-[#0c66ee] text-base"
            >Join the waitlist</BaseButton
          >
        </div>
      </BaseSection>
    </section>

    <!-- Advanced trading tools section -->
    <section
      class="relative max-w-full py-16 my-20 overflow-hidden shadow bg-trading-tools sm:mx-4 rounded-2xl"
    >
      <div
        class="relative grid max-w-screen-xl grid-cols-12 px-4 mx-auto sm:px-2 gap-x-6"
      >
        <LandingTradingToolImage class="sm:hidden" />
        <div
          data-aos="fade-right"
          class="col-span-12 px-4 mt-8 space-y-8 lg:col-span-6 sm:space-y-6 sm:px-6"
        >
          <h2 class="text-4xl font-semibold">
            Advanced Trading <span class="text-header-gradient">Tools</span>
          </h2>
          <div class="space-y-2">
            <h4 class="text-lg font-medium">
              Professional Access, Non-stop Availability
            </h4>
            <p class="text-sm paragraph xl:text-base">
              We provide premium access to crypto trading for both individuals and
              institutions through high liquidity, reliable order execution and constant
              uptime.
            </p>
          </div>
          <div class="space-y-2">
            <h4 class="text-lg font-medium">A Range of Powerful Apis</h4>
            <p class="text-sm paragraph xl:text-base">
              Set up your own trading interface or deploy your algorithmic strategy with
              our high-performance FIX and HTTP APIs. Connect to our WebSocket for
              real-time data streaming.
            </p>
          </div>
          <div class="space-y-2">
            <h4 class="text-lg font-medium">Customer Support</h4>
            <p class="text-sm paragraph xl:text-base">
              Premium 24/7 support available to all customers worldwide by phone or email.
              Dedicated account managers for partners.
            </p>
          </div>
          <div class="flex flex-col sm:flex-row">
            <BaseButton
              class="px-10 py-4 bg-inherit text-gradient border border-[#4A8FF6] text-base"
            >
              Get Started
            </BaseButton>
            <BaseButton
              class="bg-inherit text-[#4A8FF6] px-10 py-4 text-center underline rounded-full"
            >
              Learn More
            </BaseButton>
          </div>
        </div>
        <LandingTradingToolImage data-aos="fade-left" class="hidden sm:block" />
      </div>
    </section>

    <!-- Industry-leading security section -->
    <section class="w-full my-24">
      <div class="relative grid max-w-screen-xl grid-cols-12 px-8 mx-auto gap-x-6">
        <div data-aos="fade-right" class="col-span-12 lg:col-span-6">
          <div class="w-full">
            <img
              src="@/assets/img/industry-leading-security.webp"
              class="w-full"
              alt=""
            />
          </div>
        </div>
        <div
          data-aos="fade-left"
          class="col-span-12 mt-8 space-y-8 lg:col-span-5 sm:space-y-6 xl:px-8"
        >
          <h2 class="text-4xl font-semibold">Industry-leading security from day one</h2>
          <ul class="space-y-8 sm:space-y-4">
            <LandingListItem title="Safety, security and compliance">
              <p class="text-sm leading-relaxed text-gray-700">
                NEFA is a licensed New York trust company that undergoes regular bank
                exams and is subject to the cybersecurity audits conducted by the New York
                Department of Financial Services.
                <span class="underline">Learn more</span> about our commitment to
                security.
              </p>
            </LandingListItem>
            <LandingListItem title="Hardware security keys">
              <p class="text-sm leading-relaxed text-gray-700">
                With NEFA you can secure your account with a hardware security key via
                WebAuthn.
              </p>
            </LandingListItem>
            <LandingListItem title="SOC Certifications">
              <p class="text-sm leading-relaxed text-gray-700">
                NEFA is <span class="underline">SOC 1 Type 2</span> and
                <span class="underline">SOC 2 Type 2</span> compliant. We are the world’s
                first cryptocurrency exchange and custodian to complete these exams.
              </p>
            </LandingListItem>
          </ul>
        </div>
      </div>
    </section>

    <!-- Getting started section -->
    <section
      class="relative max-w-full my-24 overflow-hidden shadow bg-trading-tools sm:mx-4 xl:mx-10 sm:rounded-2xl"
    >
      <div class="flex flex-col items-center w-full py-16">
        <h2 data-aos="flip-down" class="text-3xl font-semibold text-center sm:text-4xl">
          Get started in just a few minutes
        </h2>
        <div
          data-aos="fade-up"
          class="relative flex flex-col items-center justify-between w-full px-4 mt-16 space-y-12 lg:flex-row lg:space-y-0 xl:px-10 sm:mt-8"
        >
          <LandingStep v-for="step in steps" :key="step.title" :step="step" />
          <img
            src="@/assets/img/getting-started/arrow.png"
            class="hidden lg:inline-block absolute top-32 left-64 xl:left-[22rem] w-24 xl:w-[9.5rem]"
            alt=""
          />
          <img
            src="@/assets/img/getting-started/arrow.png"
            class="hidden lg:inline-block absolute top-32 right-64 xl:right-[22rem] w-24 xl:w-[9.5rem]"
            alt=""
          />
        </div>
      </div>
    </section>

    <!-- FAQ section -->
    <section class="w-full my-24">
      <BaseSection>
        <div data-aos="fade-right" data-aos-delay="150" class="col-span-12 lg:col-span-6">
          <div class="w-full">
            <img src="@/assets/img/faq.webp" class="w-full" alt="" />
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="150"
          class="col-span-12 px-4 mt-8 lg:col-span-6 sm:px-6"
        >
          <span class="mb-4 text-base font-semibold uppercase text-gradient sm:mb-2"
            >Support</span
          >
          <h2 class="mb-10 text-3xl font-semibold sm:text-4xl sm:mb-6">
            Frequently asked questions
          </h2>

          <ul class="shadow-box">
            <BaseAccordion
              v-for="(accordion, index) in accordions"
              :key="index"
              :accordion="accordion"
            />
          </ul>
        </div>
      </BaseSection>
    </section>

    <div class="flex justify-center w-full my-10">
      <a
        v-smooth-scroll
        data-aos="flip-down"
        data-aos-delay="150"
        href="#navbar"
        class="px-6 py-3 flex items-center space-x-2 bg-[#FAFAFA] hover:bg-gray-100 hover:shadow-md border border-[#DDDDDD] rounded-md text-gray-700"
      >
        <span>Back to top</span>
        <ArrowUpIcon :size="20" />
      </a>
    </div>
  </div>
</template>

<style scoped>
.text-header-gradient {
  background: rgb(57, 132, 244);
  background: linear-gradient(
    169.4deg,
    #3984f4 -6.01%,
    #0cd3ff 36.87%,
    #2f7cf0 78.04%,
    #0e65e8 103.77%
  );
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.bg-partner {
  background: url("../assets/img/partner/background.png");
  background-size: cover;
  background-position: center;
}
.bg-trading-tools {
  background: url("../assets/img/bg-trading-tools.webp");
  background-size: cover;
  background-position: center;
}
.max-h-0 {
  max-height: 0;
}
</style>
