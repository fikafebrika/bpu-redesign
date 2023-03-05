(function ($) {
  'use strict';

  // event pada saat link
  // page scrolling animation
  $('.page-scroll').on('click', function (e) {
    //ambil isi href
    let tujuan = $(this).attr('href');

    //pindahkan scroll
    $('html, body').animate(
      {
        scrollTop: $(tujuan).offset().top - 100,
      },
      400,
      'swing'
    );

    e.preventDefault();
  });

  $(document).ready(function (e) {
    $(`
      <div class="modal fade" id="login" tabindex="-1" aria-labelledby="loginLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content border-0">
            <div class="modal-header border-0">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-header modal-header-title text-center border-0 pb-0">
              <h5 class="modal-title pb-2" id="loginLabel">Silakan Login</h5>
              <p>Jika belum memiliki akun, silakan <a href="#register" data-bs-toggle="modal" data-bs-target="#register">Daftar Disini</a></p>
            </div>
            <div class="modal-body mx-2 pb-4">
              <form>
                <div class="mb-4 border-bottom">
                  <label for="exampleInputEmail1" class="form-label">Email</label>
                  <input type="email" class="form-control border-0 px-0 pt-0" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="nama@email.com" />
                </div>
                <div class="mb-4 border-bottom">
                  <label for="exampleInputPassword1" class="form-label">Password</label>
                  <input type="password" class="form-control border-0 px-0 pt-0" id="exampleInputPassword1" placeholder="Password Anda" />
                </div>
                <div class="mb-4 form-check d-flex flex-row-reverse">
                  <label class="form-check-label" for="exampleCheck1"><a href="#">Lupa Password?</a></label>
                </div>
                <div class="d-grid gap-2">
                  <a href="#" class="btn text-white modal-button lh-lg btn-login" type="submit" data-bs-dismiss="modal">Login</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="register" tabindex="-1" aria-labelledby="registerLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content border-0">
            <div class="modal-header border-0">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-header modal-header-title text-center border-0 pb-0">
              <h5 class="modal-title pb-2" id="registerLabel">Silakan Register</h5>
              <p>Sudah punya akun? Silakan <a href="#login" data-bs-toggle="modal" data-bs-target="#login">Login Disini</a></p>
            </div>
            <div class="modal-body mx-2 pb-4">
              <form>
                <div class="mb-4 border-bottom">
                  <label for="exampleInputEmail1" class="form-label">Email</label>
                  <input type="email" class="form-control border-0 px-0 pt-0" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="nama@email.com" />
                </div>
                <div class="mb-4 border-bottom">
                  <label for="exampleInputPassword1" class="form-label">Password</label>
                  <input type="password" class="form-control border-0 px-0 pt-0" id="exampleInputPassword1" placeholder="Min. 6 karakter, kombinasi huruf, angka, dan simbol" />
                </div>
                <div class="d-grid gap-2 pt-3">
                  <a href="#berhasilRegister" class="btn text-white modal-button lh-lg" type="submit" data-bs-toggle="modal" data-bs-target="#berhasilRegister">Register</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="berhasilRegister" tabindex="-1" aria-labelledby="berhasilRegisterLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content border-0">
            <div class="modal-header border-0 mb-3">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-header modal-header-title text-center border-0 pb-0">
              <h5 class="modal-title pb-3" id="berhasilRegisterLabel">Register Berhasil!</h5>
              <p>Silakan Login</p>
            </div>
            <div class="modal-body mx-4 pb-4">
              <div class="d-grid gap-2 pb-3">
                <a href="#login" class="btn text-white modal-button lh-lg" type="submit" data-bs-toggle="modal" data-bs-target="#login">Login</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="logout" tabindex="-1" aria-labelledby="logoutLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content border-0">
            <div class="modal-header border-0 mb-3">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-header modal-header-title text-center border-0 pb-0">
              <h5 class="modal-title pb-3" id="logoutLabel">Anda Yakin Ingin Logout?</h5>
            </div>
            <div class="modal-body mx-4 pb-4">
              <div class="d-grid gap-2">
                <a href="index.html" class="btn text-white modal-button lh-lg" type="submit">Logout</a>
                <a href="#" class="btn text-warning lh-lg" type="submit" data-bs-dismiss="modal">Batal</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `).insertAfter('nav');

    $('.btn-login').on('click', function () {
      $('html, body').animate({ scrollTop: 0 }, 'slow');
      $(`<a class="nav-link" href="akun.html">Akun</a>`).replaceAll('[href="#login"]');
      $('.navbar-nav').append(`
        <li class="nav-item">
          <a class="nav-link" href="#logout" data-bs-toggle="modal" data-bs-target="#logout">Logout</a>
        </li>
      `);

      $(`<a href="akun.html">Akun</a>`).replaceAll('[data-bs-target="#login"]');
      $('.contact-nav').append(`<p><a href="#logout" data-bs-toggle="modal" data-bs-target="#logout">Logout</a></p>`);

      $('.btn-apartemen').attr('href', 'aset-apartemen.html').removeAttr('data-bs-target data-bs-toggle').removeClass('.btn-apartemen');
      $('.btn-rusunawa').attr('href', 'aset-rusunawa.html').removeAttr('data-bs-target data-bs-toggle').removeClass('.btn-rusunawa');
      $('.btn-asramapemda').attr('href', 'aset-asramapemda.html').removeAttr('data-bs-target data-bs-toggle').removeClass('.btn-asramapemda');
    });
  });

  // navbar ketika element selain navbar di klik
  $('body').on('click', function () {
    $('.navbar-collapse').removeClass('show');
  });

  // popover
  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
  });

  $('#pilihLantai ,#pilihKamar').on('click', function () {
    $('.asrama-img').animate({ opacity: '0.5' });
    $('.asrama-img').animate({ opacity: '1' });
  });

  $('.asrama-img').on('click', function () {
    $('#pilihKamar').animate({ opacity: '0.5' });
    $('#pilihKamar').animate({ opacity: '1' });
  });

  $('#durasiSewa').on('click', function () {
    $('#totalHarga').animate({ opacity: '0.5' });
    $('#totalHarga').animate({ opacity: '1' });
  });
})(jQuery);
