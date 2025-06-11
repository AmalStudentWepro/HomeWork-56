export function Header() {
    const header = document.createElement("header");
    header.className = "header";
  
    header.innerHTML = `
      <div class="container">
        <div class="nav">
          <div class="nav-left">Your Name</div>
          <div class="nav-right">
            <a href="#">Blog</a>
            <a href="#">Projects</a>
            <a href="#">About</a>
            <a href="#">Newsletter</a>
            <div class="theme-toggle">
              <img src="/img/sun.png" alt="Sun Icon" class="theme-icon">
              <div class="theme-dot"></div>
            </div>
          </div>
        </div>
        <h1 class="main-title">THE BLOG</h1>
        <p class="subtitle">© 2025 Twitter · LinkedIn · Email · RSS feed · Add to Feedly</p>
      </div>
    `;
  
    return header;
  }
  