<template>
  <q-page>
    <div class="d-flex flex-row justify-content-center">
      <div>
        <div>
          <form @submit.prevent="handleLogin">
            <div class="sign-in">Giriş Yap</div>
            <div class="form-group mb-3">
              <div>
                <label for="exampleInputEmail1" style="font-weight: bold">E-posta adresi</label>
              </div>
              <div>
                <input type="email" class="form-control btn1" id="exampleInputEmail1" aria-describedby="emailHelp"
                  v-model="login_form.email" />
              </div>
            </div>

            <div class="form-group mb-3">
              <div>
                <label for="exampleInputEmail1" style="font-weight: bold">Şifre</label>
              </div>
              <div>
                <input type="password" class="form-control btn1" id="exampleInputEmail1" aria-describedby="emailHelp"
                  v-model="login_form.password" />
              </div>
            </div>
            <div class="form-group">
              <div class="button-container">
                <button type="submit" class="btn bg-warning text-dark" id="signUp">
                  Devam Et
                </button>
              </div>
              <q-parcel>
                <p style="margin-top: 2vh">
                  Oturum açarak, Amazon'un Kullanım ve Satış Koşulları'nı kabul
                  etmiş olursunuz. Kişisel verilerinizin Amazon tarafından nasıl
                  işlendiğine ilişkin detaylı bilgi için Gizlilik Bildirimi,
                  Çerez Bildirimi ve İlgi Alanına Dayalı Tanıtımları
                  inceleyebilirsiniz.
                </p>
              </q-parcel>
              <q-parcel>
                <p>
                  <q-link to="^#">Yardımamı ihtiyacınız var?</q-link>
                </p>
              </q-parcel>
            </div>

            <div class="form-check"></div>
            <router-link to="signup">
              <q-btn class="btn bg-white text-dark" no-caps>
                Amazon Hesabınızı Oluşturun!</q-btn>
            </router-link>
          </form>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue';
import mdlUser from '../core/modals/User';
import { useUserStore } from '../stores/UserStore';


export default {
  setup() {
    const login_form = ref({ email: '', password: '' });

    const userStore = useUserStore();

    const handleLogin = async() => {
        var user = new mdlUser();
        user.email = login_form.value.email;
        user.password = login_form.value.password;
        var response = await userStore.Login(user);
        if(response.success){
          alert('Giriş Başarılı !');
          window.location = '/';
        }else{
          alert('Giriş Başarısız! Tekrar Deneyin..');
        }
      } 
    return {
      login_form,
      handleLogin
    };
  },
};
</script>

<style>
@import '../static/style.css';
</style>
