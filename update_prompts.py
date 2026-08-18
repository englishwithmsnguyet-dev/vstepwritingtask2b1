import re

with open('/Users/nguyetpham/Desktop/WEBSITE/writing-essays-b1level/app.js', 'r') as f:
    content = f.read()

# 1. Update TYPE 01 (adv-disadv)
old_adv_disadv = """            <div class="content-block">
                <h3>ĐỀ BÀI (TASK 02)</h3>
                <div class="prompt-box">
                    <p>Online learning is a great, revolutionary alternative to traditional training. Online learning is a form of distance learning that takes place over the Internet, including online courses, exams, gamified quizzes, and certification training. Some people believe that e-learning will replace traditional classes in the future.<br><br><strong>Write an essay to discuss the advantages and disadvantages of online learning.</strong></p>
                </div>
                <h3 style="margin-top: 25px;">BÀI VIẾT MẪU (SAMPLE ESSAY - B1 LEVEL)</h3>
                
                <h4 style="color: var(--primary-color); margin-top: 15px;">BÀI MẪU 1: ÁP DỤNG DÀN Ý 01 (THUẬN LỢI & BẤT LỢI)</h4>"""

new_adv_disadv = """            <div class="content-block">
                <h3>BÀI VIẾT MẪU (SAMPLE ESSAY - B1 LEVEL)</h3>
                
                <h4 style="color: var(--primary-color); margin-top: 15px;">BÀI MẪU 1: ÁP DỤNG DÀN Ý 01 (THUẬN LỢI & BẤT LỢI)</h4>
                <div class="prompt-box" style="margin-bottom: 15px;">
                    <p><strong>ĐỀ BÀI:</strong> Online learning is a great, revolutionary alternative to traditional training. Online learning is a form of distance learning that takes place over the Internet, including online courses, exams, gamified quizzes, and certification training. Some people believe that e-learning will replace traditional classes in the future.<br><br><strong>Write an essay to discuss the advantages and disadvantages of online learning.</strong></p>
                </div>"""
content = content.replace(old_adv_disadv, new_adv_disadv)

old_adv_disadv_2 = """                <h4 style="color: var(--primary-color); margin-top: 25px;">BÀI MẪU 2: ÁP DỤNG DÀN Ý 02 (CHỈ THUẬN LỢI)</h4>"""
new_adv_disadv_2 = """                <h4 style="color: var(--primary-color); margin-top: 25px;">BÀI MẪU 2: ÁP DỤNG DÀN Ý 02 (CHỈ THUẬN LỢI)</h4>
                <div class="prompt-box" style="margin-bottom: 15px;">
                    <p><strong>ĐỀ BÀI:</strong> Volunteer work is becoming increasingly popular among students and young adults. Participating in volunteer activities is believed to bring various benefits to individuals and the community.<br><br><strong>Write an essay to discuss the benefits of doing volunteer work.</strong></p>
                </div>"""
content = content.replace(old_adv_disadv_2, new_adv_disadv_2)


# 2. Update TYPE 02 (cause-effect)
old_ce_top = """            <div class="content-block">
                <h3>ĐỀ BÀI (TASK 02)</h3>
                <div class="prompt-box">
                    <p>Obesity is a serious global problem in today's society, especially among young people...<br><br><strong>Write an essay to discuss the causes, effects and suggest possible solutions for obesity among young people.</strong></p>
                </div>
                <h3 style="margin-top: 25px;">BÀI VIẾT MẪU (SAMPLE ESSAY - B1 LEVEL)</h3>
                
                <h4 style="color: var(--primary-color); margin-top: 15px;">BÀI MẪU 1: DÀN Ý 01 (NGUYÊN NHÂN & GIẢI PHÁP)</h4>"""

new_ce_top = """            <div class="content-block">
                <h3>BÀI VIẾT MẪU (SAMPLE ESSAY - B1 LEVEL)</h3>
                
                <h4 style="color: var(--primary-color); margin-top: 15px;">BÀI MẪU 1: DÀN Ý 01 (NGUYÊN NHÂN & GIẢI PHÁP)</h4>
                <div class="prompt-box" style="margin-bottom: 15px;">
                    <p><strong>ĐỀ BÀI:</strong> Obesity is a serious global problem in today's society, especially among young people. More than one-third of adults and 17% of youth in the United States are obese, although the prevalence remained stable between 2003-2004 and 2009-2010. Obesity causes a lot of conditions, including heart disease, stroke, type 2 diabetes, and certain types of cancer, some of the leading causes of preventable death.<br><br><strong>Write an essay to discuss the causes of obesity among young people and suggest possible solutions.</strong></p>
                </div>"""
content = content.replace(old_ce_top, new_ce_top)

# Update the rest of CE headers
ce_headers = [
    (
        '<h4 style="color: var(--primary-color); margin-top: 25px;">BÀI MẪU 2: DÀN Ý 02 (NGUYÊN NHÂN & ẢNH HƯỞNG)</h4>',
        """<h4 style="color: var(--primary-color); margin-top: 25px;">BÀI MẪU 2: DÀN Ý 02 (NGUYÊN NHÂN & ẢNH HƯỞNG)</h4>
                <div class="prompt-box" style="margin-bottom: 15px;">
                    <p><strong>ĐỀ BÀI:</strong> In many countries, the number of single-parent families has been rising steadily in recent decades. This trend has raised concerns about its possible causes and effects on individuals and society.<br><br><strong>Write an essay to discuss the causes of this trend and its effects.</strong></p>
                </div>"""
    ),
    (
        '<h4 style="color: var(--primary-color); margin-top: 25px;">BÀI MẪU 3: DÀN Ý 03 (ẢNH HƯỞNG & GIẢI PHÁP)</h4>',
        """<h4 style="color: var(--primary-color); margin-top: 25px;">BÀI MẪU 3: DÀN Ý 03 (ẢNH HƯỞNG & GIẢI PHÁP)</h4>
                <div class="prompt-box" style="margin-bottom: 15px;">
                    <p><strong>ĐỀ BÀI:</strong> Cybercrime has become a serious issue in modern society, affecting both individuals and organizations around the world. As technology continues to develop, the impacts of online crime are becoming more widespread and damaging.<br><br><strong>Write an essay to discuss the impacts of cybercrime and suggest possible solutions.</strong></p>
                </div>"""
    ),
    (
        '<h4 style="color: var(--primary-color); margin-top: 25px;">BÀI MẪU 4: DÀN Ý 04 (CHỈ NGUYÊN NHÂN)</h4>',
        """<h4 style="color: var(--primary-color); margin-top: 25px;">BÀI MẪU 4: DÀN Ý 04 (CHỈ NGUYÊN NHÂN)</h4>
                <div class="prompt-box" style="margin-bottom: 15px;">
                    <p><strong>ĐỀ BÀI:</strong> In recent years, a growing number of young people have chosen to leave traditional jobs in companies to start their own businesses. This trend has attracted attention from the public and sparked discussion about what is driving this change.<br><br><strong>Write an essay to discuss the causes of this trend.</strong></p>
                </div>"""
    ),
    (
        '<h4 style="color: var(--primary-color); margin-top: 25px;">BÀI MẪU 5: DÀN Ý 05 (CHỈ ẢNH HƯỞNG)</h4>',
        """<h4 style="color: var(--primary-color); margin-top: 25px;">BÀI MẪU 5: DÀN Ý 05 (CHỈ ẢNH HƯỞNG)</h4>
                <div class="prompt-box" style="margin-bottom: 15px;">
                    <p><strong>ĐỀ BÀI:</strong> Deforestation has become a serious environmental issue in many parts of the world. As large areas of forest are being cut down every year, this practice is causing significant damage to the environment and human life.<br><br><strong>Write an essay to discuss the effects of deforestation.</strong></p>
                </div>"""
    ),
    (
        '<h4 style="color: var(--primary-color); margin-top: 25px;">BÀI MẪU 6: DÀN Ý 06 (CHỈ GIẢI PHÁP)</h4>',
        """<h4 style="color: var(--primary-color); margin-top: 25px;">BÀI MẪU 6: DÀN Ý 06 (CHỈ GIẢI PHÁP)</h4>
                <div class="prompt-box" style="margin-bottom: 15px;">
                    <p><strong>ĐỀ BÀI:</strong> In today’s globalized world, language education plays a key role in helping people communicate, work, and study across borders. However, in many countries, language learning is still limited or ineffective.<br><br><strong>Write an essay to suggest measures that can be taken to promote language education.</strong></p>
                </div>"""
    )
]

for old_h, new_h in ce_headers:
    content = content.replace(old_h, new_h)


# 3. Update TYPE 03 (opinion)
old_op = """            <div class="content-block">
                <h3>ĐỀ BÀI (TASK 02)</h3>
                <div class="prompt-box">
                    <p>In today’s modern society, many families can afford to hire domestic helpers or rely on convenient services for meals and housework. As a result, some people believe that children, especially girls, no longer need to learn how to cook or do household chores.<br><br><strong>To what extent do you agree or disagree with this opinion?</strong></p>
                </div>
                <h3 style="margin-top: 25px;">BÀI VIẾT MẪU (SAMPLE ESSAY - B1 LEVEL)</h3>"""

new_op = """            <div class="content-block">
                <h3>BÀI VIẾT MẪU (SAMPLE ESSAY - B1 LEVEL)</h3>
                <div class="prompt-box" style="margin-bottom: 15px; margin-top: 15px;">
                    <p><strong>ĐỀ BÀI:</strong> In today’s modern society, many families can afford to hire domestic helpers or rely on convenient services for meals and housework. As a result, some people believe that children, especially girls, no longer need to learn how to cook or do household chores.<br><br><strong>To what extent do you agree or disagree with this opinion?</strong></p>
                </div>"""
content = content.replace(old_op, new_op)


# 4. Update TYPE 04 (discussion)
old_dis = """            <div class="content-block">
                <h3>ĐỀ BÀI (TASK 02)</h3>
                <div class="prompt-box">
                    <p>Some people believe that children should read picture books because they are easier to understand and more enjoyable. However, others argue that picture books may negatively affect children's imagination, just like watching television.<br><br><strong>Discuss both views and give your own opinion.</strong></p>
                </div>
                <h3 style="margin-top: 25px;">BÀI VIẾT MẪU (SAMPLE ESSAY - B1 LEVEL)</h3>"""

new_dis = """            <div class="content-block">
                <h3>BÀI VIẾT MẪU (SAMPLE ESSAY - B1 LEVEL)</h3>
                <div class="prompt-box" style="margin-bottom: 15px; margin-top: 15px;">
                    <p><strong>ĐỀ BÀI:</strong> Some people believe that children should read picture books because they are easier to understand and more enjoyable. However, others argue that picture books may negatively affect children's imagination, just like watching television.<br><br><strong>Discuss both views and give your own opinion.</strong></p>
                </div>"""
content = content.replace(old_dis, new_dis)

with open('/Users/nguyetpham/Desktop/WEBSITE/writing-essays-b1level/app.js', 'w') as f:
    f.write(content)

