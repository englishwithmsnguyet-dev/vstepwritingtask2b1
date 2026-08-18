import re

with open('/Users/nguyetpham/Desktop/WEBSITE/writing-essays-b1level/app.js', 'r') as f:
    content = f.read()

old_block = """        sampleWriting: `
            <div class="content-block">
                <h3>ĐỀ BÀI (TASK 02)</h3>
                <div class="prompt-box">
                    <p>Obesity is a serious global problem in today's society, especially among young people...<br><br><strong>Write an essay to discuss the causes of obesity among young people and suggest possible solutions.</strong></p>
                </div>
                <h3 style="margin-top: 25px;">BÀI VIẾT MẪU (SAMPLE ESSAY - B1 LEVEL)</h3>
                <div class="sample-letter-box">
                    In recent years, <strong>obesity among young people</strong> has become a growing concern in many parts of the world. This issue affects both individuals and society in different ways. <strong>This essay will discuss the main causes of this problem and suggest possible solutions.</strong><br><br>
                    <strong>This issue can be caused by several factors.</strong> One major cause is that <strong>many young people have unhealthy eating habits</strong>. <em>This is because they often eat fast food and drink sugary beverages, so they consume too much fat and sugar every day.</em> Another contributing factor is that <strong>many young individuals do not exercise regularly</strong>. <em>As a result, they do not burn enough calories and may gain weight easily.</em> A further reason is that <strong>many teenagers lack nutritional knowledge</strong>. <em>Consequently, they may choose unhealthy food and develop poor eating habits.</em><br><br>
                    <strong>To solve this problem, several measures can be taken.</strong> One effective solution is to <strong>encourage young people to follow a healthier diet</strong>. <em>The main reason is that eating more vegetables and reducing junk food can help them control their weight and improve their health.</em> Another possible measure is to <strong>promote regular physical exercise at schools</strong>. <em>For example, schools can organize sports activities or encourage students to join exercise clubs after class.</em> Finally, it is important to <strong>educate young people about healthy eating habits</strong>. <em>Therefore, they can make healthier choices in their daily lives.</em><br><br>
                    In conclusion, <strong>obesity among young people</strong> is caused by several factors and requires practical solutions. By addressing the causes and applying suitable measures, this problem can be reduced in the future. These actions can help create positive changes for both individuals and society.
                </div>
            </div>
        `"""

new_block = """        sampleWriting: `
            <div class="content-block">
                <h3>ĐỀ BÀI (TASK 02)</h3>
                <div class="prompt-box">
                    <p>Obesity is a serious global problem in today's society, especially among young people...<br><br><strong>Write an essay to discuss the causes, effects and suggest possible solutions for obesity among young people.</strong></p>
                </div>
                <h3 style="margin-top: 25px;">BÀI VIẾT MẪU (SAMPLE ESSAY - B1 LEVEL)</h3>
                
                <h4 style="color: var(--primary-color); margin-top: 15px;">BÀI MẪU 1: DÀN Ý 01 (NGUYÊN NHÂN & GIẢI PHÁP)</h4>
                <div class="sample-letter-box">
                    In recent years, <strong>obesity among young people</strong> has become a growing concern in many parts of the world. This issue affects both individuals and society in different ways. <strong>This essay will discuss the main causes of this problem and suggest possible solutions.</strong><br><br>
                    <strong>This issue can be caused by several factors.</strong> One major cause is that <strong>many young people have unhealthy eating habits</strong>. <em>This is because they often eat fast food and drink sugary beverages, so they consume too much fat and sugar every day.</em> Another contributing factor is that <strong>many young individuals do not exercise regularly</strong>. <em>As a result, they do not burn enough calories and may gain weight easily.</em> A further reason is that <strong>many teenagers lack nutritional knowledge</strong>. <em>Consequently, they may choose unhealthy food and develop poor eating habits.</em><br><br>
                    <strong>To solve this problem, several measures can be taken.</strong> One effective solution is to <strong>encourage young people to follow a healthier diet</strong>. <em>The main reason is that eating more vegetables and reducing junk food can help them control their weight and improve their health.</em> Another possible measure is to <strong>promote regular physical exercise at schools</strong>. <em>For example, schools can organize sports activities or encourage students to join exercise clubs after class.</em> Finally, it is important to <strong>educate young people about healthy eating habits</strong>. <em>Therefore, they can make healthier choices in their daily lives.</em><br><br>
                    In conclusion, <strong>obesity among young people</strong> is caused by several factors and requires practical solutions. By addressing the causes and applying suitable measures, this problem can be reduced in the future. These actions can help create positive changes for both individuals and society.
                </div>

                <h4 style="color: var(--primary-color); margin-top: 25px;">BÀI MẪU 2: DÀN Ý 02 (NGUYÊN NHÂN & ẢNH HƯỞNG)</h4>
                <div class="sample-letter-box">
                    In recent years, <strong>obesity among young people</strong> has become a growing concern in many parts of the world. This issue affects both individuals and society in different ways. <strong>This essay will discuss the main causes of this problem and its possible effects.</strong><br><br>
                    <strong>This issue can be caused by several factors.</strong> One major cause is that <strong>many young people have unhealthy eating habits</strong>. <em>This is because they often eat fast food and drink sugary beverages, so they consume too much fat and sugar every day.</em> Another contributing factor is that <strong>many young individuals do not exercise regularly</strong>. <em>As a result, they do not burn enough calories and may gain weight easily.</em> A further reason is that <strong>many teenagers lack nutritional knowledge</strong>. <em>Consequently, they may choose unhealthy food and develop poor eating habits.</em><br><br>
                    <strong>This problem can lead to several negative effects.</strong> One serious impact is that <strong>it causes physical health problems</strong>. <em>For instance, overweight young people have a higher risk of heart disease and diabetes.</em> Another consequence is that <strong>it affects mental health negatively</strong>. <em>This is because obese teenagers often feel unconfident about their appearance and may suffer from depression.</em> A further problem is that <strong>it creates a burden on the healthcare system</strong>. <em>This means hospitals need to spend more resources treating obesity-related diseases.</em><br><br>
                    In conclusion, <strong>obesity among young people</strong> is caused by several factors and can lead to many negative effects. By understanding the causes and paying more attention to this issue, the situation can be improved in the future. These actions can help create a better environment for both individuals and society.
                </div>

                <h4 style="color: var(--primary-color); margin-top: 25px;">BÀI MẪU 3: DÀN Ý 03 (ẢNH HƯỞNG & GIẢI PHÁP)</h4>
                <div class="sample-letter-box">
                    In recent years, <strong>obesity among young people</strong> has become a growing concern in many parts of the world. This issue affects both individuals and society in different ways. <strong>This essay will discuss the main effects of this problem and suggest possible solutions.</strong><br><br>
                    <strong>This problem can lead to several negative effects.</strong> One serious impact is that <strong>it causes physical health problems</strong>. <em>For instance, overweight young people have a higher risk of heart disease and diabetes.</em> Another consequence is that <strong>it affects mental health negatively</strong>. <em>This is because obese teenagers often feel unconfident about their appearance and may suffer from depression.</em> A further problem is that <strong>it creates a burden on the healthcare system</strong>. <em>This means hospitals need to spend more resources treating obesity-related diseases.</em><br><br>
                    <strong>To solve this problem, several measures can be taken.</strong> One effective solution is to <strong>encourage young people to follow a healthier diet</strong>. <em>The main reason is that eating more vegetables and reducing junk food can help them control their weight and improve their health.</em> Another possible measure is to <strong>promote regular physical exercise at schools</strong>. <em>For example, schools can organize sports activities or encourage students to join exercise clubs after class.</em> Finally, it is important to <strong>educate young people about healthy eating habits</strong>. <em>Therefore, they can make healthier choices in their daily lives.</em><br><br>
                    In conclusion, <strong>obesity among young people</strong> causes several negative effects and requires practical solutions. By taking suitable measures, this problem can be reduced in the future. These solutions can bring positive changes for both individuals and society.
                </div>

                <h4 style="color: var(--primary-color); margin-top: 25px;">BÀI MẪU 4: DÀN Ý 04 (CHỈ NGUYÊN NHÂN)</h4>
                <div class="sample-letter-box">
                    In recent years, <strong>obesity among young people</strong> has become a growing concern in many parts of the world. Understanding these causes is important to improve the situation in the future. <strong>This essay will discuss the main causes of this problem.</strong><br><br>
                    <strong>This issue can be caused by several factors.</strong> One major cause is that <strong>many young people have unhealthy eating habits</strong>. <em>This is because they often eat fast food and drink sugary beverages, so they consume too much fat and sugar every day.</em> Another contributing factor is that <strong>many young individuals do not exercise regularly</strong>. <em>As a result, they do not burn enough calories and may gain weight easily.</em> A further reason is that <strong>many teenagers lack nutritional knowledge</strong>. <em>Consequently, they may choose unhealthy food and develop poor eating habits.</em><br><br>
                    In conclusion, <strong>obesity among young people</strong> is caused by several factors. By addressing these causes, this problem can be reduced in the future. Therefore, it is important to take suitable actions.
                </div>

                <h4 style="color: var(--primary-color); margin-top: 25px;">BÀI MẪU 5: DÀN Ý 05 (CHỈ ẢNH HƯỞNG)</h4>
                <div class="sample-letter-box">
                    In recent years, <strong>obesity among young people</strong> has become a growing concern in many parts of the world. These impacts can affect many areas of life in different ways. <strong>This essay will discuss the main effects of this problem.</strong><br><br>
                    <strong>This problem can lead to several negative effects.</strong> One serious impact is that <strong>it causes physical health problems</strong>. <em>For instance, overweight young people have a higher risk of heart disease and diabetes.</em> Another consequence is that <strong>it affects mental health negatively</strong>. <em>This is because obese teenagers often feel unconfident about their appearance and may suffer from depression.</em> A further consequence is that <strong>it creates a burden on the healthcare system</strong>. <em>This means hospitals need to spend more resources treating obesity-related diseases.</em><br><br>
                    In conclusion, <strong>obesity among young people</strong> can lead to many negative effects. These impacts show that it is a serious issue in modern society. Therefore, it is important to pay more attention to this problem.
                </div>

                <h4 style="color: var(--primary-color); margin-top: 25px;">BÀI MẪU 6: DÀN Ý 06 (CHỈ GIẢI PHÁP)</h4>
                <div class="sample-letter-box">
                    In recent years, <strong>obesity among young people</strong> has become increasingly important in modern society. Many people believe that more effective actions are needed in this area. <strong>This essay will suggest some possible solutions to this problem.</strong><br><br>
                    <strong>To solve this problem, several measures can be taken.</strong> One effective solution is to <strong>encourage young people to follow a healthier diet</strong>. <em>The main reason is that eating more vegetables and reducing junk food can help them control their weight and improve their health.</em> Another possible measure is to <strong>promote regular physical exercise at schools</strong>. <em>For example, schools can organize sports activities or encourage students to join exercise clubs after class.</em> A further approach is to <strong>educate young people about healthy eating habits</strong>. <em>Therefore, they can make healthier choices in their daily lives.</em><br><br>
                    In conclusion, <strong>obesity among young people</strong> requires practical solutions. By taking suitable measures, this problem can be reduced in the future. These solutions can bring positive changes for both individuals and society.
                </div>
            </div>
        `"""

content = content.replace(old_block, new_block)

with open('/Users/nguyetpham/Desktop/WEBSITE/writing-essays-b1level/app.js', 'w') as f:
    f.write(content)

