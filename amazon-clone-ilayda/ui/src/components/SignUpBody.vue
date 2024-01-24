<template>
  <div>
    <div class="d-flex flex-row justify-content-center">
      <div class="row">
        <div class="col-md">
          <form @submit.prevent="handleRegister">
            <div class="sign-in mb-3">Hesap Oluşturun</div>

            <div class="form-group mb-3" style="margin-top: 2vh">
              <div>
                <label for="exampleInputName" style="font-weight: bold"
                  >Ad</label
                >
              </div>
              <div>
                <input
                  type="text"
                  class="form-control btn1"
                  id="exampleInputName"
                  placeholder="Ad"
                  v-model="register_form.name"
                />
              </div>
            </div>

            <div class="form-group mb-3" style="margin-top: 2vh">
              <div>
                <label for="exampleInputName" style="font-weight: bold"
                  >Soy ad</label
                >
              </div>
              <div>
                <input
                  type="text"
                  class="form-control btn1"
                  id="exampleInputName"
                  placeholder="Soyad"
                  v-model="register_form.surname"
                />
              </div>
            </div>

            <div class="form-group mb-3" style="margin-top: 2vh">
              <div>
                <label for="exampleInputEmail1" style="font-weight: bold"
                  >E-posta</label
                >
              </div>
              <div>
                <input
                  type="email"
                  class="form-control btn1"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  v-model="register_form.email"
                  placeholder="Eposta"
                />
              </div>
            </div>

            <div class="form-group mb-3" style="margin-top: 2vh">
              <div>
                <label for="exampleInputPassword1" style="font-weight: bold"
                  >Şifre</label
                >
              </div>
              <div>
                <input
                  type="password"
                  class="form-control btn1"
                  id="exampleInputPassword1"
                  placeholder="En az 6 karakter"
                  v-model="password_confirm.password"
                />
              </div>
            </div>

            <div class="form-group mb-3" style="margin-top: 2vh">
              <div>
                <label for="exampleInputPassword2" style="font-weight: bold"
                  >Şifreyi tekrar girin</label
                >
              </div>
              <div>
                <input
                placeholder="Tekrar şifre giriniz."
                  type="password"
                  class="form-control btn1"
                  id="exampleInputPassword2"
                  v-model="password_confirm.passwordConfirm"
                />
              </div>
            </div>
            <div class="form-group mb-3">
              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  Amazon’dan teklif ve promosyonlar da dahil olmak üzere ticari
                  elektronik ileti (e-posta ve SMS gibi) almayı ve Amazon’un
                  kişisel verilerimi aynı amaçla işlemesini kabul ediyorum.
                  *Yasalar gereği e-posta adresinizi İleti Yönetim Sistemi A.Ş.
                  (“İYS”) ile paylaşacağız. İYS’nin veri güvenliği konusunda
                  aldığı tedbirler üzerinde herhangi bir kontrolümüz
                  bulunmamaktadır.
                </label>
              </div>
            </div>

            <div class="form-group text-center mb-3">
              <button
                type="submit"
                class="btn bg-warning text-dark"
                id="signUp"
              >
                Amazon hesabınızı oluşturun
              </button>
              <p class="mb-3" style="margin-top: 2vh">
                Bir hesap oluşturduğunuzda, Amazon'un Kullanım ve Satış
                Koşulları'nı kabul etmiş olursunuz. Daha fazla bilgi için
                Gizlilik Bildirimi, Çerez Bildirimi ve İlgi Alanına Dayalı
                Tanıtımları inceleyebilirsiniz.
              </p>
              <a href="#">Yardımamı ihtiyacınız var?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import mdlUser from "../core/modals/User";
import { useUserStore } from '../stores/UserStore';

export default {
  setup() {
    const password_confirm = ref({password: "", passwordConfirm: ""});
    const register_form = ref({name: '',surname: '',email: '',password: ''});

    const userStore = useUserStore();

    const handleRegister = async() => {
      if(password_confirm.value.password == password_confirm.value.passwordConfirm){
        var newUser = new mdlUser();
        newUser.name = register_form.value.name
        newUser.surname = register_form.value.surname;
        newUser.email = register_form.value.email;
        newUser.password = password_confirm.value.password;
        var response = await userStore.Register(newUser);
        if(response.success){
          alert("Kayıt Başarılı !");
          window.location = "/";
        }else{
          alert("Kayıt Başarısız");
        }
      }else{
        alert("Şifreler uyuşmuyor!");
      }
      
    };

    return {
      password_confirm,
      register_form,
      handleRegister,
    };
  },
};
</script>

<style>
@import '../static/style.css';
</style>
