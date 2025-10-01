
/**
 * Load header component dynamically
 * Updates navigation across all pages
 */
function loadHeader() {
  const headerHTML = `
    <div class="menu">
      <a href="index.html"><img src="../images/zohalibas-logo.png" alt="logo" id="logo"></a>
      <h1>ZOHA LIBAS CENTER</h1>
      <nav>
        <ul class="nav">
          <li><a href="index.html">Home</a></li>
          <li><a href="collection.html">Collection</a></li>
          <li><a href="account.html">Accounts</a></li>
          <li><a href="about.html">About us</a></li>
          <li><a href="contact.html">Contact us</a></li>
        </ul>
      </nav>
    </div>
  `;
  
  const headerContainer = document.getElementById('header-placeholder');
  if (headerContainer) {
    headerContainer.innerHTML = headerHTML;
  }
}

/**
 * Load footer component dynamically
 * Updates footer across all pages
 */
function loadFooter() {
  const footerHTML = `
    <footer>
      <ul class="foot_links">
        <li><a href="index.html">Home</a></li>
        <li><a href="collection.html">Collection</a></li>
        <li><a href="account.html">Accounts</a></li>
        <li><a href="about.html">About us</a></li>
        <li><a href="contact.html">Contact us</a></li>
      </ul>
      <p class="foot_links">Follow us on Instagram @ZohaLibas | Email: contact@zohalibas.com</p>
      <p class="foot_links">&copy; 2025 Zoha Libas. All rights reserved.</p>
    </footer>
  `;
  
  const footerContainer = document.getElementById('footer-placeholder');
  if (footerContainer) {
    footerContainer.innerHTML = footerHTML;
  }
}


/**
 * Initialize components when DOM is ready
 */
document.addEventListener('DOMContentLoaded', function() {
  loadHeader();
  loadFooter();
});

// ============================================
// FORM HANDLERS (Account Page)
// ============================================

/**
 * Handle daily sales image upload
 * Displays preview of selected image
 */
const dailySaleForm = document.getElementById('daily_sale_img');
if (dailySaleForm) {
  dailySaleForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const input = document.getElementById('imageInput');
    const files = input.files;

    // Display image preview
    if (files.length > 0) {
      const preview = document.getElementById('preview');
      preview.src = URL.createObjectURL(files[0]);
      preview.style.display = 'block';
      
      alert(`${files.length} image(s) selected.`);
    } else {
      alert('Please select at least one image.');
    }

  });
}

/**
 * Handle daily sales form submission
 * Collects sale data for logging
 */
const salesForm = document.getElementById('salesForm');
if (salesForm) {
  salesForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Collect form values
    const saleDate = document.getElementById('saleDate').value;
    const seller = document.getElementById('itemName').value;
    const amount = document.getElementById('amount').value;
    const paymentMode = document.querySelector('input[name="paymentMode"]:checked');

    // Validate inputs
    if (!saleDate || !seller || !amount) {
      alert('Please fill in all required fields.');
      return;
    }

    if (!paymentMode) {
      alert('Please select a payment mode (Cash or Online).');
      return;
    }

    // Determine cash and online amounts based on payment mode
    const cash = paymentMode.value === 'cash' ? amount : 0;
    const online = paymentMode.value === 'online' ? amount : 0;

    // Display confirmation
    console.log('Sale Data:', { saleDate, seller, amount, paymentMode: paymentMode.value, cash, online });
    alert(`Sale recorded:\nDate: ${saleDate}\nSeller: ${seller}\nAmount: Rs.${amount}\nPayment Mode: ${paymentMode.value.toUpperCase()}`);
    
    // Reset form
    salesForm.reset();
  });
}