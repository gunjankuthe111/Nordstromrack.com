let head = () => {
  return `<div id="top">
        <div>
            <img src="https://seeklogo.com/images/N/nordstrom-rack-logo-3AF091AD18-seeklogo.com.png" alt="">
        </div>
        <div>
            <input type="text" placeholder="🔍  Search for product or brands" id="searchbar"/>
        </div>
        <div>
            <li id="dropdown"><a href="./verify.html">Sign In</a>
                <ul class="dropdown">
                    <li><button><a href="signup.html">Create Account | Sign In</a></button></li>
                    <li><a href="#">🛄Purchases</a></li>
                    <li><a href="#"> ♡ Wishlist</a></li>
                    <li><a href="#">⚡️The Noddy Club</a></li>
                    <li><a href="#">🚛Shipping Address</a></li>
                    <li><a href="#">💳Payment Option</a></li>
                    <li><a href="#">☎️Contact Us</a></li>
                </ul>
            </li>
            <a href="./bag.html">🛒</a>
        </div>
    </div>`;
};

export default head;
