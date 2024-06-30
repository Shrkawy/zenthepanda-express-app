$(document).ready(function() {
    // Default language (English)
    var currentLang = getCookie("langData") || 'en';
    
    // Function to load translations
    function loadTranslations(lang) {
    var jsonUrl = 'assets/translations/' + lang + '.json';
    
    $.getJSON(jsonUrl)
    .done(function(data) {
    console.log(data);
    
    $('[data-translate]').each(function() {
    var key = $(this).data('translate');
    if (data[key] !== undefined) {
    // Check if the element is a button or contains a data-translate attribute
    if ($(this).is('button') || $(this).find('[data-translate]').length > 0) {
    $(this).html(data[key]); // Update HTML content
    } else {
    $(this).text(data[key]); // Update text content
    }
    }
    });
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
    console.log("Error loading translations:", textStatus, errorThrown);
    });
    }
    
    function setLanguageButton(lang) {
    var langText = lang.toUpperCase();
    var imagePath = "assets/images/flags/" + lang + ".svg";
    var imgElement = $("<img>").attr("src", imagePath).addClass("");
    $(".language-btn").empty().append(imgElement).append(langText);
    }
    
    setLanguageButton(currentLang);
    // Initial load
    loadTranslations(currentLang);
    
    // Language dropdown click event
    $('.lang-select').click(function(e) {
    e.preventDefault();
    var selectedLang = $(this).data('lang');
    console.log("Selected Language:", selectedLang);
    if (selectedLang !== currentLang) {
    currentLang = selectedLang;
    loadTranslations(currentLang);
    setCookie("langData", currentLang, 7);
    setLanguageButton(currentLang);
    }
    });
    });
    
    // Function to set a cookie
    function setCookie(cookieName, cookieValue, expirationDays) {
    var d = new Date();
    d.setTime(d.getTime() + (expirationDays * 24 * 60 * 60* 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
    }
    
    // Function to get a cookie
    function getCookie(cookieName) {
    var name = cookieName + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(';');
    for (var i = 0; i < cookieArray.length; i++) {
    var cookie = cookieArray[i].trim();
    if (cookie.indexOf(name) == 0) {
    return cookie.substring(name.length, cookie.length);
    }
    }
    return "";
    }