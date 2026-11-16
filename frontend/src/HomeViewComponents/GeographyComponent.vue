<template>
  <section class="geography">
    <div class="geography-content">
      <h3>География компании</h3>
      <div class="geography-layout">
        <div class="geography-copy">
          <p>Благодаря успешной совместной работе всей команды на протяжении более чем двух десятилетий, компания завоевала статус эксперта мясной индустрии.</p>
          <p>Поставив перед собой задачу производства пищевых добавок высшего качества, «WURSTMEISTER» стал надежным партнером ведущих предприятий по переработке мясной продукции как в России, так и в странах СНГ.</p>
        </div>
        <img src="/HomePage/company-geography.png" alt="География компании: регионы России, Армения, Казахстан, Кыргызстан, Узбекистан и Туркменистан" loading="lazy">
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "@/styles/styles" as *;
.geography, .geography * { float: none; box-sizing: border-box; }
.geography { display: flex; justify-content: center; width: 100%; padding: clamp(30px, 4vw, 60px) 0; background: #000; color: #fff; }
.geography-content { display: flex; flex-direction: column; gap: clamp(24px, 2.5vw, 36px); width: min(1650px, calc(100% - 132px)); min-width: 0; }
h3 { margin: 0; font-family: 'Montserrat', sans-serif; font-size: clamp(30px, 5.45vw, 70px); font-weight: 700; line-height: 1.25; text-transform: uppercase; overflow-wrap: anywhere; }
.geography-layout { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); align-items: center; gap: clamp(24px, 3vw, 50px); width: 100%; min-width: 0; }
.geography-copy { display: flex; flex-direction: column; gap: 16px; min-width: 0; }
p { display: block; margin: 0; width: 100%; font-family: 'Montserrat', sans-serif; font-size: clamp(20px, 2.2vw, 30px); font-weight: 400; line-height: 1.25; text-transform: none; text-align: justify; text-justify: inter-word; overflow-wrap: anywhere; }
img { display: block; width: 100%; max-width: 100%; height: auto; border-radius: 24px; }
@media (max-width: 1100px) { .geography-content { width: calc(100% - 64px); } }
@media (max-width: 900px) {
 .geography-layout { grid-template-columns: minmax(0, 1fr); }
 .geography-content { width: calc(100% - 40px); }
 p { font-size: 22px; }
 img { width: min(100%, 680px); justify-self: center; }
}
@media (max-width: 600px) {
 .geography-content { width: calc(100% - 32px); }
 h3 { font-size: clamp(24px, 5.5vw, 30px); }
 p { font-size: 18px; line-height: 1.45; }
 img { border-radius: 16px; }
}
</style>
