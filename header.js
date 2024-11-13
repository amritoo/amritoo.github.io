let appHeader = `
    <i class="header-toggle d-xl-none bi bi-list"></i>

    <div class="profile-img">
      <img src="assets/img/my-profile-img.png" alt="" class="img-fluid rounded-circle">
    </div>

    <a href="index.html" class="logo d-flex align-items-center justify-content-center">
      <!-- Uncomment the line below if you also wish to use an image logo -->
      <!-- <img src="assets/img/logo.png" alt=""> -->
      <h1 class="sitename">Amrita Das Tipu</h1>
    </a>

    <div class="social-links text-center">
      <a href="#" class="twitter"><i class="bi bi-twitter-x"></i></a>
      <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
      <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
      <a href="#" class="google-plus"><i class="bi bi-skype"></i></a>
      <a href="http://www.linkedin.com/in/amritoo/" class="linkedin"><i class="bi bi-linkedin"></i></a>
    </div>

    <nav id="navmenu" class="navmenu">
      <ul>
        <li><a href="/index.html#hero" class="active"><i class="bi bi-house navicon"></i>Home</a></li>
        <li><a href="/index.html#about"><i class="bi bi-person navicon"></i> About</a></li>
        <li><a href="/index.html#skills"><i class="bi bi-person navicon"></i> Skills</a></li>
        <li><a href="/index.html#resume"><i class="bi bi-file-earmark-text navicon"></i> Resume</a></li>
        <li><a href="/index.html#publications"><i class="bi bi-images navicon"></i> Publications</a></li>
        <li><a href="/index.html#projects"><i class="bi bi-images navicon"></i> Projects</a></li>
        <li class="dropdown"><a href="index.html#services"><i class="bi bi-menu-button navicon"></i> <span>Activities</span> 
            <i class="bi bi-chevron-down toggle-dropdown"></i></a>
          <ul>
            <li><a href="/service-details.html#batch-councilor">Batch Councilor</a></li>
            <li><a href="/service-details.html#advisor">Advisor</a></li>
            <li><a href="/service-details.html#mentor">Mentor</a></li>
            <li><a href="/service-details.html#research-assistant">Research Assistant</a></li>
            <li><a href="/service-details.html#executive-member">Executive Member</a></li>
          </ul>
        </li>
        <li><a href="/index.html#blog"><i class="bi bi-envelope navicon"></i> Personal Blog</a></li>
        <li><a href="/index.html#contact"><i class="bi bi-envelope navicon"></i> Contact</a></li>
      </ul>
    </nav>
`;
document.getElementById("header").innerHTML = appHeader;


{/* <li class="dropdown"><a href="#"><i class="bi bi-menu-button navicon"></i> <span>Dropdown</span> <i
class="bi bi-chevron-down toggle-dropdown"></i></a>
<ul>
<li><a href="#">Dropdown 1</a></li>
<li class="dropdown"><a href="#"><span>Deep Dropdown</span> <i
    class="bi bi-chevron-down toggle-dropdown"></i></a>
<ul>
  <li><a href="#">Deep Dropdown 1</a></li>
  <li><a href="#">Deep Dropdown 2</a></li>
</ul>
</li>
<li><a href="#">Dropdown 2</a></li>
</ul>
</li> */}