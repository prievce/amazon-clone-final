<template>
  <div>
    <div class="first">
      <div class="flex logo">
        <a
          ><router-link to="/"
            ><img src="../static/logo.png" alt=""
          /></router-link>
        </a>
        <div class="map flex">
          <i class="fas fa-map-marker"></i>
          <div>
            <span>alıcı</span>
            <span>Türkiye</span>
          </div>
        </div>
      </div>

      <div class="flex input">
        <div>
          <span>Tüm Kategoriler</span>
          <i class="fas fa-caret-down"></i>
        </div>
        <input type="text" />
        <i class="fas fa-search"></i>
      </div>
      <div class="flex right">
        <div class="sign">
          <router-link to="login">
            <span style="color: white">Merhaba Giriş Yapın</span>
            <div class="flex ac">
              <span>Hesap ve Listeler</span>
              <i class="fas fa-caret-down"></i></div></router-link
          ><q-btn-dropdown stretch flat label="">
            <q-btn class="button-container" color="warning">Giriş Yap</q-btn>
            <q-list>
              <q-item-label header>Listelerim</q-item-label>
              <q-item>
                <q-item-section>
                  <q-item-label>Liste oluşturun</q-item-label>
                </q-item-section>
              </q-item>
              <q-separator inset spaced />
              <q-item-label header>Hesabım</q-item-label>
              <q-item>
                <q-item-section>
                  <q-item-label>Hesabım</q-item-label>
                  <q-item-label>Siparişlerim</q-item-label>
                  <q-item-label>Benim İçin Önerilenler</q-item-label>
                  <q-item-label>Prime Üyeliğim</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>
        <div class="sign">
          <span>İadeler</span>
          <span>ve Siparişler</span>
        </div>
        <div class="flex cart">
          <i class="fas fa-shopping-cart"></i>
          <span class="ca"
            ><router-link to="basket">
              <q-btn square color="#131a22" icon="shopping_cart" />
              <span style="color: white">Alışveriş Sepeti</span>
            </router-link></span
          >
          <p>0</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import '../static/style.css';
</style>
