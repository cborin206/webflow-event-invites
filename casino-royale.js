var insertForm750592 = function() {
        var html750592 = '<style text=\'text/css\'>' + 
'.registration-form label{color: #404040;' + 
'                display: block;}' + 
'' + 
'.registration-form label.error,' + 
'                     .registration-form #card-errors{color: #900;}' + 
'' + 
'.registration-form label.error{display: block;' + 
'                padding: 0 10px;}' + 
'' + 
'.registration-form section{padding: 5px;}' + 
'' + 
'.registration-form .field{padding: 4px 0;}' + 
'' + 
'.registration-form .field .required-star{color: #aa0000; ' + 
'                display: inline-block; ' + 
'                margin-left: 5px;}' + 
'' + 
'.registration-form .field .checkboxes{max-width:275px;' + 
'                border: 1px solid #A9A9A9;' + 
'                -webkit-transition: all .3s ease-out;' + 
'                -moz-transition: all .3s ease-out;' + 
'                transition: all .3s ease-out;}' + 
'' + 
'.registration-form .field .checkbox{display:block;' + 
'                position:relative;' + 
'                -moz-box-sizing:border-box;' + 
'                box-sizing:border-box;' + 
'                height:30px;' + 
'                line-height:26px;' + 
'                padding:2px 28px 2px 8px;' + 
'                border-bottom:1px solid rgba(0,0,0,0.1);' + 
'                color:#404040;  ' + 
'                overflow:hidden;' + 
'                text-decoration:none; }' + 
'' + 
'.registration-form .field .checkbox input{opacity:0.01;' + 
'                position:absolute;' + 
'                left:-50px;  ' + 
'                z-index:-5;}' + 
'' + 
'.registration-form .field .checkbox:last-child{border-bottom:none;}' + 
'' + 
'.registration-form .field .checkbox.selected{background: rgb(50, 142, 253);' + 
'                color:#fff; }' + 
'' + 
'.registration-form .field .checkbox.selected:before{color:#fff;' + 
'                line-height:30px;' + 
'                position:absolute;' + 
'                right:10px; }' + 
'' + 
'.registration-form .section.consent .field.checkbox:not(.consent-all){margin-left: 20px;}' + 
'' + 
'.registration-form .field input,' + 
'                     .registration-form .field select,' + 
'                     .registration-form .field textarea,' + 
'                     .registration-form #card-element{padding: 4px; ' + 
'                max-width: 275px;' + 
'                width: 96%}' + 
'' + 
'.registration-form .field .StripeElement{background-color: white;' + 
'                background-color: -moz-field;' + 
'                border: 1px solid darkgray;' + 
'                display: inline-block;}' + 
'' + 
'.registration-form .field textarea.international{height: 120px;}' + 
'' + 
'.registration-form .field select{box-sizing: content-box;}' + 
'' + 
'.registration-form .field.radio label,' + 
'                     .registration-form .field.checkbox label{display: inline-block;}' + 
'' + 
'.registration-form .field.radio input,' + 
'                     .registration-form .field.checkbox input{width: auto;' + 
'                margin-left: 0;}' + 
'' + 
'.registration-form .field .sidenote{color: #999;' + 
'                font-size: 10px; }' + 
'' + 
'.registration-form .field.additional-amount,{display: inline-block;}' + 
'' + 
'.registration-form .field.additional-amount{padding-left: 6px;}' + 
'' + 
'.registration-form #additional-amount{width: 65px;}' + 
'' + 
'.registration-form .errors{border: 1px solid #900;' + 
'                color: #900;  ' + 
'                padding: 10px;}' + 
'' + 
'.registration-form .radio label.error{display: inline-block;' + 
'                padding-right: 86%;  ' + 
'                float: right;}' + 
'' + 
'.registration-form .hidden{display: none;}' + 
'' + 
'.btn-group .btn-submit-registration{padding: 4px 10px;}' + 
'' + 
'.registration-form .registration-summary{border-collapse: collapse}' + 
'' + 
'.registration-form .registration-summary td,' + 
'                     .registration-form .registration-summary th{padding: 5px}' + 
'' + 
'.registration-form .registration-summary .summary-total{font-weight: bold;' + 
'                border-top: 1px solid black;}' + 
'' + 
'.registration-form .registration-summary{text-align: left;}' + 
'' + 
'.registration-form .registration-summary .description-column{min-width: 140px;}' + 
'' + 
'.registration-form .registration-summary .quantity-column{min-width: 70px;}' + 
'' + 
'.registration-form .registration-summary .ticket-columns{min-width: 60px;}' + 
'' + 
'.registration-form .registration-summary label.error{display: block;}' + 
'' + 
'.registration-form .registration-summary #numberOfRegistrations{width: 40px;}' + 
'' + 
'.registration-form .registration-summary input.amount-field{width: 65px;}' + 
'' + 
'iframe#spreedly-iframe[style=\'visibility: hidden;\']{display: none;}' + 
'' + 
'input, select, textarea, button{font-family: inherit;}' + 
'' + 
'#spreedly-modal-overlay[style="visibility:hidden"]{display: none;}' + 
'' + 
'</style>' + 
'' + 
'<div id="registration-form-container">' + 
'  <form id="registration-form" class="registration-form" method="post" onsubmit="event.preventDefault(); collectPayment();">' + 
'    <div class="errors hidden"></div>' + 
'    <div class="section registrationType">' + 
'      <h3>Casino Royale Fundraiser Registration</h3>' + 
'      <div class="field radio 752640 required" >' + 
'<label for="752640"><input id="752640" name="registration-type" class="required" type="radio" value="750.000000" maxlength="255" data-short-name="Individual Donation" data-ticket-quantity="1" data-registration-type-value="749569" data-non-deductible-amount="0.000000"></input><span class="label">$750.00 - Individual Donation: Individual Ticket</span></label>' + 
'</div>' + 
'<div class="field radio 752641 required" >' + 
'<label for="752641"><input id="752641" name="registration-type" class="required" type="radio" value="1250.000000" maxlength="255" data-short-name="Couples Donation" data-ticket-quantity="2" data-registration-type-value="749570" data-non-deductible-amount="0.000000"></input><span class="label">$1,250.00 - Couples Donation: Couples Ticket</span></label>' + 
'</div>' + 
'<div class="field radio cannot-attend required" >' + 
'<label for="cannot-attend"><input id="cannot-attend" name="registration-type" class="required" type="radio" maxlength="255" data-short-name="Donation" data-registration-type-value="749571"></input><span class="label">Sorry, I can\'t attend, but I would like to show my support by making a donation</span></label>' + 
'</div>' + 
'' + 
'</div>' + 
'    <div class="section registrationSummary">' + 
'      <table class="registration-summary" style="display: none" data-registration-type-field-id="688130" data-ticket-quantity-field-id="688131">' + 
'                        <tr>' + 
'                            <th class="quantity-column">Quantity</th>' + 
'                            <th class="description-column">Type</th>' + 
'                            <th class="tickets-column">Tickets</th>' + 
'                            <th class="price-column">Price</th>' + 
'                        </tr>' + 
'                        <tr class="summary-row">' + 
'                            <td><input id="numberOfRegistrations" type="number" class="required integer minimum1" value="1"></input> &times;' + 
'                                <label for="numberOfRegistrations" class="error" style="display: none" generated="true"></label></td>' + 
'                            <td><span id="shortDescription"></span></td>' + 
'                            <td><span id="ticketQty"></span></td>' + 
'                            <td><span id="unitPrice"></span></td>' + 
'                        </tr>' + 
'                        ' + 
'                        <tr class="additional-donation">' + 
'                            <td></td>' + 
'                            <td>Additional Donation</td>' + 
'                            <td></td>' + 
'                            <td><input id="additional-donation-amount" name="additionalDonationAmount" type="text" class="currency amount-field minimum1" placeholder="$0.00">' + 
'                                <label for="additional-donation-amount" class="error" style="display: none" generated="true"></label></input></td>' + 
'                        </tr>' + 
'                        <tr class="cannot-attend-donation" style="display: none">      ' + 
'                            <td></td>' + 
'                            <td>Donation</td>' + 
'                            <td></td>' + 
'                            <td><input id="cannot-attend-amount" name="cannotAttendAmount" type="text" class="currency amount-field required minimum1" placeholder="$0.00"></input>' + 
'                                <label for="cannot-attend-amount" class="error" style="display: none" generated="true"></label></td>' + 
'                        </tr>' + 
'                        <tr class="summary-total">' + 
'                            <td>Total:</td>' + 
'                            <td></td>' + 
'                            <td><span id="totalTicketQty">0</span></td>' + 
'                            <td><span id="totalPrice">$0.00</span></td>' + 
'                        </tr>' + 
'                    </table>' + 
'' + 
'</div>' + 
'    ' + 
'    ' + 
'    <div class="section contact">' + 
'      <h3>Contact Information</h3>' + 
'      <div class="field text first-name required" >' + 
'<label for="first-name"><span class="label">First Name</span><span class="required-star">*</span></label>' + 
'<input id="first-name" name="first-name" class="required" type="text"></input>' + 
'</div>' + 
'<div class="field text last-name required" >' + 
'<label for="last-name"><span class="label">Last Name</span><span class="required-star">*</span></label>' + 
'<input id="last-name" name="last-name" class="required" type="text"></input>' + 
'</div>' + 
'<div class="field email email-address required" >' + 
'<label for="email-address"><span class="label">Email</span><span class="required-star">*</span></label>' + 
'<input id="email-address" name="email-address" class="email required" type="email" placeholder="someone@website.com"></input>' + 
'</div>' + 
'<div class="field tel phone-number" >' + 
'<label for="phone-number"><span class="label">Phone</span></label>' + 
'<input id="phone-number" name="phone-number" class="phoneUS" type="tel"></input>' + 
'</div>' + 
'' + 
'</div>' + 
'    <div class="section billing-address">' + 
'      <div class="field  country required" >' + 
'<label for="country">Country<span class="required-star">*</span></label>' + 
'<select id="country" name="country" class="required"><option value=""></option>' + 
'<option value="AF">Afghanistan</option>' + 
'<option value="AX">Aland Islands</option>' + 
'<option value="AL">Albania</option>' + 
'<option value="DZ">Algeria</option>' + 
'<option value="AS">American Samoa</option>' + 
'<option value="AD">Andorra</option>' + 
'<option value="AO">Angola</option>' + 
'<option value="AI">Anguilla</option>' + 
'<option value="AQ">Antarctica</option>' + 
'<option value="AG">Antigua and Barbuda</option>' + 
'<option value="AR">Argentina</option>' + 
'<option value="AM">Armenia</option>' + 
'<option value="AW">Aruba</option>' + 
'<option value="AU">Australia</option>' + 
'<option value="AT">Austria</option>' + 
'<option value="AZ">Azerbaijan</option>' + 
'<option value="BS">Bahamas</option>' + 
'<option value="BH">Bahrain</option>' + 
'<option value="BD">Bangladesh</option>' + 
'<option value="BB">Barbados</option>' + 
'<option value="BY">Belarus</option>' + 
'<option value="BE">Belgium</option>' + 
'<option value="BZ">Belize</option>' + 
'<option value="BJ">Benin</option>' + 
'<option value="BM">Bermuda</option>' + 
'<option value="BT">Bhutan</option>' + 
'<option value="BO">Bolivia</option>' + 
'<option value="BA">Bosnia and Herzegovina</option>' + 
'<option value="BW">Botswana</option>' + 
'<option value="BV">Bouvet Island</option>' + 
'<option value="BR">Brazil</option>' + 
'<option value="IO">British Indian Ocean Territory</option>' + 
'<option value="BN">Brunei Darussalam</option>' + 
'<option value="BG">Bulgaria</option>' + 
'<option value="BF">Burkina Faso</option>' + 
'<option value="BI">Burundi</option>' + 
'<option value="KH">Cambodia</option>' + 
'<option value="CM">Cameroon</option>' + 
'<option value="CA">Canada</option>' + 
'<option value="CV">Cape Verde</option>' + 
'<option value="KY">Cayman Islands</option>' + 
'<option value="CF">Central African Republic</option>' + 
'<option value="TD">Chad</option>' + 
'<option value="CL">Chile</option>' + 
'<option value="CN">China</option>' + 
'<option value="CX">Christmas Island</option>' + 
'<option value="CC">Cocos (Keeling) Islands</option>' + 
'<option value="CO">Colombia</option>' + 
'<option value="KM">Comoros</option>' + 
'<option value="CG">Congo</option>' + 
'<option value="CD">Democratic Republic of the Congo</option>' + 
'<option value="CK">Cook Islands</option>' + 
'<option value="CR">Costa Rica</option>' + 
'<option value="CI">Cote d\'Ivoire</option>' + 
'<option value="HR">Croatia</option>' + 
'<option value="CU">Cuba</option>' + 
'<option value="CW">Curacao</option>' + 
'<option value="CY">Cyprus</option>' + 
'<option value="CZ">Czech Republic</option>' + 
'<option value="DK">Denmark</option>' + 
'<option value="DJ">Djibouti</option>' + 
'<option value="DM">Dominica</option>' + 
'<option value="DO">Dominican Republic</option>' + 
'<option value="EC">Ecuador</option>' + 
'<option value="EG">Egypt</option>' + 
'<option value="SV">El Salvador</option>' + 
'<option value="GQ">Equatorial Guinea</option>' + 
'<option value="ER">Eritrea</option>' + 
'<option value="EE">Estonia</option>' + 
'<option value="SZ">Eswatini</option>' + 
'<option value="ET">Ethiopia</option>' + 
'<option value="FK">Falkland Islands (Malvinas)</option>' + 
'<option value="FO">Faroe Islands</option>' + 
'<option value="FJ">Fiji</option>' + 
'<option value="FI">Finland</option>' + 
'<option value="FR">France</option>' + 
'<option value="GF">French Guiana</option>' + 
'<option value="PF">French Polynesia</option>' + 
'<option value="TF">French Southern Territories</option>' + 
'<option value="GA">Gabon</option>' + 
'<option value="GM">Gambia</option>' + 
'<option value="GE">Georgia</option>' + 
'<option value="DE">Germany</option>' + 
'<option value="GH">Ghana</option>' + 
'<option value="GI">Gibraltar</option>' + 
'<option value="GR">Greece</option>' + 
'<option value="GL">Greenland</option>' + 
'<option value="GD">Grenada</option>' + 
'<option value="GP">Guadeloupe</option>' + 
'<option value="GU">Guam</option>' + 
'<option value="GT">Guatemala</option>' + 
'<option value="GG">Guernsey</option>' + 
'<option value="GN">Guinea</option>' + 
'<option value="GW">Guinea-Bissau</option>' + 
'<option value="GY">Guyana</option>' + 
'<option value="HT">Haiti</option>' + 
'<option value="HM">Heard Island</option>' + 
'<option value="HN">Honduras</option>' + 
'<option value="HK">Hong Kong</option>' + 
'<option value="HU">Hungary</option>' + 
'<option value="IS">Iceland</option>' + 
'<option value="IN">India</option>' + 
'<option value="ID">Indonesia</option>' + 
'<option value="IR">Islamic Republic of Iran</option>' + 
'<option value="IQ">Iraq</option>' + 
'<option value="IE">Ireland</option>' + 
'<option value="IM">Isle of Man</option>' + 
'<option value="IL">Israel</option>' + 
'<option value="IT">Italy</option>' + 
'<option value="JM">Jamaica</option>' + 
'<option value="JP">Japan</option>' + 
'<option value="JE">Jersey</option>' + 
'<option value="JO">Jordan</option>' + 
'<option value="KZ">Kazakhstan</option>' + 
'<option value="KE">Kenya</option>' + 
'<option value="KI">Kiribati</option>' + 
'<option value="KP">Democratic People\'s Republic of Korea</option>' + 
'<option value="KR">Republic of Korea</option>' + 
'<option value="KW">Kuwait</option>' + 
'<option value="KG">Kyrgyzstan</option>' + 
'<option value="LA">Lao People\'s Democratic Republic</option>' + 
'<option value="LV">Latvia</option>' + 
'<option value="LB">Lebanon</option>' + 
'<option value="LS">Lesotho</option>' + 
'<option value="LR">Liberia</option>' + 
'<option value="LY">Libya</option>' + 
'<option value="LI">Liechtenstein</option>' + 
'<option value="LT">Lithuania</option>' + 
'<option value="LU">Luxembourg</option>' + 
'<option value="MO">Macao</option>' + 
'<option value="MK">Macedonia</option>' + 
'<option value="MG">Madagascar</option>' + 
'<option value="MW">Malawi</option>' + 
'<option value="MY">Malaysia</option>' + 
'<option value="MV">Maldives</option>' + 
'<option value="ML">Mali</option>' + 
'<option value="MT">Malta</option>' + 
'<option value="MH">Marshall Islands</option>' + 
'<option value="MQ">Martinique</option>' + 
'<option value="MR">Mauritania</option>' + 
'<option value="MU">Mauritius</option>' + 
'<option value="YT">Mayotte</option>' + 
'<option value="MX">Mexico</option>' + 
'<option value="FM">Federated States of Micronesia</option>' + 
'<option value="MD">Republic of Moldova</option>' + 
'<option value="MC">Monaco</option>' + 
'<option value="MN">Mongolia</option>' + 
'<option value="ME">Montenegro</option>' + 
'<option value="MS">Montserrat</option>' + 
'<option value="MA">Morocco</option>' + 
'<option value="MZ">Mozambique</option>' + 
'<option value="MM">Myanmar</option>' + 
'<option value="NA">Namibia</option>' + 
'<option value="NR">Nauru</option>' + 
'<option value="NP">Nepal</option>' + 
'<option value="NL">Netherlands</option>' + 
'<option value="NC">New Caledonia</option>' + 
'<option value="NZ">New Zealand</option>' + 
'<option value="NI">Nicaragua</option>' + 
'<option value="NE">Niger</option>' + 
'<option value="NG">Nigeria</option>' + 
'<option value="NU">Niue</option>' + 
'<option value="NF">Norfolk Island</option>' + 
'<option value="MP">Northern Mariana Islands</option>' + 
'<option value="NO">Norway</option>' + 
'<option value="OM">Oman</option>' + 
'<option value="PK">Pakistan</option>' + 
'<option value="PW">Palau</option>' + 
'<option value="PS">State of Palestine</option>' + 
'<option value="PA">Panama</option>' + 
'<option value="PG">Papua New Guinea</option>' + 
'<option value="PY">Paraguay</option>' + 
'<option value="PE">Peru</option>' + 
'<option value="PH">Philippines</option>' + 
'<option value="PN">Pitcairn</option>' + 
'<option value="PL">Poland</option>' + 
'<option value="PT">Portugal</option>' + 
'<option value="PR">Puerto Rico</option>' + 
'<option value="QA">Qatar</option>' + 
'<option value="RE">Reunion</option>' + 
'<option value="RO">Romania</option>' + 
'<option value="RU">Russian Federation</option>' + 
'<option value="RW">Rwanda</option>' + 
'<option value="BL">Saint Barthelemy</option>' + 
'<option value="SH">Ascension and Tristan da Cunha Saint Helena</option>' + 
'<option value="KN">Saint Kitts and Nevis</option>' + 
'<option value="LC">Saint Lucia</option>' + 
'<option value="MF">Saint Martin (French part)</option>' + 
'<option value="PM">Saint Pierre and Miquelon</option>' + 
'<option value="VC">Saint Vincent and the Grenadines</option>' + 
'<option value="WS">Samoa</option>' + 
'<option value="SM">San Marino</option>' + 
'<option value="ST">Sao Tome and Principe</option>' + 
'<option value="SA">Saudi Arabia</option>' + 
'<option value="SN">Senegal</option>' + 
'<option value="RS">Serbia</option>' + 
'<option value="SC">Seychelles</option>' + 
'<option value="SL">Sierra Leone</option>' + 
'<option value="SG">Singapore</option>' + 
'<option value="SX">Sint Maarten (Dutch part)</option>' + 
'<option value="SK">Slovakia</option>' + 
'<option value="SI">Slovenia</option>' + 
'<option value="SB">Solomon Islands</option>' + 
'<option value="SO">Somalia</option>' + 
'<option value="ZA">South Africa</option>' + 
'<option value="GS">South Georgia</option>' + 
'<option value="SS">South Sudan</option>' + 
'<option value="ES">Spain</option>' + 
'<option value="LK">Sri Lanka</option>' + 
'<option value="SD">Sudan</option>' + 
'<option value="SR">Suriname</option>' + 
'<option value="SJ">Svalbard and Jan Mayen</option>' + 
'<option value="SE">Sweden</option>' + 
'<option value="CH">Switzerland</option>' + 
'<option value="SY">Syrian Arab Republic</option>' + 
'<option value="TW">Taiwan</option>' + 
'<option value="TJ">Tajikistan</option>' + 
'<option value="TZ">United Republic of Tanzania</option>' + 
'<option value="TH">Thailand</option>' + 
'<option value="TL">Timor-Leste</option>' + 
'<option value="TG">Togo</option>' + 
'<option value="TK">Tokelau</option>' + 
'<option value="TO">Tonga</option>' + 
'<option value="TT">Trinidad and Tobago</option>' + 
'<option value="TN">Tunisia</option>' + 
'<option value="TR">Turkey</option>' + 
'<option value="TM">Turkmenistan</option>' + 
'<option value="TC">Turks and Caicos Islands</option>' + 
'<option value="TV">Tuvalu</option>' + 
'<option value="UG">Uganda</option>' + 
'<option value="UA">Ukraine</option>' + 
'<option value="AE">United Arab Emirates</option>' + 
'<option value="GB">United Kingdom</option>' + 
'<option value="US" selected>United States</option>' + 
'<option value="UM">United States Minor Outlying Islands</option>' + 
'<option value="UY">Uruguay</option>' + 
'<option value="UZ">Uzbekistan</option>' + 
'<option value="VU">Vanuatu</option>' + 
'<option value="VA">Vatican City</option>' + 
'<option value="VE">Venezuela</option>' + 
'<option value="VN">Viet Nam</option>' + 
'<option value="VG">British Virgin Islands</option>' + 
'<option value="VI">U.S. Virgin Islands</option>' + 
'<option value="WF">Wallis and Futuna</option>' + 
'<option value="EH">Western Sahara</option>' + 
'<option value="YE">Yemen</option>' + 
'<option value="ZM">Zambia</option>' + 
'<option value="ZW">Zimbabwe</option>' + 
'</select>' + 
'</div>' + 
'<div class="field  street-address required" >' + 
'<label for="street-address"><span class="label">Address</span><span class="required-star">*</span></label>' + 
'<textarea id="street-address" name="street-address" class="required"></textarea>' + 
'</div>' + 
'<div class="field text city required" >' + 
'<label for="city"><span class="label">City</span><span class="required-star">*</span></label>' + 
'<input id="city" name="city" class="required" type="text" data-us-label="City" data-bm-label="Parish"></input>' + 
'</div>' + 
'<div class="field  state required" >' + 
'<label for="state">State<span class="required-star">*</span></label>' + 
'<select id="state" name="state" class="required"><option value=""></option>' + 
'<option value="AL">Alabama</option>' + 
'<option value="AK">Alaska</option>' + 
'<option value="AS">American Samoa</option>' + 
'<option value="AZ">Arizona</option>' + 
'<option value="AR">Arkansas</option>' + 
'<option value="AE">Armed Forces Africa, Canada, Europe, Middle East</option>' + 
'<option value="AA">Armed Forces Americas (except Canada)</option>' + 
'<option value="AP">Armed Forces Pacific</option>' + 
'<option value="CA">California</option>' + 
'<option value="CO">Colorado</option>' + 
'<option value="CT">Connecticut</option>' + 
'<option value="DE">Delaware</option>' + 
'<option value="DC">District of Columbia</option>' + 
'<option value="FL">Florida</option>' + 
'<option value="GA">Georgia</option>' + 
'<option value="GU">Guam</option>' + 
'<option value="HI">Hawaii</option>' + 
'<option value="ID">Idaho</option>' + 
'<option value="IL">Illinois</option>' + 
'<option value="IN">Indiana</option>' + 
'<option value="IA">Iowa</option>' + 
'<option value="KS">Kansas</option>' + 
'<option value="KY">Kentucky</option>' + 
'<option value="LA">Louisiana</option>' + 
'<option value="ME">Maine</option>' + 
'<option value="MD">Maryland</option>' + 
'<option value="MA">Massachusetts</option>' + 
'<option value="MI">Michigan</option>' + 
'<option value="MN">Minnesota</option>' + 
'<option value="MS">Mississippi</option>' + 
'<option value="MO">Missouri</option>' + 
'<option value="MT">Montana</option>' + 
'<option value="NE">Nebraska</option>' + 
'<option value="NV">Nevada</option>' + 
'<option value="NH">New Hampshire</option>' + 
'<option value="NJ">New Jersey</option>' + 
'<option value="NM">New Mexico</option>' + 
'<option value="NY">New York</option>' + 
'<option value="NC">North Carolina</option>' + 
'<option value="ND">North Dakota</option>' + 
'<option value="OH">Ohio</option>' + 
'<option value="OK">Oklahoma</option>' + 
'<option value="OR">Oregon</option>' + 
'<option value="PA">Pennsylvania</option>' + 
'<option value="PR">Puerto Rico</option>' + 
'<option value="RI">Rhode Island</option>' + 
'<option value="SC">South Carolina</option>' + 
'<option value="SD">South Dakota</option>' + 
'<option value="TN">Tennessee</option>' + 
'<option value="TX">Texas</option>' + 
'<option value="VI">US Virgin Islands</option>' + 
'<option value="UT">Utah</option>' + 
'<option value="VT">Vermont</option>' + 
'<option value="VA">Virginia</option>' + 
'<option value="WA">Washington</option>' + 
'<option value="WV">West Virginia</option>' + 
'<option value="WI">Wisconsin</option>' + 
'<option value="WY">Wyoming</option>' + 
'</select>' + 
'</div>' + 
'<div class="field  province required" style="display: none">' + 
'<label for="province">Province<span class="required-star">*</span></label>' + 
'<select id="province" name="province" class="required"><option value=""></option>' + 
'<option value="AB">Alberta</option>' + 
'<option value="BC">British Columbia</option>' + 
'<option value="MB">Manitoba</option>' + 
'<option value="NB">New Brunswick</option>' + 
'<option value="NL">Newfoundland and Labrador</option>' + 
'<option value="NT">Northwest Territories</option>' + 
'<option value="NS">Nova Scotia</option>' + 
'<option value="NU">Nunavut</option>' + 
'<option value="ON">Ontario</option>' + 
'<option value="PE">Prince Edward Island</option>' + 
'<option value="QC">Quebec</option>' + 
'<option value="SK">Saskatchewan</option>' + 
'<option value="YT">Yukon Territory</option>' + 
'</select>' + 
'</div>' + 
'<div class="field number zip-code required" >' + 
'<label for="zip-code"><span class="label">ZIP Code</span><span class="required-star">*</span></label>' + 
'<input id="zip-code" name="zip-code" class="zipcodeUS required" type="number" minlength="5" maxlength="10"></input>' + 
'</div>' + 
'<div class="field text postal-code required" style="display: none">' + 
'<label for="postal-code"><span class="label">Postal Code</span><span class="required-star">*</span></label>' + 
'<input id="postal-code" name="postal-code" class="required" type="text"></input>' + 
'</div>' + 
'' + 
'</div>' + 
'    <div class="section custom-fields">' + 
'      <h3>Additional Information</h3>' + 
'      <div class="field text CustomTransactionField_761857 required" >' + 
'<label for="CustomTransactionField_761857"><span class="label">Entity</span><span class="required-star">*</span></label>' + 
'<input id="CustomTransactionField_761857" name="CustomTransactionField_761857" class="required" type="text" maxlength="255"></input>' + 
'</div>' + 
'<div class="field text CustomTransactionField_762881 required" >' + 
'<label for="CustomTransactionField_762881"><span class="label">Years in Business</span><span class="required-star">*</span></label>' + 
'<input id="CustomTransactionField_762881" name="CustomTransactionField_762881" class="required" type="text" maxlength="255"></input>' + 
'</div>' + 
'<div class="field text CustomTransactionField_763905" >' + 
'<label for="CustomTransactionField_763905">Number of Employees</label>' + 
'<select id="CustomTransactionField_763905" name="CustomTransactionField_763905"><option value=""></option>' + 
'<option value="765953">>1,000</option>' + 
'<option value="766977">>5,000</option>' + 
'<option value="764929">>500</option>' + 
'<option value="768001">10,000+</option>' + 
'</select>' + 
'</div>' + 
'<div class="field text CustomTransactionField_804865 required" >' + 
'<label for="CustomTransactionField_804865">Which best describes your professional background?<span class="required-star">*</span></label>' + 
'<div id="CustomTransactionField_804865" class="checkboxes"><a href="javascript:void(0)" class="checkbox" data-id="807937" onclick="var box = jQuery(this).children(\'input\'); box.prop(\'checked\', !box.prop(\'checked\'));jQuery(box).trigger(\'change\'); return false;">' + 
'                                <input type="checkbox" value="807937" onchange="jQuery(this).closest(\'.checkbox\').toggleClass(\'selected\')">' + 
'                                <span class="text">City or State Official</span>' + 
'                              </a>' + 
'<a href="javascript:void(0)" class="checkbox" data-id="806913" onclick="var box = jQuery(this).children(\'input\'); box.prop(\'checked\', !box.prop(\'checked\'));jQuery(box).trigger(\'change\'); return false;">' + 
'                                <input type="checkbox" value="806913" onchange="jQuery(this).closest(\'.checkbox\').toggleClass(\'selected\')">' + 
'                                <span class="text">C-Suite leader at a major corporation</span>' + 
'                              </a>' + 
'<a href="javascript:void(0)" class="checkbox" data-id="809985" onclick="var box = jQuery(this).children(\'input\'); box.prop(\'checked\', !box.prop(\'checked\'));jQuery(box).trigger(\'change\'); return false;">' + 
'                                <input type="checkbox" value="809985" onchange="jQuery(this).closest(\'.checkbox\').toggleClass(\'selected\')">' + 
'                                <span class="text">Entrepreneur</span>' + 
'                              </a>' + 
'<a href="javascript:void(0)" class="checkbox" data-id="805889" onclick="var box = jQuery(this).children(\'input\'); box.prop(\'checked\', !box.prop(\'checked\'));jQuery(box).trigger(\'change\'); return false;">' + 
'                                <input type="checkbox" value="805889" onchange="jQuery(this).closest(\'.checkbox\').toggleClass(\'selected\')">' + 
'                                <span class="text">Philanthropist</span>' + 
'                              </a>' + 
'<a href="javascript:void(0)" class="checkbox" data-id="808961" onclick="var box = jQuery(this).children(\'input\'); box.prop(\'checked\', !box.prop(\'checked\'));jQuery(box).trigger(\'change\'); return false;">' + 
'                                <input type="checkbox" value="808961" onchange="jQuery(this).closest(\'.checkbox\').toggleClass(\'selected\')">' + 
'                                <span class="text">Sponsor/Partner</span>' + 
'                              </a>' + 
'<a href="javascript:void(0)" class="checkbox" data-id="811009" onclick="var box = jQuery(this).children(\'input\'); box.prop(\'checked\', !box.prop(\'checked\'));jQuery(box).trigger(\'change\'); return false;">' + 
'                                <input type="checkbox" value="811009" onchange="jQuery(this).closest(\'.checkbox\').toggleClass(\'selected\')">' + 
'                                <span class="text">Other</span>' + 
'                              </a>' + 
'</div>' + 
'</div>' + 
'<div class="field text CustomTransactionField_777217 required" >' + 
'<label for="CustomTransactionField_777217">What prompted your interest in this event?<span class="required-star">*</span></label>' + 
'<div id="CustomTransactionField_777217" class="checkboxes"><a href="javascript:void(0)" class="checkbox" data-id="778241" onclick="var box = jQuery(this).children(\'input\'); box.prop(\'checked\', !box.prop(\'checked\'));jQuery(box).trigger(\'change\'); return false;">' + 
'                                <input type="checkbox" value="778241" onchange="jQuery(this).closest(\'.checkbox\').toggleClass(\'selected\')">' + 
'                                <span class="text">Existing SFI Supporter</span>' + 
'                              </a>' + 
'<a href="javascript:void(0)" class="checkbox" data-id="779265" onclick="var box = jQuery(this).children(\'input\'); box.prop(\'checked\', !box.prop(\'checked\'));jQuery(box).trigger(\'change\'); return false;">' + 
'                                <input type="checkbox" value="779265" onchange="jQuery(this).closest(\'.checkbox\').toggleClass(\'selected\')">' + 
'                                <span class="text">Expanding Philanthropic Involvement</span>' + 
'                              </a>' + 
'<a href="javascript:void(0)" class="checkbox" data-id="780289" onclick="var box = jQuery(this).children(\'input\'); box.prop(\'checked\', !box.prop(\'checked\'));jQuery(box).trigger(\'change\'); return false;">' + 
'                                <input type="checkbox" value="780289" onchange="jQuery(this).closest(\'.checkbox\').toggleClass(\'selected\')">' + 
'                                <span class="text">Invitation from a colleague</span>' + 
'                              </a>' + 
'<a href="javascript:void(0)" class="checkbox" data-id="781313" onclick="var box = jQuery(this).children(\'input\'); box.prop(\'checked\', !box.prop(\'checked\'));jQuery(box).trigger(\'change\'); return false;">' + 
'                                <input type="checkbox" value="781313" onchange="jQuery(this).closest(\'.checkbox\').toggleClass(\'selected\')">' + 
'                                <span class="text">Invitation from Ascend</span>' + 
'                              </a>' + 
'</div>' + 
'</div>' + 
'<div class="field text CustomTransactionField_782337 required" >' + 
'<label for="CustomTransactionField_782337">Which level of involvement with Student Freedom Initiative are you most interested in exploring?<span class="required-star">*</span></label>' + 
'<div id="CustomTransactionField_782337" class="checkboxes"><a href="javascript:void(0)" class="checkbox" data-id="787457" onclick="var box = jQuery(this).children(\'input\'); box.prop(\'checked\', !box.prop(\'checked\'));jQuery(box).trigger(\'change\'); return false;">' + 
'                                <input type="checkbox" value="787457" onchange="jQuery(this).closest(\'.checkbox\').toggleClass(\'selected\')">' + 
'                                <span class="text">Existing SFI Supporter</span>' + 
'                              </a>' + 
'<a href="javascript:void(0)" class="checkbox" data-id="784385" onclick="var box = jQuery(this).children(\'input\'); box.prop(\'checked\', !box.prop(\'checked\'));jQuery(box).trigger(\'change\'); return false;">' + 
'                                <input type="checkbox" value="784385" onchange="jQuery(this).closest(\'.checkbox\').toggleClass(\'selected\')">' + 
'                                <span class="text">Learning more about the mission</span>' + 
'                              </a>' + 
'<a href="javascript:void(0)" class="checkbox" data-id="783361" onclick="var box = jQuery(this).children(\'input\'); box.prop(\'checked\', !box.prop(\'checked\'));jQuery(box).trigger(\'change\'); return false;">' + 
'                                <input type="checkbox" value="783361" onchange="jQuery(this).closest(\'.checkbox\').toggleClass(\'selected\')">' + 
'                                <span class="text">Making a meaningful one-time contribution</span>' + 
'                              </a>' + 
'<a href="javascript:void(0)" class="checkbox" data-id="785409" onclick="var box = jQuery(this).children(\'input\'); box.prop(\'checked\', !box.prop(\'checked\'));jQuery(box).trigger(\'change\'); return false;">' + 
'                                <input type="checkbox" value="785409" onchange="jQuery(this).closest(\'.checkbox\').toggleClass(\'selected\')">' + 
'                                <span class="text">Ongoing or leadership-level support</span>' + 
'                              </a>' + 
'<a href="javascript:void(0)" class="checkbox" data-id="786433" onclick="var box = jQuery(this).children(\'input\'); box.prop(\'checked\', !box.prop(\'checked\'));jQuery(box).trigger(\'change\'); return false;">' + 
'                                <input type="checkbox" value="786433" onchange="jQuery(this).closest(\'.checkbox\').toggleClass(\'selected\')">' + 
'                                <span class="text">Sponsorship Opportunities</span>' + 
'                              </a>' + 
'</div>' + 
'</div>' + 
'<div class="field text CustomTransactionField_789505 required" >' + 
'<label for="CustomTransactionField_789505"><span class="label">Are you an HBCU graduate? If yes, indicate school.</span><span class="required-star">*</span></label>' + 
'<input id="CustomTransactionField_789505" name="CustomTransactionField_789505" class="required" type="text" maxlength="255"></input>' + 
'</div>' + 
'<div class="field text CustomTransactionField_790529 required" >' + 
'<label for="CustomTransactionField_790529">Do you plan to participate in the Silent and Live Auction?<span class="required-star">*</span></label>' + 
'<select id="CustomTransactionField_790529" name="CustomTransactionField_790529" class="required"><option value=""></option>' + 
'<option value="792577">No</option>' + 
'<option value="791553">Yes</option>' + 
'</select>' + 
'</div>' + 
'<div class="field text CustomTransactionField_793601 required" >' + 
'<label for="CustomTransactionField_793601">What types of items would you be most excited to bid on at an auction?<span class="required-star">*</span></label>' + 
'<div id="CustomTransactionField_793601" class="checkboxes"><a href="javascript:void(0)" class="checkbox" data-id="796673" onclick="var box = jQuery(this).children(\'input\'); box.prop(\'checked\', !box.prop(\'checked\'));jQuery(box).trigger(\'change\'); return false;">' + 
'                                <input type="checkbox" value="796673" onchange="jQuery(this).closest(\'.checkbox\').toggleClass(\'selected\')">' + 
'                                <span class="text">Art/Collectibles</span>' + 
'                              </a>' + 
'<a href="javascript:void(0)" class="checkbox" data-id="797697" onclick="var box = jQuery(this).children(\'input\'); box.prop(\'checked\', !box.prop(\'checked\'));jQuery(box).trigger(\'change\'); return false;">' + 
'                                <input type="checkbox" value="797697" onchange="jQuery(this).closest(\'.checkbox\').toggleClass(\'selected\')">' + 
'                                <span class="text">Exclusive Luxury Items</span>' + 
'                              </a>' + 
'<a href="javascript:void(0)" class="checkbox" data-id="795649" onclick="var box = jQuery(this).children(\'input\'); box.prop(\'checked\', !box.prop(\'checked\'));jQuery(box).trigger(\'change\'); return false;">' + 
'                                <input type="checkbox" value="795649" onchange="jQuery(this).closest(\'.checkbox\').toggleClass(\'selected\')">' + 
'                                <span class="text">Sports Memorabilia</span>' + 
'                              </a>' + 
'<a href="javascript:void(0)" class="checkbox" data-id="794625" onclick="var box = jQuery(this).children(\'input\'); box.prop(\'checked\', !box.prop(\'checked\'));jQuery(box).trigger(\'change\'); return false;">' + 
'                                <input type="checkbox" value="794625" onchange="jQuery(this).closest(\'.checkbox\').toggleClass(\'selected\')">' + 
'                                <span class="text">Trips/Experiences</span>' + 
'                              </a>' + 
'</div>' + 
'</div>' + 
'<div class="field text CustomTransactionField_801793" >' + 
'<label for="CustomTransactionField_801793">Will you be attending with a guest?</label>' + 
'<select id="CustomTransactionField_801793" name="CustomTransactionField_801793"><option value=""></option>' + 
'<option value="803841">No</option>' + 
'<option value="802817">Yes</option>' + 
'</select>' + 
'</div>' + 
'' + 
'</div>' + 
'    <div class="section comment">' + 
'      <div class="field text comment" >' + 
'<label for="comment"><span class="label">Comments</span></label>' + 
'<textarea id="comment" name="comment" type="text" value="Comments"></textarea>' + 
'</div>' + 
'' + 
'</div>' + 
'    <div class="section consent hidden">' + 
'      <div class="field checkbox consent-all" >' + 
'<label for="consent-all"><input id="consent-all" name="consent-all" type="checkbox" maxlength="255"></input><span class="label">I would like to receive or continue receiving updates from Student Freedom Initiative</span></label>' + 
'</div>' + 
'<div class="field checkbox consent-email" style="display: none">' + 
'<label for="consent-email"><input id="consent-email" name="consent-email" type="checkbox" checked="checked" maxlength="255"></input><span class="label">by email</span></label>' + 
'</div>' + 
'<div class="field checkbox consent-mail" style="display: none">' + 
'<label for="consent-mail"><input id="consent-mail" name="consent-mail" type="checkbox" checked="checked" maxlength="255"></input><span class="label">by postal mail</span></label>' + 
'</div>' + 
'<div class="field checkbox consent-phone" style="display: none">' + 
'<label for="consent-phone"><input id="consent-phone" name="consent-phone" type="checkbox" checked="checked" maxlength="255"></input><span class="label">by phone</span></label>' + 
'</div>' + 
'' + 
'</div>' + 
'    <div class="section captcha">' + 
'      <label id=\'noCaptchaResponseError\' class=\'error noCaptchaResponseError\' style=\'display: none\'>You must fill out the CAPTCHA</label><div id="captcha750592"></div>' + 
'' + 
'</div>' + 
'    <div class="section payment">' + 
'      <h3>Payment Information</h3>' + 
'      <div class="field text payment required" id="stripe-cc-fields">' + 
'                                  <label for="card-element">' + 
'                                    <span class="label">Credit or debit card</span>' + 
'                                    <span class="required-star">*</span>' + 
'                                  </label>' + 
'                                  <div id="card-element"></div>' + 
'                                  <div id="card-errors" role="alert"></div>' + 
'                                </div>' + 
'' + 
'</div>' + 
'    ' + 
'    <p id="preview-text" style="font-style:italic;font-size:13px;font-family:Prompt, sans-serif;letter-spacing:0.25px;display:none;">More payment information appears on your live form. For a complete preview, go to the forms list and select View Hosted Form.</p>' + 
'    <div class="btn-group">' + 
'      <input class="btn btn-submit btn-submit-registration" type="submit" value="Register Now" id="express-submit" disabled="true" />' + 
'    </div>' + 
'  </form>' + 
'</div>' + 
'<div id="registration-processing-container" style="display: none">' + 
'  <h2>Processing...</h2><p>Your transaction is being processed. Please do not close your browser or leave this page.</p>' + 
'</div>' + 
'' + 
'' +  '';var successHtml750592 = '<div class=\'donation-success\'>' +
                                                       '  <h2>Thank You for Your Registration!</h2>' +
                                                       '  <p>Your registration for our event has been successfully processed. We look forward to seeing you there!</p>' + 
                                                        '\u003cdiv class=\"social-media-buttons\" style=\"margin-top:10px;\"\u003e\u003cdiv id=\"twitter-buttons\"\u003e\u003c/div\u003e\u003cdiv class=\"fb-like\" data-href=\"https://facebook.com/studentfreedomorg\" data-layout=\"button_count\" data-show-faces=\"true\" style=\"padding-right: 10px;\" data-action=\"like\" \u003e\u003c/div\u003e\u003cdiv id=\"facebookShareOnly\" class=\"fb-share-button\" data-href=\"https://facebook.com/studentfreedomorg\" data-layout=\"button_count\"\u003e\u003c/div\u003e\u003cscript type=\u0027text/javascript\u0027\u003edocument.getElementById(\u0027facebookShareOnly\u0027).setAttribute(\u0027data-href\u0027, window.location.href);\u003c/script\u003e\u003c/div\u003e \u003cscript\u003e\r\n                    if (navigator.userAgent.indexOf(\u0027Edge/\u0027) === -1) {\r\n                        !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?\"http\":\"https\";if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+\"://platform.twitter.com/widgets.js\";fjs.parentNode.insertBefore(js,fjs);}}(document, \"script\", \"twitter-wjs\");\r\n                        var twitterButtons = document.getElementById(\u0027twitter-buttons\u0027);\r\n                        twitterButtons.innerHTML = \u0027\u003cdiv id=\"tweetButton\" style=\"float:left; margin-right:10px\"\u003e \u003ca href=\"https://twitter.com/share\" data-text=\"I just registered for an event supporting @StudentFreedom. Come join me!\" class=\"twitter-share-button\"\u003eTweet\u003c/a\u003e \u003c/div\u003e\u003cdiv id=\"followButton\"\u003e \u003ca href=\"https://twitter.com/StudentFreedom\" class=\"twitter-follow-button\"\u003eFollow\u003c/a\u003e \u003c/div\u003e\u0027;\r\n                        twitterButtons.style.height = \u002735px\u0027;\r\n                    }\r\n                \u003c/script\u003e \u003cdiv id=\"fb-root\"\u003e\u003c/div\u003e \u003cscript\u003e(function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = \"//connect.facebook.net/en_US/sdk.js#xfbml=1\u0026version=v2.8\"; fjs.parentNode.insertBefore(js, fjs); }(document, \u0027script\u0027, \u0027facebook-jssdk\u0027));\u003c/script\u003e \u003cdiv class=\"additional-tickets\" style=\"margin-top: 10px;\"\u003e\u003cbutton type=\"button\" onclick=\"javascript:location.reload()\"\u003ePurchase Additional Tickets\u003c/button\u003e\u003c/div\u003e' + 
                                                        '</div>';( function($) {if (Bloomerang.useDonationId('750592')) { 
                                Bloomerang.useProcessor('13313', 'Stripe', 'pk_live_51Ha9bqHpWuT9ujWsoE8cJruzrkhtByX1MM2LLniGsl4Mi0wFUV76xstVN1TAcy62Ve6p0IoJxEFmhJaDRkdHUtzm00dAzaicPA');
                            } else {
                                html750592 = '<p style="color: red">Only one donation or event registration form can be used on each page.</p>';
                            }if (jQuery('#bloomerangForm750592').length) {
                        
                    if (window.ActiveXObject) { // they are using IE < 11, which doesn't support TLS 1.1
                        html750592 = '<p style="color: red">Your browser does not support the minimum security requirements for keeping your Credit Card information safe when processing payments. Please upgrade your browser or download the latest version of' + 
                        ' <a target=\'_blank\' href=\'https://www.google.com/chrome/browser/desktop/\'>Chrome</a> or <a target=\'_blank\' href=\'https://www.mozilla.org/en-US/firefox/new/\'>Firefox</a>.</p>';
                    }
                        jQuery('#bloomerangForm750592').after(html750592);
                        
                         Bloomerang.Util.requireStripe(function() {
                                        Bloomerang.Util.Stripe = Stripe('pk_live_51Ha9bqHpWuT9ujWsoE8cJruzrkhtByX1MM2LLniGsl4Mi0wFUV76xstVN1TAcy62Ve6p0IoJxEFmhJaDRkdHUtzm00dAzaicPA'); 
                                        let elements = null;

                                            // Create an instance of the stripe card element.
                                            elements = Bloomerang.Util.Stripe.elements();
                                            Bloomerang.Util.StripeCard = elements.create('card', {
                                              hidePostalCode: true,
                                              style: {
                                                base: {
                                                  color: "#ffffff",
                                                  fontSize: "14px",
                                                  fontFamily: "Inter, sans-serif"
                                                },
                                                invalid: {
                                                  color: "#ffffff"
                                                }
                                              }
                                            });
                                     
                                         if(!!document.querySelector("#membership-form")){
                                            Bloomerang.Util.StripeCardIsValid = true;
                                            Bloomerang.Util.RecurringStripeCardIsValid = true;
                                            Bloomerang.Util.RecurringStripeCard.mount('#card-element');
                                        }
                                        else
                                        {
                                            // Add an instance of the stripe card/payment element into the `card-element` <div>.
                                            Bloomerang.Util.StripeCard.mount('#card-element');
                                            Bloomerang.Util.StripeCardIsValid = false;
                                        }
                                     
                                        // Handle real-time validation errors from the card Element.
                                        Bloomerang.Util.StripeCard.addEventListener('change', function(event) {
                                          var displayError = document.getElementById('card-errors');
                                          if (event.error) {
                                            displayError.textContent = event.error.message;
                                          } else {
                                            displayError.textContent = '';
                                          }
                                          if (event.complete) {
                                            Bloomerang.Util.StripeCardIsValid = true;
                                          } else {
                                            Bloomerang.Util.StripeCardIsValid = false;
                                          }
                                        });
                                      });

                                      jQuery(".donation-form #express-submit").val("Donate Now");
                                      jQuery(".registration-form #express-submit").val("Register Now");
                                      jQuery(".membership-form #express-submit").val("Join");
                                      jQuery("#express-submit").attr("disabled", false);
                        
                        Bloomerang.Data.PayPal.IsPayPalVenmoEnabled = false;
                             jQuery("#paypal-button-container").remove();
Bloomerang.Data.PayPal.IsPayPalVenmoEnabled = false;
                                           jQuery("form.donation-form .recurring-paypal-venmo-label-info, #donation-form .recurring-paypal-venmo-label-info").remove();
                                           jQuery("#paypal-button-container").remove();
                                           jQuery("form.donation-form .PayPalVenmo, #donation-form .PayPalVenmo").remove();
                                           jQuery("form.donation-form .PayPal, #donation-form .PayPal").remove();
                                           jQuery("form.donation-form .Venmo, #donation-form .Venmo").remove();
Bloomerang.Data.PayPal.IsPayPalPaymentMethodVaultingEnabled = false;Bloomerang.Data.PayPal.IsVenmoSameDayDonationEnabled = false;
                        jQuery("form.donation-form .DebitCard, #donation-form .DebitCard").remove();jQuery("form.donation-form .CreditCard, #donation-form .CreditCard").remove();jQuery("form.donation-form .section.payment h3, #donation-form .section.payment h3").remove();
                    };
                    if (Bloomerang.paymentFormLoaded) {
                                            return false;
                                        }
                                        Bloomerang.paymentFormLoaded = true;
                      
                        Bloomerang.reCaptchaV3SiteKey = '6LcKJw8sAAAAAI_jEzr45K5qoT2ATKujjSys_Jqm';
                        Bloomerang.gRecaptchaV3Threshold = 0.5;

                        window.captchaLoadCallback = function() {
                            Bloomerang.gRecaptchaLoaded = true;
                        };
                        
                        window.captchaV3LoadCallback = function() {
                            Bloomerang.gRecaptchaV3Loaded = true;
                        };

                        if(Bloomerang.donationFormReCaptchaV3SelfHostedFlag === undefined) {
                            function success (result) {
                                Bloomerang.donationFormReCaptchaV3SelfHostedFlag = result.DonationFormReCaptchaV3SelfHostedFlag;
                                initializeCaptcha();
                            }
                                
                            function failure (result) {
                                Bloomerang.donationFormReCaptchaV3SelfHostedFlag = false;
                                initializeCaptcha();
                            } 

                            Bloomerang.Api._post('v1/ReCaptchaV3SelfHostedFlag', {}, success, failure);
                        } else {
                            initializeCaptcha();
                        }

                        async function getRecaptchaV3Token() {
                              const token = await new Promise((resolve, reject) => {
                                 grecaptcha.ready(function() {
                                    grecaptcha.execute(Bloomerang.reCaptchaV3SiteKey, {action: 'submit'}).then(function(token) {
                                       resolve(token);
                                     });
                                  });
                                });

                                return token;
                        }
                        
                        function initializeCaptcha() {
                            Bloomerang.Util.load('https://www.google.com/recaptcha/api.js?onload=captchaLoadCallback&render=explicit',
                                function() { return Bloomerang.gRecaptchaLoaded; },
                                function() {
                                    jQuery('.section.captcha').removeAttr('style');
                                    jQuery('form.registration-form').data('captcha-id', grecaptcha.render('captcha750592', { 'sitekey' : '6Ld8kg8sAAAAAP8ECpMcXxW103rW_nvbr7EoDQrz' }));
                                    
                                    if((Bloomerang.donationFormReCaptchaV3Flag && Bloomerang.isBloomerangHostedForm && Bloomerang.isDonationForm) || (Bloomerang.donationFormReCaptchaV3SelfHostedFlag && !Bloomerang.isBloomerangHostedForm && Bloomerang.reCaptchaV3SiteKey && Bloomerang.isDonationForm)) {
                                        jQuery('.section.captcha').attr('style', 'display: none');
                                    }
                                },
                                true,
                                true);
                            
                            if((Bloomerang.donationFormReCaptchaV3Flag && Bloomerang.isBloomerangHostedForm && Bloomerang.isDonationForm) || (Bloomerang.donationFormReCaptchaV3SelfHostedFlag && !Bloomerang.isBloomerangHostedForm && Bloomerang.isDonationForm && Bloomerang.reCaptchaV3SiteKey)) {
                                 Bloomerang.Util.load(`https://www.google.com/recaptcha/api.js?onload=captchaV3LoadCallback&render=${Bloomerang.reCaptchaV3SiteKey}`,
                                    function() { return Bloomerang.gRecaptchaV3Loaded; },
                                    function() {
                                        grecaptcha.ready(function() {
                                          grecaptcha.execute(Bloomerang.reCaptchaV3SiteKey, {action: 'submit'}).then(function(token) {
                                              async function success (result) {
                                                if(parseFloat(result.Score) < Bloomerang.gRecaptchaV3Threshold) {
                                                    Bloomerang.isForcePuzzle = true;
                                                    jQuery('.section.captcha').attr('style', 'display: block');
                                                } else {

                                                    const initialRecaptchaV3Token = await getRecaptchaV3Token();

                                                     // Append to the form data container to be included when submitting the form on bloomerangV2.js
                                                     Bloomerang.captchaResponseV3(initialRecaptchaV3Token);

                                                     setInterval(async ()=> {
                                                         const recaptchaV3Token = await getRecaptchaV3Token();

                                                        // Append to the form data container to be included when submitting the form on bloomerangV2.js
                                                        Bloomerang.captchaResponseV3(recaptchaV3Token);
                                                     }, 80000);
                                                }
                                               }
                                                
                                               function failure (result) {
                                                Bloomerang.isForcePuzzle = true;
                                                jQuery('.section.captcha').attr('style', 'display: block');
                                               }
                                                
                                               var data = {
                                                  token: token,
                                                  isSelfHosted: !Bloomerang.isBloomerangHostedForm
                                               };
                                                
                                                Bloomerang.Api._post('v1/ReCaptchaV3', data, success, failure);
                                          });
                                        });
                                    },
                                    true,
                                    true);
                               }
                           }
                            
                    
                    Bloomerang.transactionFee = 0.3; 
                    Bloomerang.transactionFeeRate = 0.032; 
                    Bloomerang.transactionFeeEft = 0; 
                    Bloomerang.transactionFeeRateEft = 0;
                    Bloomerang.transactionFeePayPal = 0.49; 
                    Bloomerang.transactionFeeRatePayPal = 0.032; 
                    
                    Bloomerang.useKey('pub_9765a066-0977-11eb-b759-0a00f05aac29');

        if (typeof isPreviewMode !== 'undefined' && isPreviewMode) {
          document.querySelector('#preview-text').style.display = 'block';
        }
        
        Bloomerang.Util.getRegistrationAmount = function() {
          return accounting.unformat(jQuery("#totalPrice").text());
        };
        // Register proper callbacks for various stages/outcomes of submission
        Bloomerang.Widget.Donation.OnSubmit = function (args) {
            jQuery(".btn-submit-registration").val("Processing Registration...").prop("disabled", true).addClass("disabled");
            var val = function (selector) { return jQuery(selector).val(); };
            var country = val(".registration-form #country");
            var state = Bloomerang.Util.getCorrectState(country, val(".registration-form #state"), val(".registration-form #province"));
            var zipCode = Bloomerang.Util.getCorrectZipCode(country, val(".registration-form #zip-code"), val(".registration-form #postal-code"));
            Bloomerang.Account
                      .individual()
                      .firstName(val(".registration-form #first-name"))
                      .middleName(val(".registration-form #middle-name"))
                      .lastName(val(".registration-form #last-name"))
                      .homeAddress(val(".registration-form #street-address"),
                                   val(".registration-form #city"),
                                   state,
                                   zipCode,
                                   country)
                      .homeEmail(val(".registration-form #email-address"))
                      .homePhone(val(".registration-form #phone-number"))
                      .applyEventRegistrationCustomFields();

            if (jQuery(".registration-form #consent-all").prop("checked")) {
              Bloomerang.Account.optedInStatus(jQuery(".registration-form #consent-email").prop("checked"),
                                               jQuery(".registration-form #consent-mail").prop("checked"),
                                               jQuery(".registration-form #consent-phone").prop("checked"));
            }

            var amount = Bloomerang.Util.getRegistrationAmount() + Bloomerang.Util.getRegistrationTrueImpactAmount();
            var nonDeductibleAmount = jQuery("#totalPrice").data("non-deductible") || 0;
            var ticketQuantity = jQuery("#totalTicketQty").text();
      
            Bloomerang.Donation
                      .amount(amount)
                      .fundId(val(".registration-form #fund"))
                      .nonDeductible(nonDeductibleAmount)
                      .note(val(".registration-form #comment"))
                      .applyEventRegistrationCustomFields()
                      .customPickField(jQuery("table.registration-summary").data("registration-type-field-id"), 
                                       jQuery(".registration-form .section.registrationType input[name='registration-type']:checked").data("registration-type-value"))
                      .customFreeformField(jQuery("table.registration-summary").data("ticket-quantity-field-id"), ticketQuantity);

            // Need to do a null-check here because they might have a cached version of Bloomerang-v2.js
            if (Bloomerang.Donation.trueImpactEnabled && Bloomerang.Donation.trueImpactUsed) {
              Bloomerang.Donation
                      .trueImpactEnabled(jQuery(".registration-form .true-impact .fee-amount").length > 0)
                      .trueImpactUsed(jQuery(".registration-form .true-impact input:checked").length > 0);
            }
            
            if (jQuery("#registration-form #Checking").is(":checked") ||
                jQuery("#registration-form #Savings").is(":checked")) {
              Bloomerang.Eft
                .accountNumber(val(".registration-form #accountNumber"))
                .routingNumber(val(".registration-form #routingNumber"))
                .type(jQuery("#registration-form .section.payment input[type='radio']:checked").attr("id"));
            }
        };
        Bloomerang.ValidateEventRegistrationFormCaptcha = function() {
            if (typeof(grecaptcha) !== "undefined" && jQuery("#captcha" + Bloomerang.Data.WidgetIds.Donation).children().length) {
                var captchaResponse = grecaptcha.getResponse(jQuery(".registration-form").data("captcha-id"));
                if (captchaResponse) {
                    jQuery(".registration-form .noCaptchaResponseError").hide();
                    Bloomerang.captchaResponse(captchaResponse);
                    return true;
                } else {
                    jQuery(".registration-form .noCaptchaResponseError").show();
                    return false;
                }
            } else return true;
        };
        Bloomerang.scrollToElement = function(element) {
            var distance = 100;
            var offset = element.offset().top;
            var offsetTop = offset > distance ? offset - distance : offset;
            jQuery('html, body').animate({ scrollTop : offsetTop}, 500);
        };
        Bloomerang.Api.OnSuccess = Bloomerang.Widget.Donation.OnSuccess = function (response) {
            jQuery("#registration-processing-container").hide();
            var formContainer = jQuery("#registration-form-container");
            formContainer.show();
            formContainer.html(successHtml750592);
            Bloomerang.scrollToElement(formContainer);
        };
        Bloomerang.Api.OnError = Bloomerang.Widget.Donation.OnError = function (response) {
            jQuery(".btn-submit-registration").prop("disabled", false).removeClass("disabled");
            Bloomerang.Util.updateRegisterButtonText();
            jQuery("#registration-form-container .errors").removeClass("hidden").html(response.Message);
            jQuery("#registration-processing-container").hide();
            jQuery("#registration-form-container").show();
            Bloomerang.scrollToElement(jQuery("#registration-form-container .errors"));
            Bloomerang.cancelFinancialSubmission(jQuery("#registration-form"));
            if (typeof(SpreedlyExpress) !== 'undefined') { 
              SpreedlyExpress.unload();
              Bloomerang.initSpreedly();
            }
            if (typeof(grecaptcha) !== "undefined" && jQuery("#captcha" + Bloomerang.Data.WidgetIds.Donation).children().length) {
              grecaptcha.reset(jQuery(".registration-form").data("captcha-id"));
            }
        };
        
        Bloomerang.Util.applyEventRegistrationCustomFields = function (obj, type) {
            // Clear any fields from a previous failed submission
            obj.clearCustomFields();
        
            // Apply all <input> (not multiselect), <select> and <textarea> fields
            jQuery(".registration-form .section.custom-fields :input:not(a > input, select)[id*=" + type + "]").each(function() {
                if (jQuery(this).val().hasValue()) {
                    obj.customFreeformField(jQuery(this).attr("id").toUntypedValue(), jQuery(this).val());
                }
            });
            
            // Apply all <select> fields
            jQuery(".registration-form .section.custom-fields select[id*=" + type + "]").each(function() {
                if (jQuery(this).val().hasValue()) {
                    obj.customPickField(jQuery(this).attr("id").toUntypedValue(), jQuery(this).val());
                }
            });
                
            // Apply all multiselect fields
            jQuery(".registration-form .section.custom-fields .checkboxes[id*=" + type + "]").each(function() {
                obj.customPickField(jQuery(this).attr("id").toUntypedValue(),
                jQuery.map(jQuery(this).children(".checkbox.selected"), function(v) { return jQuery(v).attr("data-id"); }));
            });
        };
        
        String.prototype.hasValue = function() {
            return (this && jQuery.trim(this)); //IE8 doesn't have a native trim function
        };
        
        Bloomerang.Account.applyEventRegistrationCustomFields = function () {
            Bloomerang.Util.applyEventRegistrationCustomFields(this, "Account");
            return this;
        };
        
        Bloomerang.Donation.applyEventRegistrationCustomFields = function () {
            Bloomerang.Util.applyEventRegistrationCustomFields(this, "Transaction");
            return this;
        };
        
        String.prototype.toUntypedValue = function() {
            return this.substring(this.indexOf('_') + 1);
        };
        
        Date.prototype.toDateInputValue = function() {
            var local = new Date(this);
            local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
            return (local.getMonth() + 1) + // Add one to the month because it starts at 0
                    "/" + local.getDate() + "/" + local.getFullYear();
        };
        
        jQuery(".registration-form .section.registrationType input[name='registration-type']").change(function () { 
          var element = jQuery(this);
          jQuery(".registration-form #shortDescription").text(element.data("short-name"));
          jQuery(".registration-form #ticketQty").text(element.data("ticket-quantity") || 0);
          jQuery(".registration-form #unitPrice").text(accounting.formatMoney(element.val()));
      
          jQuery(".registration-form .registration-summary").show();
          jQuery(".registration-form #numberOfRegistrations").focus();
    
          // if the user selected the "cannot attend" option, then the additional amount field is required.
          if (jQuery(this).attr('id') == "cannot-attend") { 
            jQuery(".additional-donation").hide();
            jQuery(".summary-row").hide();
            jQuery(".cannot-attend-donation").show();
            jQuery("#cannot-attend-amount").prop("disabled", false);
            jQuery(".registration-form #additional-amount").addClass("required");
          } else { 
            jQuery(".cannot-attend-donation").hide();
            jQuery("#cannot-attend-amount").prop("disabled", true);
            jQuery(".additional-donation").show();
            jQuery(".summary-row").show();
            jQuery(".registration-form #additional-amount").removeClass("required"); 
          }
          updateRegistrationAmounts();
        });
    
        updateRegistrationAmounts = function() {
          var totalCents = 0;
          var centsForSelectedRegistration = (Number(jQuery(".registrationType input[name='registration-type']:checked").val()) || 0) * 100; // stupid JS floating-point arithmetic!
          var nonDeductibleForSelectedRegistration = jQuery(".registrationType input[name='registration-type']:checked").data("non-deductible-amount") || 0;
          totalCents += (jQuery("#numberOfRegistrations").val() * centsForSelectedRegistration);
      
          totalCents += ((accounting.unformat(jQuery(".additional-donation input:visible, .cannot-attend-donation input:visible").val() || 0)) * 100);
          jQuery("#totalPrice").text(accounting.formatMoney(totalCents / 100));
          jQuery("#totalPrice").data("non-deductible", nonDeductibleForSelectedRegistration * jQuery("#numberOfRegistrations").val());
      
          jQuery("#totalTicketQty").text(jQuery("#numberOfRegistrations").val() * (jQuery(".registrationType input[name='registration-type']:checked").data("ticket-quantity") || 0));

          Bloomerang.Util.calculateRegistrationTrueImpact();
          Bloomerang.Util.updateRegisterButtonText();
        };

        if (jQuery(".registration-form .true-impact label").length) {
          jQuery(".registration-form .true-impact label")[0].innerHTML = jQuery(".registration-form .true-impact label")[0].innerHTML.replace("[amount]", "<span class='fee-amount'>$0</span>");
        }
        Bloomerang.Util.calculateRegistrationTrueImpact = function() {
          if (!jQuery(".registration-form .true-impact .fee-amount").length) { return; }
          // Note that we don't really care about JS floating point math. It's OK if the numbers are a couple cents off.
          var amount = Bloomerang.Util.getRegistrationAmount();
          if (amount === 0) {  // No transaction amount, no impact amount
            jQuery(".registration-form .true-impact .fee-amount").text(accounting.formatMoney(0));
            return 0;
          }

          var impactAmount;
          
          // If this is a OnePay form, use the transaction fee formula/data to calculate the impactAmount
          if (Bloomerang.Util.isProcessorOnePay()) {
            impactAmount = Bloomerang.Util.calculateTrueImpactForOnePay(amount);
          }
          
          if (!impactAmount || isNaN(impactAmount)) {
            var isEft = (jQuery("#registration-form #Checking").is(":checked") || jQuery("#registration-form #Savings").is(":checked"));
            var isStripeExpress = Bloomerang.Api.ProcessorType === "StripeExpress";
            var feeRate = isEft ? Bloomerang.transactionFeeRateEft : Bloomerang.transactionFeeRate;
            var newTotal = (amount + (isEft ? Bloomerang.transactionFeeEft : Bloomerang.transactionFee)) / (1 - feeRate);
            impactAmount = isStripeExpress
              ? Number((Math.floor((newTotal - amount)*100)/100).toFixed(2))
              : Number((newTotal - amount).toFixed(2));
          }

          jQuery(".registration-form .true-impact .fee-amount").text(accounting.formatMoney(impactAmount));
          return impactAmount;
        };
        Bloomerang.Util.getRegistrationTrueImpactAmount = function() {
          if (jQuery(".registration-form .true-impact input:checked").length) {
            return Bloomerang.Util.calculateRegistrationTrueImpact();
          }
          return 0;
        };
        
        Bloomerang.Util.updateRegisterButtonText = function() {
          if (jQuery("#registration-form #Checking").is(":checked") ||
              jQuery("#registration-form #Savings").is(":checked") ||
              Bloomerang.Util.isProcessorStripe() ||
              Bloomerang.Util.isProcessorOnePay()) {
            var amount = Bloomerang.Util.getRegistrationAmount();
            var impactAmount = Bloomerang.Util.getRegistrationTrueImpactAmount();
            if (Bloomerang.Util.isProcessorOnePay()) {
              Bloomerang.Util.sendOnePayTotalAmount(Math.round((amount + impactAmount)*100));
              Bloomerang.Util.sendOnePayAmount(Math.round(amount*100));
              Bloomerang.Util.sendOnePayFeeCoveredAmount(Math.round(impactAmount*100));
              Bloomerang.Util.sendOnePayIsFeeCovered(impactAmount>0);
            }
            jQuery(".btn-submit-registration").val("Register Now " + accounting.formatMoney(amount + impactAmount));
          } else {
            jQuery(".btn-submit-registration").val("Register Now");
          }
        };

        jQuery(".registration-form .registrationType input, .registration-form .registration-summary input")
          .change(updateRegistrationAmounts)
          .keyup(updateRegistrationAmounts);
            
        jQuery.validator.addMethod("phoneUS", function(phone_number, element) {
            var digits = phone_number.replace(/\D/g, "");
            return this.optional(element) || digits.length == 7 || digits.length == 10 || digits.length == 11;
        }, "Please specify a valid phone number or use '+' for international.");

        jQuery.validator.addMethod("phoneInternational", function (phone_number, element) {
            return this.optional(element) || /^\+[0-9\-\(\)\s.]+$/i.test(phone_number);
        }, "Please specify a valid phone number.");
        jQuery.validator.classRuleSettings.phoneInternational = { phoneInternational: true };
        
        jQuery.validator.addMethod("zipcodeUS", function (value, element) {
            return this.optional(element) || /\d{5}-\d{4}$|^\d{5}$/.test(value)
        }, "The specified US ZIP Code is invalid");

        jQuery.validator.addMethod("currency", function (value, element, options) {
            return !value ||
                value
                  .replace("$", "")
                  .replace(".", "")
                  .split(",").join("")
                  .match(/^\d+$/g);
        }, "Not a valid currency");

        jQuery.validator.classRuleSettings.currency = { currency: true };

        jQuery.validator.addMethod("number", function (value, element, options) {
            return !value ||
                value
                  .replace(".", "")
                  .split(",").join("")
                  .match(/^\d+$/g);
        }, "Not a valid number");

        jQuery.validator.classRuleSettings.number = { number: true };
        
        jQuery.validator.addMethod("validYear", function (value, element, options) {
            try {
                return (!value || value.match(/^[1-9]\d\d\d$/)) ? true : false;
            }
            catch (e) {
                return false;
            }
        }, function () { return "Must be a 4 digit year"; });

        jQuery.validator.classRuleSettings.validYear = { validYear: true };

        // Validate that the donation amount is at least $1
        jQuery.validator.methods.min = function( value, element, param ) {
          if (typeof (accounting) === "undefined") { // rip out $ and ,
              value = ((value + "") || "").replace(/[\$,]/g, "");
          }
          else { // Use accounting.parse, to handle $ and ,
              value = accounting.parse(value);
          }
          return this.optional( element ) || value >= param;
        };
        jQuery.validator.classRuleSettings.minimum1 = { min: 1 };
        jQuery.validator.messages.min = 'Please enter a value of at least {0}.'

        jQuery(".registration-form #country").change(function(event) {
          var element = jQuery(event.target || event.srcElement); // cross-browser event target selection
          var isInternational = (element.val() != "US" && element.val() != "CA" && element.val() != "BM");
          jQuery(".registration-form .field.city, .registration-form .field.state, .registration-form .field.province, .registration-form .field.zip-code, .registration-form .field.postal-code").toggle(!isInternational);
          jQuery(".registration-form #street-address").toggleClass("international", isInternational);
          jQuery(".registration-form #state, .registration-form #province").val(""); // clear the state when the country changes
          if (element.val() == "BM") {
            jQuery(".registration-form .field.city .label").text(jQuery(".registration-form .field.city input").data("bm-label"));
          } else if (element.val() == "US" || element.val() == "CA") {
            jQuery(".registration-form .field.city .label").text(jQuery(".registration-form .field.city input").data("us-label"));
          }
          if (element.val() == "US") {
            jQuery(".registration-form .field.state, .registration-form .field.zip-code").show();
            jQuery(".registration-form .field.province, .registration-form .field.postal-code").hide();
          } else if (element.val() == "CA") {
            jQuery(".registration-form .field.state, .registration-form .field.zip-code").hide();
            jQuery(".registration-form .field.province, .registration-form .field.postal-code").show();
          } else if (element.val() == "BM") {
            jQuery(".registration-form .field.state, .registration-form .field.province, .registration-form .field.zip-code").hide();
            jQuery(".registration-form .field.postal-code").show();
          } else {
            jQuery(".registration-form #city, .registration-form #zip-code, .registration-form #postal-code").val("");
          }
          jQuery(".registration-form .section.consent").toggleClass("hidden", !Bloomerang.Util.isCountryInEurope(element.val()));
        });
        
        jQuery(".registration-form #phone-number").change(function () {
          var phoneField = jQuery(".registration-form #phone-number");
          var internationalNumber = phoneField.val().substring(0,1) === '+';
          phoneField.toggleClass("phoneUS", !internationalNumber);
          phoneField.toggleClass("phoneInternational", internationalNumber);
        })

        collectPayment = function () {
          var form = jQuery("#registration-form");

          if (!Bloomerang.ValidateEventRegistrationFormCaptcha()) {
            return false;
          }

          if (!form.valid()) {
            return false;
          }

          var isEft = jQuery("#registration-form #CreditCard").length > 0 && !jQuery("#registration-form #CreditCard").prop("checked");

          if (Bloomerang.Util.isProcessorStripe() && !isEft && !Bloomerang.Util.StripeCardIsValid) {
            document.getElementById('card-errors').textContent = "Valid card info is required";
            return false;
          }

          if (isEft) {
            submitDonation();
          }
          else {
            var val = function (selector) { return jQuery(selector).val(); };
            
            var amount = Bloomerang.Util.getRegistrationAmount() + Bloomerang.Util.getRegistrationTrueImpactAmount();
            
            var selectedRegistrationType = jQuery(".registration-form .section.registrationType input[name='registration-type']:checked").data("short-name");
                        
            var oldMeta = '';
            if (jQuery('meta[name="viewport"]').length) {
              oldMeta = jQuery('meta[name="viewport"]').attr('content');
            } else {
              jQuery('head').append('<meta name="viewport" content="" />');
            }
            jQuery('meta[name="viewport"]').attr('content', 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1');
            jQuery('meta[name="viewport"]').attr('content', oldMeta);

            if (Bloomerang.Util.isProcessorStripe() || Bloomerang.Util.isProcessorOnePay()) {
              submitDonation();
            } else {
              SpreedlyExpress.setDisplayOptions({
                "amount": accounting.formatMoney(amount),
                "full_name": val(".registration-form #first-name") + " " + val(".registration-form #last-name"),
                "sidebar_bottom_description": selectedRegistrationType,
                "submit_label": "Register Now"});
              SpreedlyExpress.setPaymentMethodParams({
                "email": val(".registration-form #email-address"),
                "phone_number": val(".registration-form #phone-number"),
                "address1": val(".registration-form #street-address"),
                "city": val(".registration-form #city"),
                "state": val(".registration-form #state") || val(".registration-form #province"),
                "zip": val(".registration-form #zip-code") || val(".registration-form #postal-code"),
                "country": val(".registration-form #country")});
              
              SpreedlyExpress.onPaymentMethod(function(token, paymentMethod) {
                Bloomerang.CreditCard.spreedlyToken(token);
                submitDonation();
              });
              
              SpreedlyExpress.openView();
            }
          }
        };
        
        submitDonation = function() {
          if (!Bloomerang.continueFinancialSubmission(jQuery("registration-form"))) { return false; }
          
              Bloomerang.Api.OnSubmit = Bloomerang.Widget.Donation.OnSubmit;
              Bloomerang.Api.OnSuccess = Bloomerang.Widget.Donation.OnSuccess;
              Bloomerang.Api.OnError = Bloomerang.Widget.Donation.OnError;

              var processingMessage = jQuery("#registration-processing-container");
              processingMessage.show();
              jQuery("#registration-form-container").hide();
              Bloomerang.scrollToElement(processingMessage);
            
              Bloomerang.Api.donate();
          };
        
          jQuery("#registration-form #CreditCard").prop("checked", true);
          jQuery("#registration-form .section.payment input[type='radio']").click(function() {
            Bloomerang.Util.calculateRegistrationTrueImpact();
            Bloomerang.Util.updateRegisterButtonText();
            if (jQuery(this).attr("id") == "DebitCard" || jQuery(this).attr("id") == "CreditCard") {
              jQuery("#registration-form .accountNumber, \
                      #registration-form .routingNumber, \
                      #registration-form .sample-check").hide();
              jQuery("#stripe-cc-fields").show();
            }
            else {
              jQuery("#registration-form .accountNumber, \
                      #registration-form .routingNumber, \
                      #registration-form .sample-check").show();
              jQuery("#stripe-cc-fields").hide();
              if (jQuery("#registration-form .sample-check").length == 0) {
                var checkImage = new Image();
                checkImage.src = 'https://s3-us-west-2.amazonaws.com/bloomerang-public-cdn/public-gallery/SampleCheck.png';
                jQuery(checkImage).addClass("sample-check");
                jQuery("#registration-form .accountNumber").after(checkImage);
              }
            }
        });
          
        jQuery("#registration-form #true-impact").change(function() {
          Bloomerang.Util.updateRegisterButtonText();
        });

        // Show opt-in options based on the setting of the global opt-in
        jQuery(".registration-form .field.consent-all").change(function() { 
          jQuery(".registration-form .field.consent-all").siblings().each(function(i, e) { 
              jQuery(e).toggle();
          });
        });
      
})(jQuery);
    };
    
                var startBloomerangLoad = function() {
                    if (window.bloomerangLoadStarted == undefined) {
                        window.bloomerangLoadStarted = true;
                        var script = document.createElement('script');
                        script.type = 'text/javascript';
                        script.src = 'https://crm.bloomerang.co/Content/Scripts/Api/Bloomerang-v2.js?nocache=1770149809';
                        document.getElementsByTagName('head')[0].appendChild(script);
                        waitForBloomerangLoad(function() { Bloomerang.Util.requireJQueryValidationAndStripe(function() { insertForm750592(); })});
                    }
                    else {
                        waitForBloomerangLoad(function() { Bloomerang.Util.requireJQueryValidationAndStripe(function() { insertForm750592(); })});
                    }
                };

                var waitForBloomerangLoad = function(callback) {
                    if (typeof(Bloomerang) === 'undefined' || !Bloomerang._isReady) {
                        setTimeout(function () { waitForBloomerangLoad(callback) }, 500);
                    }
                    else {
                        if (true) {
                            callback();
                        } else {
                            window.bloomerangLoadStarted = undefined;
                            Bloomerang = undefined; // The version of Blomerang.js is not what we want. So blow it away and reload.
                            startBloomerangLoad();
                        }
                    }
                };

                startBloomerangLoad();

// === CASINO ROYALE FROSTED GLASS THEME ===
(function() {
  function applyTheme() {
    // Remove any previous injection
    var old = document.getElementById('casino-royale-theme');
    if (old) old.remove();

    var css = document.createElement('style');
    css.id = 'casino-royale-theme';
    css.textContent = [

      // ========== TRANSPARENT BACKGROUNDS ==========
      '#registration-form-container,',
      '#registration-form-container *,',
      '.registration-form,',
      '.registration-form * {',
      '  background-color: transparent !important;',
      '  background-image: none !important;',
      '  background: transparent !important;',
      '}',

      // Also nuke the Webflow wrapper backgrounds
      '.donation-form.w-embed,',
      '.donation-form.w-embed *,',
      '.div-block-29,',
      '.div-block-29 *,',
      '.div-block-19,',
      '.div-block-20 {',
      '  background: transparent !important;',
      '  background-color: transparent !important;',
      '}',

      // ========== CONTAINER ==========
      '#registration-form-container {',
      '  font-family: "Inter", sans-serif !important;',
      '  max-width: 100% !important;',
      '  padding: 10px 0 !important;',
      '}',

      // ========== SECTION HEADERS ==========
      '.registration-form h3 {',
      '  color: #ffffff !important;',
      '  font-family: "Inter", sans-serif !important;',
      '  font-size: 1.25rem !important;',
      '  font-weight: 600 !important;',
      '  margin-bottom: 16px !important;',
      '}',

      // ========== SECTIONS & FIELDS ==========
      '.registration-form section,',
      '.registration-form .section {',
      '  padding: 8px 0 !important;',
      '}',
      '.registration-form .field {',
      '  padding: 6px 0 !important;',
      '}',

      // ========== LABELS ==========
      '.registration-form label,',
      '.registration-form label span,',
      '.registration-form label .label,',
      '.registration-form .field label {',
      '  color: rgba(255,255,255,0.9) !important;',
      '  font-family: "Inter", sans-serif !important;',
      '  font-size: 0.85rem !important;',
      '  font-weight: 400 !important;',
      '  margin-bottom: 4px !important;',
      '  display: block !important;',
      '}',

      '.registration-form .field .required-star {',
      '  color: rgba(255,180,220,0.9) !important;',
      '  display: inline-block !important;',
      '  margin-left: 5px !important;',
      '}',

      // Error labels
      '.registration-form label.error,',
      '.registration-form #card-errors {',
      '  color: #ff6b8a !important;',
      '  font-size: 0.8rem !important;',
      '  padding: 4px 16px !important;',
      '}',

      // ========== ALL INPUTS - FROSTED GLASS ==========
      '.registration-form .field input[type="text"],',
      '.registration-form .field input[type="email"],',
      '.registration-form .field input[type="tel"],',
      '.registration-form .field input[type="number"],',
      '.registration-form .field input[type="date"],',
      '.registration-form .field select,',
      '.registration-form .field textarea,',
      '.registration-form #card-element {',
      '  background: rgba(255,255,255,0.12) !important;',
      '  border: 1.5px solid rgba(255,255,255,0.3) !important;',
      '  border-radius: 30px !important;',
      '  color: #ffffff !important;',
      '  font-family: "Inter", sans-serif !important;',
      '  font-size: 0.95rem !important;',
      '  padding: 14px 20px !important;',
      '  max-width: 100% !important;',
      '  width: 100% !important;',
      '  box-sizing: border-box !important;',
      '  outline: none !important;',
      '  transition: all 0.3s ease !important;',
      '  -webkit-appearance: none !important;',
      '  appearance: none !important;',
      '  height: auto !important;',
      '  line-height: 1.4 !important;',
      '}',

      // Textarea
      '.registration-form .field textarea {',
      '  border-radius: 20px !important;',
      '  min-height: 100px !important;',
      '  resize: vertical !important;',
      '}',

      // Focus
      '.registration-form .field input:focus,',
      '.registration-form .field select:focus,',
      '.registration-form .field textarea:focus {',
      '  background: rgba(255,255,255,0.2) !important;',
      '  border-color: rgba(255,255,255,0.5) !important;',
      '  box-shadow: 0 0 20px rgba(216,82,168,0.15) !important;',
      '}',

      // Placeholder
      '.registration-form .field input::placeholder,',
      '.registration-form .field textarea::placeholder {',
      '  color: rgba(255,255,255,0.5) !important;',
      '}',

      // Select dropdown
      '.registration-form .field select {',
      '  background: rgba(255,255,255,0.12) url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'16\' height=\'16\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'white\' stroke-width=\'2.5\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpolyline points=\'6 9 12 15 18 9\'%3E%3C/polyline%3E%3C/svg%3E") no-repeat right 16px center / 16px 16px !important;',
      '  padding-right: 44px !important;',
      '  cursor: pointer !important;',
      '}',

      '.registration-form .field select option {',
      '  background: #3a2060 !important;',
      '  color: #ffffff !important;',
      '}',

      // ========== RADIO BUTTONS (TICKET TYPES) ==========
      '.registration-form .field.radio label {',
      '  display: flex !important;',
      '  align-items: center !important;',
      '  background: rgba(255,255,255,0.1) !important;',
      '  border: 1.5px solid rgba(255,255,255,0.25) !important;',
      '  border-radius: 30px !important;',
      '  padding: 14px 20px !important;',
      '  margin-bottom: 8px !important;',
      '  cursor: pointer !important;',
      '  transition: all 0.3s ease !important;',
      '  color: rgba(255,255,255,0.9) !important;',
      '}',

      '.registration-form .field.radio label:hover {',
      '  background: rgba(255,255,255,0.18) !important;',
      '  border-color: rgba(255,255,255,0.4) !important;',
      '}',

      '.registration-form .field.radio input {',
      '  width: auto !important;',
      '  margin-right: 12px !important;',
      '  margin-left: 0 !important;',
      '  accent-color: #d852a8 !important;',
      '  padding: 0 !important;',
      '  border-radius: 50% !important;',
      '}',

      '.registration-form .field.radio label .label,',
      '.registration-form .field.radio label span.label {',
      '  color: rgba(255,255,255,0.95) !important;',
      '  font-size: 0.95rem !important;',
      '  display: inline !important;',
      '}',

      // ========== CHECKBOXES (MULTI-SELECT) ==========
      '.registration-form .field .checkboxes {',
      '  max-width: 100% !important;',
      '  border: 1.5px solid rgba(255,255,255,0.25) !important;',
      '  border-radius: 16px !important;',
      '  overflow: hidden !important;',
      '}',

      '.registration-form .field .checkbox {',
      '  display: flex !important;',
      '  align-items: center !important;',
      '  position: relative !important;',
      '  box-sizing: border-box !important;',
      '  height: auto !important;',
      '  line-height: 1.4 !important;',
      '  padding: 12px 16px 12px 44px !important;',
      '  border-bottom: 1px solid rgba(255,255,255,0.1) !important;',
      '  color: rgba(255,255,255,0.9) !important;',
      '  overflow: visible !important;',
      '  text-decoration: none !important;',
      '  cursor: pointer !important;',
      '  transition: background 0.2s ease !important;',
      '}',

      '.registration-form .field .checkbox:last-child {',
      '  border-bottom: none !important;',
      '}',



      '.registration-form .field .checkbox:hover {',
      '  background: rgba(255,255,255,0.06) !important;',
      '}',

      // Custom checkbox indicator via ::before
      '.registration-form .field .checkbox::before {',
      '  content: "" !important;',
      '  position: absolute !important;',
      '  left: 14px !important;',
      '  top: 50% !important;',
      '  transform: translateY(-50%) !important;',
      '  width: 18px !important;',
      '  height: 18px !important;',
      '  border: 2px solid rgba(255,255,255,0.4) !important;',
      '  border-radius: 4px !important;',
      '  background: rgba(255,255,255,0.08) !important;',
      '  transition: all 0.2s ease !important;',
      '  flex-shrink: 0 !important;',
      '}',

      // Selected state
      '.registration-form .field .checkbox.selected {',
      '  background: linear-gradient(135deg, rgba(216,82,168,0.3), rgba(6,59,167,0.3)) !important;',
      '  color: #fff !important;',
      '}',

      '.registration-form .field .checkbox.selected::before {',
      '  content: "\\2713" !important;',
      '  background: linear-gradient(135deg, #d852a8, #063ba7) !important;',
      '  border: none !important;',
      '  color: #ffffff !important;',
      '  font-size: 12px !important;',
      '  display: flex !important;',
      '  align-items: center !important;',
      '  justify-content: center !important;',
      '  line-height: 1 !important;',
      '}',

      // Keep the real checkbox hidden
      '.registration-form .field .checkbox input {',
      '  opacity: 0.01 !important;',
      '  position: absolute !important;',
      '  left: -50px !important;',
      '  z-index: -5 !important;',
      '}',

      '.registration-form .field .checkbox span.text {',
      '  color: rgba(255,255,255,0.9) !important;',
      '}',
      '.registration-form .field .checkbox.selected span.text {',
      '  color: #ffffff !important;',
      '}',

      // ========== CONSENT CHECKBOXES ==========
      '.registration-form .field.checkbox label {',
      '  color: rgba(255,255,255,0.9) !important;',
      '  display: inline-block !important;',
      '}',
      '.registration-form .field.checkbox input {',
      '  width: auto !important;',
      '  margin-left: 0 !important;',
      '}',
      '.registration-form .section.consent .field.checkbox:not(.consent-all) {',
      '  margin-left: 20px !important;',
      '}',

      // ========== STRIPE ==========
      '.registration-form .field .StripeElement {',
      '  background: rgba(255,255,255,0.12) !important;',
      '  border: 1.5px solid rgba(255,255,255,0.3) !important;',
      '  border-radius: 30px !important;',
      '  padding: 14px 20px !important;',
      '  max-width: 100% !important;',
      '  width: 100% !important;',
      '  box-sizing: border-box !important;',
      '  display: block !important;',
      '}',

      // ========== SUMMARY TABLE ==========
      '.registration-form .registration-summary {',
      '  border-collapse: separate !important;',
      '  border-spacing: 0 !important;',
      '  text-align: left !important;',
      '  width: 100% !important;',
      '  border-radius: 16px !important;',
      '  overflow: hidden !important;',
      '}',

      '.registration-form .registration-summary td,',
      '.registration-form .registration-summary th {',
      '  padding: 12px !important;',
      '  color: #ffffff !important;',
      '}',

      '.registration-form .registration-summary th {',
      '  color: rgba(255,255,255,0.7) !important;',
      '  font-weight: 500 !important;',
      '  font-size: 0.8rem !important;',
      '  text-transform: uppercase !important;',
      '  letter-spacing: 0.05em !important;',
      '  border-bottom: 1px solid rgba(255,255,255,0.15) !important;',
      '}',

      '.registration-form .registration-summary .summary-total {',
      '  font-weight: bold !important;',
      '  border-top: 1.5px solid rgba(255,255,255,0.3) !important;',
      '}',

      '.registration-form .registration-summary span {',
      '  color: #ffffff !important;',
      '}',

      '.registration-form .registration-summary #numberOfRegistrations {',
      '  background: rgba(255,255,255,0.12) !important;',
      '  border: 1px solid rgba(255,255,255,0.3) !important;',
      '  border-radius: 10px !important;',
      '  color: #ffffff !important;',
      '  padding: 6px 8px !important;',
      '  width: 50px !important;',
      '  text-align: center !important;',
      '}',

      '.registration-form .registration-summary input.amount-field {',
      '  background: rgba(255,255,255,0.12) !important;',
      '  border: 1px solid rgba(255,255,255,0.3) !important;',
      '  border-radius: 10px !important;',
      '  color: #ffffff !important;',
      '  padding: 6px 8px !important;',
      '  width: 80px !important;',
      '}',

      // ========== SUBMIT BUTTON ==========
      '.btn-group {',
      '  margin-top: 20px !important;',
      '  text-align: center !important;',
      '}',

      '.btn-submit-registration,',
      'input.btn-submit-registration {',
      '  background: linear-gradient(45deg, #d852a8 0%, #063ba7 100%) !important;',
      '  color: #ffffff !important;',
      '  font-family: "Inter", sans-serif !important;',
      '  font-size: 1.05rem !important;',
      '  font-weight: 700 !important;',
      '  letter-spacing: 0.04em !important;',
      '  border: none !important;',
      '  border-radius: 30px !important;',
      '  padding: 18px 40px !important;',
      '  width: 100% !important;',
      '  max-width: 100% !important;',
      '  cursor: pointer !important;',
      '  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1) !important;',
      '  box-shadow: 0 5px 15px rgba(0,0,0,0.2) !important;',
      '  height: auto !important;',
      '  line-height: 1.4 !important;',
      '  position: relative !important;',
      '  overflow: hidden !important;',
      '}',

      '.btn-submit-registration:hover {',
      '  background: linear-gradient(225deg, #d852a8 0%, #063ba7 100%) !important;',
      '  box-shadow: 0 15px 30px rgba(216,82,168,0.4) !important;',
      '}',

      '.btn-submit-registration.disabled,',
      '.btn-submit-registration:disabled {',
      '  opacity: 0.6 !important;',
      '  cursor: not-allowed !important;',
      '}',

      // ========== ERRORS ==========
      '.registration-form .errors {',
      '  border: 1.5px solid rgba(255,100,130,0.5) !important;',
      '  color: #ff6b8a !important;',
      '  padding: 14px 20px !important;',
      '  border-radius: 16px !important;',
      '}',

      '.registration-form .hidden { display: none !important; }',

      // ========== SIDENOTES ==========
      '.registration-form .field .sidenote {',
      '  color: rgba(255,255,255,0.5) !important;',
      '  font-size: 0.75rem !important;',
      '}',

      // ========== PROCESSING & SUCCESS ==========
      '#registration-processing-container,',
      '#registration-processing-container * {',
      '  color: #ffffff !important;',
      '}',
      '.donation-success,',
      '.donation-success * {',
      '  color: #ffffff !important;',
      '}',

      // ========== CAPTCHA ==========
      '.registration-form .section.captcha {',
      '  display: flex !important;',
      '  justify-content: center !important;',
      '  padding: 12px 0 !important;',
      '}',

      // ========== CATCH-ALL TEXT WHITE ==========
      '#registration-form-container span,',
      '#registration-form-container p,',
      '#registration-form-container div,',
      '#registration-form-container td,',
      '#registration-form-container th,',
      '#registration-form-container h3,',
      '#registration-form-container h4 {',
      '  color: #ffffff !important;',
      '}',

      // ========== SELECT CHEVRON RE-APPLY (after transparent nuke) ==========
      'form.registration-form .field select,',
      '#registration-form .field select,',
      'form#registration-form .field select {',
      '  background: rgba(255,255,255,0.12) url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'24\' height=\'24\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'white\' stroke-width=\'2.5\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpolyline points=\'6 9 12 15 18 9\'%3E%3C/polyline%3E%3C/svg%3E") no-repeat right 16px center / 16px 16px !important;',
      '  -webkit-appearance: none !important;',
      '  -moz-appearance: none !important;',
      '  appearance: none !important;',
      '  padding-right: 44px !important;',
      '}',

      // ========== MOBILE ==========
      '@media (max-width: 768px) {',
      '  .registration-form .field input,',
      '  .registration-form .field select,',
      '  .registration-form .field textarea {',
      '    padding: 12px 16px !important;',
      '    font-size: 16px !important;',
      '  }',
      '  .registration-form .field.radio label {',
      '    padding: 12px 16px !important;',
      '  }',
      '  .btn-submit-registration {',
      '    padding: 14px 30px !important;',
      '  }',
      '}',

    ].join('\n');

    document.head.appendChild(css);
  }

  // Apply immediately when form container appears
  var observer = new MutationObserver(function(mutations) {
    if (document.getElementById('registration-form-container')) {
      applyTheme();
      observer.disconnect();
    }
  });
  observer.observe(document.body || document.documentElement, { childList: true, subtree: true });

  // Also apply on intervals to catch late-loading elements
  setTimeout(applyTheme, 1000);
  setTimeout(applyTheme, 2000);
  setTimeout(applyTheme, 3500);
  setTimeout(applyTheme, 5000);

  // Apply immediately if form already exists
  if (document.getElementById('registration-form-container')) {
    applyTheme();
  }
})();
