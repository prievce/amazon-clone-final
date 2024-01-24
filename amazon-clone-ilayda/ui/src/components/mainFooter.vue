<template>
  <div class="row">
    <router-link to="/" style="color: white">
      <q-btn
        class="justify-center align-center"
        style="
          width: 205vh;
          background-color: #37475a;
          color: rgb(255, 255, 255);
        "
        >Başa dön</q-btn
      ></router-link
    >
  </div>
  <footer class="footer">
    <div class="row">
      <div class="col-md-3" v-for="(column, index) in columns" :key="index">
        <h6 style="font-weight: bold; color: white">{{ column.title }}</h6>
        <ul>
          <li
            v-for="(item, itemIndex) in column.items"
            :key="itemIndex"
            style="color: white"
          >
            {{ item.label }}
          </li>
        </ul>
      </div>
    </div>
    <br /><br />
    <div>
      <q-row>
        <Router-link to="/" style="color: white">
          <q-img
            class="justify-center align-center"
            style="width: 66px"
            src="../static/logo.png"
            alt="Amazon Logo" />
          <br /><br /></Router-link
      ></q-row>
      <div>
        <q-row>
          <q-col
            v-for="(country, index) in countries"
            :key="index"
            style="color: rgb(245, 242, 242); font-size: 12px; margin: 10px"
          >
            {{ country + ' ' }}
          </q-col>
        </q-row>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      countries: [
        'Avustralya',
        'Brezilya',
        'Kanada',
        'Çin',
        'Fransa',
        'Almanya',
        'Hindistan',
        'İtalya',
        'Japonya',
        'Meksika',
        'Hollanda',
        'İspanya',
        'Birleşik Arap Emirlikleri',
        'Birleşik Krallık',
        'ABD',
      ],
      columns: [
        {
          title: 'Hakkımızda',
          items: [
            { label: 'Kariyer' },
            { label: 'İletişim' },
            { label: 'Bilgi Toplumu Hizmetleri' },
            { label: 'Amazon Science' },
          ],
        },
        {
          title: 'Bizimle Para Kazanın',
          items: [
            { label: 'Markanızı Koruyun ve Oluşturun' },
            { label: 'Amazonda Satış Yapın' },
            { label: 'Ürünlerinizin Reklamını Yapın' },
          ],
        },
        {
          title: 'Amazon Ödeme Araçları',
          items: [{ label: 'Kredi Kartı' }, { label: 'Taksitli Ödeme' }],
        },
        {
          title: 'Size Yardımcı Olalım',
          items: [
            { label: 'COVID-19 ve Amazon' },
            { label: 'Kargoları Takip Edin veya' },
            { label: 'Siparişleri Görüntüleyin' },
            { label: 'Teslimat Ücretleri ve Politikaları' },
            { label: 'İadeler' },
            { label: 'Geri Dönüşüm' },
            { label: 'Amazon Mobil Uygulaması' },
            { label: 'Müşteri Hizmetleri' },
            { label: 'Erişilebilirlik' },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Ek stil ayarlamalarını burada yapabilirsiniz */
.footer {
  background-color: #232f3e;
  padding: 20px;
  text-align: center;
}

.row {
  display: flex;
  justify-content: space-between;
}

.col-md-3 {
  flex: 0 0 23%;
  max-width: 23%;
}
</style>
