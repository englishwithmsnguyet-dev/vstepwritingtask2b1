const essayTypes = [
    {
        id: 'adv-disadv',
        icon: 'fa-scale-balanced',
        titleEn: 'ADVANTAGES AND DISADVANTAGES',
        titleVi: 'Thảo Luận Thuận Lợi & Bất Lợi',
        basicInfo: `
            <div class="content-block">
                <h3>Mục đích</h3>
                <p>Yêu cầu thí sinh <strong>phân tích một cách cân bằng các mặt tích cực và tiêu cực</strong> của một hiện tượng, hành vi hoặc xu hướng trong xã hội hiện đại.</p>
            </div>
            <div class="content-block">
                <h3>Đặc điểm của dạng bài</h3>
                <p>Về bản chất, đây là dạng bài <strong>mang tính trung lập</strong>. Thí sinh không bị bắt buộc phải bày tỏ quan điểm cá nhân rõ ràng như trong OPINION ESSAY. Việc đưa ra một nhận định tổng quát ở phần kết luận được xem là phù hợp.</p>
            </div>
        `,
        identifyingSigns: `
            <div class="content-block">
                <h3>Các từ khóa thường xuất hiện trong đề bài:</h3>
                <ul>
                    <li>What are the advantages and disadvantages of…?</li>
                    <li>Discuss the benefits and drawbacks of…</li>
                    <li>Discuss the benefits/advantages of….</li>
                    <li>Discuss the importance of …</li>
                    <li>Do the advantages outweigh the disadvantages?</li>
                    <li>What are the positive and negative aspects of …?</li>
                </ul>
                <p><em>Lưu ý: Việc xác định chính xác yêu cầu của đề (phân tích hai mặt hay chỉ một mặt, có yêu cầu so sánh mức độ hay không) là yếu tố then chốt để lựa chọn cấu trúc bài viết phù hợp.</em></p>
            </div>
        `,
        detailedOutline: `
            <div class="outline-variant">
                <h3 style="color: var(--primary-color); border-bottom: 2px solid var(--primary-light); padding-bottom: 10px; margin-bottom: 15px;">DÀN Ý 1: ĐỀ THUẬN LỢI VÀ BẤT LỢI</h3>
                <div class="outline-step">
                    <h4>1. MỞ BÀI</h4>
                    <p>↳ <span class="outline-phrase">In recent years, [chủ đề] has become more common in modern society. Although it has some benefits, there are also some drawbacks. This essay will discuss both sides of this topic.</span></p>
                </div>
                <div class="outline-step">
                    <h4>2. THÂN BÀI 1: advantages – lợi ích</h4>
                    <p>↳ <span class="outline-phrase">On the one hand, [chủ đề] has several advantages.</span></p>
                    <ul>
                        <li><span class="outline-phrase">One major benefit is that [lợi ích 1].</span> → [luận cứ giải thích/ví dụ]</li>
                        <li><span class="outline-phrase">Another positive aspect is that [lợi ích 2].</span> → [luận cứ giải thích/ví dụ]</li>
                        <li><span class="outline-phrase">A further good point is that [lợi ích 3].</span> → [luận cứ giải thích/ví dụ]</li>
                    </ul>
                </div>
                <div class="outline-step">
                    <h4>3. THÂN BÀI 2: disadvantages – bất lợi</h4>
                    <p>↳ <span class="outline-phrase">On the other hand, there are also several disadvantages.</span></p>
                    <ul>
                        <li><span class="outline-phrase">One possible drawback is that [bất lợi 1].</span> → [luận cứ giải thích/ví dụ]</li>
                        <li><span class="outline-phrase">Another negative aspect is that [bất lợi 2].</span> → [luận cứ giải thích/ví dụ]</li>
                        <li><span class="outline-phrase">A further problem is that [bất lợi 3].</span> → [luận cứ giải thích/ví dụ]</li>
                    </ul>
                </div>
                <div class="outline-step">
                    <h4>4. KẾT BÀI</h4>
                    <p>↳ <span class="outline-phrase">In conclusion, [chủ đề] has both advantages and disadvantages. These points show that it has different effects on people’s lives. Therefore, it is important to consider both sides before making a decision.</span></p>
                </div>
            </div>

            <div class="outline-variant" style="margin-top: 40px;">
                <h3 style="color: var(--primary-color); border-bottom: 2px solid var(--primary-light); padding-bottom: 10px; margin-bottom: 15px;">DÀN Ý 2: ĐỀ CHỈ THUẬN LỢI</h3>
                <div class="outline-step">
                    <h4>1. MỞ BÀI</h4>
                    <p>↳ <span class="outline-phrase">In recent years, [chủ đề] has become more common in modern society. Many people see this as a positive development. This essay will discuss the main advantages of this topic.</span></p>
                </div>
                <div class="outline-step">
                    <h4>2. THÂN BÀI</h4>
                    <ul>
                        <li><strong>THÂN BÀI 1:</strong> <span class="outline-phrase">One main advantage is that [lợi ích 1].</span> → [luận cứ]</li>
                        <li><strong>THÂN BÀI 2:</strong> <span class="outline-phrase">Another positive aspect is that [lợi ích 2].</span> → [luận cứ]</li>
                        <li><strong>THÂN BÀI 3:</strong> <span class="outline-phrase">A further benefit is that [lợi ích 3].</span> → [luận cứ]</li>
                    </ul>
                </div>
                <div class="outline-step">
                    <h4>3. KẾT BÀI</h4>
                    <p>↳ <span class="outline-phrase">In conclusion, [chủ đề] offers several benefits. These advantages make it useful for many people. Overall, it is a positive development in modern society.</span></p>
                </div>
            </div>
        `,
        sampleWriting: `
            <div class="content-block">
                <h3>BÀI VIẾT MẪU (SAMPLE ESSAY - B1 LEVEL)</h3>
                
                <h4 style="color: var(--primary-color); margin-top: 15px;">BÀI MẪU 1: ÁP DỤNG DÀN Ý 01 (THUẬN LỢI & BẤT LỢI)</h4>
                <div class="prompt-box" style="margin-bottom: 15px;">
                    <p><strong>ĐỀ BÀI:</strong> Online learning is a great, revolutionary alternative to traditional training. Online learning is a form of distance learning that takes place over the Internet, including online courses, exams, gamified quizzes, and certification training. Some people believe that e-learning will replace traditional classes in the future.<br><br><strong>Write an essay to discuss the advantages and disadvantages of online learning.</strong></p>
                </div>
                <div class="sample-letter-box">
                    In recent years, <strong>online learning</strong> has become more common in modern society. Although it has some benefits, there are also some drawbacks. <strong>This essay will discuss both sides of this topic.</strong><br><br>
                    On the one hand, <strong>digital learning</strong> has several advantages. One major benefit is that <strong>it is convenient and flexible</strong>. <em>This is because learners can study anytime and anywhere, so they can manage their time better and balance learning with other activities.</em> Another positive aspect is that <strong>it helps save money</strong>. <em>The main reason is that students do not need to pay for transport, accommodation, or printed materials, so it is suitable for people with a limited budget.</em> A further good point is that <strong>it allows learners to study at their own pace</strong>. <em>This means that they can review lessons many times if they do not understand, so they do not feel left behind.</em><br><br>
                    On the other hand, there are also several disadvantages. One possible drawback is that <strong>online education makes students easily distracted</strong>. <em>In fact, they often study at home with many distractions such as mobile phones or noise, so they may lose focus during lessons.</em> Another negative aspect is that <strong>it reduces face-to-face interaction</strong>. <em>This is because students cannot communicate directly with teachers or classmates, so their communication skills may not improve well.</em> A further problem is that <strong>it depends on technology</strong>. <em>This means that technical errors or internet problems can interrupt learning and make it less effective.</em><br><br>
                    In conclusion, <strong>distance learning</strong> has both advantages and disadvantages. These points show that it has different effects on people’s lives. Therefore, it is important to consider both sides before making a decision.
                </div>

                <h4 style="color: var(--primary-color); margin-top: 25px;">BÀI MẪU 2: ÁP DỤNG DÀN Ý 02 (CHỈ THUẬN LỢI)</h4>
                <div class="prompt-box" style="margin-bottom: 15px;">
                    <p><strong>ĐỀ BÀI:</strong> Volunteer work is becoming increasingly popular among students and young adults. Participating in volunteer activities is believed to bring various benefits to individuals and the community.<br><br><strong>Write an essay to discuss the benefits of doing volunteer work.</strong></p>
                </div>
                <div class="sample-letter-box">
                    In recent years, <strong>doing volunteer work</strong> has become more common in modern society. Many people see this as a positive development. <strong>This essay will discuss the main advantages of this topic.</strong><br><br>
                    One main advantage is that <strong>volunteer work helps people develop important skills</strong>. <em>This is because volunteers communicate with many different people, so they can improve their communication skills. In addition, they work with others in different activities, so they can improve their teamwork skills and learn how to cooperate more effectively. As a result, they become more confident and gain useful experience for future jobs and studies.</em><br><br>
                    Another positive aspect is that <strong>participating in volunteer work brings benefits to the community</strong>. <em>The main reason is that volunteers help people in need, so some people can have better living conditions and receive more support. Moreover, volunteers can clean public areas or plant trees, so the environment can become cleaner and healthier. Therefore, some social and environmental problems can be reduced, and the community can become more connected.</em><br><br>
                    A further benefit is that <strong>doing voluntary activities helps people feel happier and more meaningful</strong>. <em>In fact, volunteers can help other people and do useful things for society, so they often feel proud of themselves. Besides, many volunteers receive appreciation from other people, so they feel more motivated to continue helping others. Consequently, they usually develop a more positive attitude toward life and care more about the people around them.</em><br><br>
                    In conclusion, <strong>volunteer work</strong> offers several benefits. These advantages make it useful for many people. Overall, it is a positive development in modern society.
                </div>
                
                <div class="highlight-box" style="margin-top: 20px;">
                    <p><i class="fa-solid fa-lightbulb"></i> Hệ thống cung cấp đầy đủ các bài viết mẫu tương ứng với từng Dàn ý, giúp học viên dễ dàng theo dõi và ứng dụng.</p>
                </div>
            </div>
        `
    },
    {
        id: 'cause-effect',
        icon: 'fa-link',
        titleEn: 'CAUSES – EFFECTS – SOLUTIONS',
        titleVi: 'Nguyên Nhân, Hậu Quả & Giải Pháp',
        basicInfo: `
            <div class="content-block">
                <h3>Mục đích</h3>
                <p>Yêu cầu thí sinh phân tích một vấn đề xã hội bằng cách xác định <strong>nguyên nhân, hậu quả, giải pháp</strong> liên quan đến vấn đề đó.</p>
            </div>
            <div class="content-block">
                <h3>Đặc điểm của dạng bài</h3>
                <p>Tùy theo yêu cầu của đề bài, thí sinh có thể được yêu cầu: Phân tích nguyên nhân & hậu quả, Phân tích nguyên nhân & giải pháp, Phân tích hậu quả & giải pháp, hoặc chỉ tập trung vào một yếu tố duy nhất. Bài viết cần thể hiện khả năng giải thích mối quan hệ giữa vấn đề một cách logic và rõ ràng.</p>
            </div>
        `,
        identifyingSigns: `
            <div class="content-block">
                <h3>Dạng đề có thể xuất hiện dưới nhiều biến thể, bao gồm:</h3>
                
                <h4>1. Yêu cầu phân tích nguyên nhân và hậu quả</h4>
                <ul>
                    <li>What are the causes and effects of this problem?</li>
                    <li>What factors lead to this issue and what are its consequences?</li>
                </ul>
                
                <h4>2. Yêu cầu phân tích nguyên nhân và giải pháp</h4>
                <ul>
                    <li>What are the causes of this issue and how can it be solved?</li>
                    <li>Why is this happening and what can be done to tackle it?</li>
                </ul>
                
                <h4>3. Yêu cầu phân tích hậu quả và giải pháp</h4>
                <ul>
                    <li>What problems does this issue cause and what are the possible solutions?</li>
                    <li>What are the effects and how can we deal with them?</li>
                </ul>
                
                <h4>4. Yêu cầu phân tích một yếu tố duy nhất <em>(nguyên nhân / hậu quả / giải pháp)</em></h4>
                <ul>
                    <li>What are the main reasons/causes for this trend?</li>
                    <li>What are the impacts/negative effects of this issue on society?</li>
                    <li>What should be done to solve this problem?</li>
                </ul>
            </div>
        `,
        detailedOutline: `
            <div class="outline-variant">
                <h3 style="color: var(--primary-color); border-bottom: 2px solid var(--primary-light); padding-bottom: 10px; margin-bottom: 15px;">DÀN Ý 1: NGUYÊN NHÂN VÀ GIẢI PHÁP</h3>
                <div class="outline-step">
                    <h4>1. MỞ BÀI</h4>
                    <p>↳ <span class="outline-phrase">In recent years, [chủ đề] has become a growing concern in many parts of the world. This issue affects both individuals and society in different ways. This essay will discuss the main causes of this problem and suggest possible solutions.</span></p>
                </div>
                <div class="outline-step">
                    <h4>2. THÂN BÀI</h4>
                    <p><strong>THÂN BÀI 1: causes – nguyên nhân</strong></p>
                    <p>↳ <span class="outline-phrase">This issue can be caused by several factors.</span></p>
                    <ul>
                        <li><span class="outline-phrase">One major cause is that [nguyên nhân 1].</span></li>
                        <li><span class="outline-phrase">Another contributing factor is that [nguyên nhân 2].</span></li>
                        <li><span class="outline-phrase">A further reason is that [nguyên nhân 3].</span></li>
                    </ul>
                    <p><strong>THÂN BÀI 2: solutions – giải pháp</strong></p>
                    <p>↳ <span class="outline-phrase">To solve this problem, several measures can be taken.</span></p>
                    <ul>
                        <li><span class="outline-phrase">One effective solution is to [giải pháp 1].</span></li>
                        <li><span class="outline-phrase">Another possible measure is to [giải pháp 2].</span></li>
                        <li><span class="outline-phrase">Finally, it is important to [giải pháp 3].</span></li>
                    </ul>
                </div>
                <div class="outline-step">
                    <h4>3. KẾT BÀI</h4>
                    <p>↳ <span class="outline-phrase">In conclusion, [chủ đề] is caused by several factors and requires practical solutions. By addressing the causes and applying suitable measures, this problem can be reduced in the future. These actions can help create positive changes for both individuals and society.</span></p>
                </div>
            </div>

            <div class="outline-variant" style="margin-top: 40px;">
                <h3 style="color: var(--primary-color); border-bottom: 2px solid var(--primary-light); padding-bottom: 10px; margin-bottom: 15px;">DÀN Ý 2: NGUYÊN NHÂN VÀ ẢNH HƯỞNG</h3>
                <div class="outline-step">
                    <h4>1. MỞ BÀI</h4>
                    <p>↳ <span class="outline-phrase">In recent years, [chủ đề] has become a growing concern in many parts of the world. This issue affects both individuals and society in different ways. This essay will discuss the main causes of this problem and its possible effects.</span></p>
                </div>
                <div class="outline-step">
                    <h4>2. THÂN BÀI</h4>
                    <p><strong>THÂN BÀI 1: causes – nguyên nhân</strong></p>
                    <p>↳ <span class="outline-phrase">This issue can be caused by several factors.</span></p>
                    <ul>
                        <li><span class="outline-phrase">One major cause is that [nguyên nhân 1].</span></li>
                        <li><span class="outline-phrase">Another contributing factor is that [nguyên nhân 2].</span></li>
                        <li><span class="outline-phrase">A further reason is that [nguyên nhân 3].</span></li>
                    </ul>
                    <p><strong>THÂN BÀI 2: effects – ảnh hưởng</strong></p>
                    <p>↳ <span class="outline-phrase">This problem can lead to several negative effects.</span></p>
                    <ul>
                        <li><span class="outline-phrase">One serious impact is that [ảnh hưởng 1].</span></li>
                        <li><span class="outline-phrase">Another consequence is that [ảnh hưởng 2].</span></li>
                        <li><span class="outline-phrase">A further problem is that [ảnh hưởng 3].</span></li>
                    </ul>
                </div>
                <div class="outline-step">
                    <h4>3. KẾT BÀI</h4>
                    <p>↳ <span class="outline-phrase">In conclusion, [chủ đề] is caused by several factors and can lead to many negative effects. By understanding the causes and paying more attention to this issue, the situation can be improved in the future. These actions can help create a better environment for both individuals and society.</span></p>
                </div>
            </div>

            <div class="outline-variant" style="margin-top: 40px;">
                <h3 style="color: var(--primary-color); border-bottom: 2px solid var(--primary-light); padding-bottom: 10px; margin-bottom: 15px;">DÀN Ý 3: ẢNH HƯỞNG VÀ GIẢI PHÁP</h3>
                <div class="outline-step">
                    <h4>1. MỞ BÀI</h4>
                    <p>↳ <span class="outline-phrase">In recent years, [chủ đề] has become a growing concern in many parts of the world. This issue affects both individuals and society in different ways. This essay will discuss the main effects of this problem and suggest possible solutions.</span></p>
                </div>
                <div class="outline-step">
                    <h4>2. THÂN BÀI</h4>
                    <p><strong>THÂN BÀI 1: effects – ảnh hưởng</strong></p>
                    <p>↳ <span class="outline-phrase">This problem can lead to several negative effects.</span></p>
                    <ul>
                        <li><span class="outline-phrase">One serious impact is that [ảnh hưởng 1].</span></li>
                        <li><span class="outline-phrase">Another consequence is that [ảnh hưởng 2].</span></li>
                        <li><span class="outline-phrase">A further problem is that [ảnh hưởng 3].</span></li>
                    </ul>
                    <p><strong>THÂN BÀI 2: solutions – giải pháp</strong></p>
                    <p>↳ <span class="outline-phrase">To solve this problem, several measures can be taken.</span></p>
                    <ul>
                        <li><span class="outline-phrase">One effective solution is to [giải pháp 1].</span></li>
                        <li><span class="outline-phrase">Another possible measure is to [giải pháp 2].</span></li>
                        <li><span class="outline-phrase">Finally, it is important to [giải pháp 3].</span></li>
                    </ul>
                </div>
                <div class="outline-step">
                    <h4>3. KẾT BÀI</h4>
                    <p>↳ <span class="outline-phrase">In conclusion, [chủ đề] leads to several negative effects and requires practical solutions. By applying suitable measures and paying more attention to this issue, the situation can be improved in the future. These actions can help create positive changes for both individuals and society.</span></p>
                </div>
            </div>

            <div class="outline-variant" style="margin-top: 40px;">
                <h3 style="color: var(--primary-color); border-bottom: 2px solid var(--primary-light); padding-bottom: 10px; margin-bottom: 15px;">DÀN Ý 4: CHỈ NGUYÊN NHÂN</h3>
                <div class="outline-step">
                    <h4>1. MỞ BÀI</h4>
                    <p>↳ <span class="outline-phrase">In recent years, [chủ đề] has become a growing concern in many parts of the world. This issue affects both individuals and society in different ways. This essay will discuss the main causes of this problem.</span></p>
                </div>
                <div class="outline-step">
                    <h4>2. THÂN BÀI</h4>
                    <ul>
                        <li><strong>THÂN BÀI 1:</strong> <span class="outline-phrase">One major cause is that [nguyên nhân 1].</span></li>
                        <li><strong>THÂN BÀI 2:</strong> <span class="outline-phrase">Another contributing factor is that [nguyên nhân 2].</span></li>
                        <li><strong>THÂN BÀI 3:</strong> <span class="outline-phrase">A further reason is that [nguyên nhân 3].</span></li>
                    </ul>
                </div>
                <div class="outline-step">
                    <h4>3. KẾT BÀI</h4>
                    <p>↳ <span class="outline-phrase">In conclusion, [chủ đề] is caused by several factors that affect both individuals and society. Understanding these causes is important to improve the situation in the future. With greater attention, this problem can be reduced over time.</span></p>
                </div>
            </div>

            <div class="outline-variant" style="margin-top: 40px;">
                <h3 style="color: var(--primary-color); border-bottom: 2px solid var(--primary-light); padding-bottom: 10px; margin-bottom: 15px;">DÀN Ý 5: CHỈ ẢNH HƯỞNG</h3>
                <div class="outline-step">
                    <h4>1. MỞ BÀI</h4>
                    <p>↳ <span class="outline-phrase">In recent years, [chủ đề] has become a growing concern in many parts of the world. This issue affects both individuals and society in different ways. This essay will discuss the main effects of this problem.</span></p>
                </div>
                <div class="outline-step">
                    <h4>2. THÂN BÀI</h4>
                    <ul>
                        <li><strong>THÂN BÀI 1:</strong> <span class="outline-phrase">One major effect is that [ảnh hưởng 1].</span></li>
                        <li><strong>THÂN BÀI 2:</strong> <span class="outline-phrase">Another serious impact is that [ảnh hưởng 2].</span></li>
                        <li><strong>THÂN BÀI 3:</strong> <span class="outline-phrase">A further consequence is that [ảnh hưởng 3].</span></li>
                    </ul>
                </div>
                <div class="outline-step">
                    <h4>3. KẾT BÀI</h4>
                    <p>↳ <span class="outline-phrase">In conclusion, [chủ đề] leads to several negative effects on both individuals and society. These impacts can affect many areas of life in different ways. Therefore, it is important to pay more attention to this issue in the future.</span></p>
                </div>
            </div>

            <div class="outline-variant" style="margin-top: 40px;">
                <h3 style="color: var(--primary-color); border-bottom: 2px solid var(--primary-light); padding-bottom: 10px; margin-bottom: 15px;">DÀN Ý 6: CHỈ GIẢI PHÁP</h3>
                <div class="outline-step">
                    <h4>1. MỞ BÀI</h4>
                    <p>↳ <span class="outline-phrase">In recent years, [chủ đề] has become increasingly important in modern society. Many people believe that more effective actions are needed in this area. This essay will suggest several practical measures to improve the situation.</span></p>
                </div>
                <div class="outline-step">
                    <h4>2. THÂN BÀI</h4>
                    <ul>
                        <li><strong>THÂN BÀI 1:</strong> <span class="outline-phrase">One effective solution is to [giải pháp 1].</span></li>
                        <li><strong>THÂN BÀI 2:</strong> <span class="outline-phrase">Another possible measure is to [giải pháp 2].</span></li>
                        <li><strong>THÂN BÀI 3:</strong> <span class="outline-phrase">A further approach is to [giải pháp 3].</span></li>
                    </ul>
                </div>
                <div class="outline-step">
                    <h4>3. KẾT BÀI</h4>
                    <p>↳ <span class="outline-phrase">In conclusion, several practical measures can help improve this situation effectively. These solutions can bring positive changes for both individuals and society. Therefore, it is important to take suitable actions in the future.</span></p>
                </div>
            </div>
        `,
        sampleWriting: `
            <div class="content-block">
                <h3>BÀI VIẾT MẪU (SAMPLE ESSAY - B1 LEVEL)</h3>
                
                <h4 style="color: var(--primary-color); margin-top: 15px;">BÀI MẪU 1: DÀN Ý 01 (NGUYÊN NHÂN & GIẢI PHÁP)</h4>
                <div class="prompt-box" style="margin-bottom: 15px;">
                    <p><strong>ĐỀ BÀI:</strong> Obesity is a serious global problem in today's society, especially among young people. More than one-third of adults and 17% of youth in the United States are obese, although the prevalence remained stable between 2003-2004 and 2009-2010. Obesity causes a lot of conditions, including heart disease, stroke, type 2 diabetes, and certain types of cancer, some of the leading causes of preventable death.<br><br><strong>Write an essay to discuss the causes of obesity among young people and suggest possible solutions.</strong></p>
                </div>
                <div class="sample-letter-box">
                    In recent years, <strong>obesity among young people</strong> has become a growing concern in many parts of the world. This issue affects both individuals and society in different ways. <strong>This essay will discuss the main causes of this problem and suggest possible solutions.</strong><br><br>
                    <strong>This issue can be caused by several factors.</strong> One major cause is that <strong>many young people have unhealthy eating habits</strong>. <em>This is because they often eat fast food and drink sugary beverages, so they consume too much fat and sugar every day.</em> Another contributing factor is that <strong>many young individuals do not exercise regularly</strong>. <em>As a result, they do not burn enough calories and may gain weight easily.</em> A further reason is that <strong>many teenagers lack nutritional knowledge</strong>. <em>Consequently, they may choose unhealthy food and develop poor eating habits.</em><br><br>
                    <strong>To solve this problem, several measures can be taken.</strong> One effective solution is to <strong>encourage young people to follow a healthier diet</strong>. <em>The main reason is that eating more vegetables and reducing junk food can help them control their weight and improve their health.</em> Another possible measure is to <strong>promote regular physical exercise at schools</strong>. <em>For example, schools can organize sports activities or encourage students to join exercise clubs after class.</em> Finally, it is important to <strong>educate young people about healthy eating habits</strong>. <em>Therefore, they can make healthier choices in their daily lives.</em><br><br>
                    In conclusion, <strong>obesity among young people</strong> is caused by several factors and requires practical solutions. By addressing the causes and applying suitable measures, this problem can be reduced in the future. These actions can help create positive changes for both individuals and society.
                </div>

                <h4 style="color: var(--primary-color); margin-top: 25px;">BÀI MẪU 2: DÀN Ý 02 (NGUYÊN NHÂN & ẢNH HƯỞNG)</h4>
                <div class="prompt-box" style="margin-bottom: 15px;">
                    <p><strong>ĐỀ BÀI:</strong> In many countries, the number of single-parent families has been rising steadily in recent decades. This trend has raised concerns about its possible causes and effects on individuals and society.<br><br><strong>Write an essay to discuss the causes of this trend and its effects.</strong></p>
                </div>
                <div class="sample-letter-box">
                    In recent years, <strong>the increase in single-parent families</strong> has become a growing concern in many parts of the world. This issue affects both individuals and society in different ways. <strong>This essay will discuss the main causes of this problem and discuss its possible effects.</strong><br><br>
                    <strong>This issue can be caused by several factors.</strong> One major cause is that <strong>divorce rates are increasing in many countries</strong>. <em>This is because many couples face financial pressure or relationship problems, so they decide to separate.</em> Another contributing factor is that <strong>some young people have unplanned pregnancies</strong>. <em>As a result, some children are raised by only one parent.</em> A further reason is that <strong>society is more accepting of single-parent families nowadays</strong>. <em>Consequently, more people feel comfortable becoming single parents.</em><br><br>
                    <strong>This problem can lead to several negative effects.</strong> One serious impact is that <strong>children in single-parent families may not receive enough parental supervision</strong>. <em>For example, a single parent may spend most of their time working to earn money, so they cannot spend enough time with their children.</em> Another consequence is that <strong>single parents may face financial burdens</strong>. <em>This is because they often have to support the whole family alone.</em> A further problem is that <strong>some children may develop bad behavior</strong>. <em>This is because they may not receive enough guidance from their parents, so they may behave badly at school or do negative things.</em><br><br>
                    In conclusion, <strong>the increase in single-parent families</strong> is caused by several factors and can lead to many negative effects. By understanding the causes and paying more attention to this issue, the situation can be improved in the future. These actions can help create a better environment for both individuals and society.
                </div>

                <h4 style="color: var(--primary-color); margin-top: 25px;">BÀI MẪU 3: DÀN Ý 03 (ẢNH HƯỞNG & GIẢI PHÁP)</h4>
                <div class="prompt-box" style="margin-bottom: 15px;">
                    <p><strong>ĐỀ BÀI:</strong> Cybercrime has become a serious issue in modern society, affecting both individuals and organizations around the world. As technology continues to develop, the impacts of online crime are becoming more widespread and damaging.<br><br><strong>Write an essay to discuss the impacts of cybercrime and suggest possible solutions.</strong></p>
                </div>
                <div class="sample-letter-box">
                    In recent years, <strong>cybercrime</strong> has become a growing concern in many parts of the world. This issue affects both individuals and society in different ways. <strong>This essay will discuss the main effects of this problem and suggest possible solutions.</strong><br><br>
                    <strong>This problem can lead to several negative effects.</strong> One serious impact is that <strong>many people may lose money</strong>. <em>This is because cybercriminals can steal personal and financial information, so they can take money from victims’ bank accounts.</em> Another consequence is that <strong>companies may lose important data</strong>. <em>For example, hackers can attack computer systems and damage valuable business information.</em> A further problem is that <strong>many individuals may feel unsafe when using online services</strong>. <em>This is because cybercrime can make the Internet seem dangerous, so some people may avoid online shopping or online banking.</em><br><br>
                    <strong>To solve this problem, several measures can be taken.</strong> One effective solution is to <strong>improve online security systems</strong>. <em>This is because stronger passwords and security software can better protect users from cyber attacks.</em> Another possible measure is to <strong>educate people about online safety</strong>. <em>For example, schools and companies can teach people how to recognize fake messages or dangerous websites.</em> Finally, it is important to <strong>create stricter laws against cybercrime</strong>. <em>As a result, criminals may receive stronger punishments and become less likely to commit online crimes.</em><br><br>
                    In conclusion, <strong>online crime</strong> leads to several negative effects and requires practical solutions. By applying suitable measures and paying more attention to this issue, the situation can be improved in the future. These actions can help create positive changes for both individuals and society.
                </div>

                <h4 style="color: var(--primary-color); margin-top: 25px;">BÀI MẪU 4: DÀN Ý 04 (CHỈ NGUYÊN NHÂN)</h4>
                <div class="prompt-box" style="margin-bottom: 15px;">
                    <p><strong>ĐỀ BÀI:</strong> In recent years, a growing number of young people have chosen to leave traditional jobs in companies to start their own businesses. This trend has attracted attention from the public and sparked discussion about what is driving this change.<br><br><strong>Write an essay to discuss the causes of this trend.</strong></p>
                </div>
                <div class="sample-letter-box">
                    In recent years, <strong>young people leaving their companies to start their own businesses</strong> has become a growing trend in many parts of the world. This situation affects both individuals and society in different ways. <strong>This essay will discuss the main causes behind this change.</strong><br><br>
                    One major cause is that <strong>many young people want more freedom and independence at work</strong>. <em>Many employees dislike fixed working hours and strict company rules. In addition, starting a business allows them to make their own decisions and develop their personal ideas. As a result, many young people believe that self-employment can give them a more flexible and satisfying working life.</em><br><br>
                    Another contributing factor is that <strong>many young people want to earn higher incomes</strong>. <em>In some companies, employees may receive low salaries or have limited opportunities for promotion. Moreover, successful business owners can sometimes earn much more money than regular workers. Therefore, many young people believe that starting their own businesses can help them improve their financial situation more quickly.</em><br><br>
                    A further reason is that <strong>the development of technology and social media has made business easier</strong>. <em>Young people can now sell products or advertise services through online platforms with lower costs. For example, many people open online shops or become content creators on social media. Consequently, starting a business has become more convenient and accessible for young people.</em><br><br>
                    In conclusion, <strong>young people choosing self-employment</strong> is caused by several factors that affect both individuals and society. Understanding these causes is important to better understand this situation in the future. With greater attention, suitable support and guidance can also be provided for young entrepreneurs.
                </div>

                <h4 style="color: var(--primary-color); margin-top: 25px;">BÀI MẪU 5: DÀN Ý 05 (CHỈ ẢNH HƯỞNG)</h4>
                <div class="prompt-box" style="margin-bottom: 15px;">
                    <p><strong>ĐỀ BÀI:</strong> Deforestation has become a serious environmental issue in many parts of the world. As large areas of forest are being cut down every year, this practice is causing significant damage to the environment and human life.<br><br><strong>Write an essay to discuss the effects of deforestation.</strong></p>
                </div>
                <div class="sample-letter-box">
                    In recent years, <strong>deforestation</strong> has become a growing concern in many parts of the world. This issue affects both individuals and society in different ways. <strong>This essay will discuss the main effects of this problem.</strong><br><br>
                    One major effect is that <strong>forest destruction causes serious damage to the environment and biodiversity</strong>. <em>In fact, many forests are natural habitats for animals and plants, so cutting down trees destroys their living environment. In addition, some species may gradually disappear because they cannot survive without forests or find enough food and shelter. As a result, ecosystems become weaker and biodiversity is reduced in many areas around the world.</em><br><br>
                    Another serious impact is that <strong>the loss of forests contributes to climate change and natural disasters</strong>. <em>The main reason is that trees help absorb carbon dioxide and control temperatures in the environment. However, when forests are destroyed, more greenhouse gases remain in the atmosphere and global warming becomes more serious. Consequently, many countries may experience floods, droughts, storms, and soil erosion more frequently than before.</em><br><br>
                    A further consequence is that <strong>the removal of forests negatively affects human life</strong>. <em>This is because many local people depend on forests for food, water, medicine, and income in their daily lives. Moreover, environmental damage caused by deforestation can reduce farming productivity and worsen living conditions in these areas. Therefore, many people may face financial difficulties, unemployment, and health problems in the future.</em><br><br>
                    In conclusion, <strong>this environmental issue</strong> leads to several negative effects on both individuals and society. These impacts can affect many areas of life in different ways. Therefore, it is important to pay more attention to this issue in the future.
                </div>

                <h4 style="color: var(--primary-color); margin-top: 25px;">BÀI MẪU 6: DÀN Ý 06 (CHỈ GIẢI PHÁP)</h4>
                <div class="prompt-box" style="margin-bottom: 15px;">
                    <p><strong>ĐỀ BÀI:</strong> In today’s globalized world, language education plays a key role in helping people communicate, work, and study across borders. However, in many countries, language learning is still limited or ineffective.<br><br><strong>Write an essay to suggest measures that can be taken to promote language education.</strong></p>
                </div>
                <div class="sample-letter-box">
                    In recent years, <strong>promoting language education</strong> has become increasingly important in modern society. Many people believe that more effective actions are needed in this area. <strong>This essay will suggest several practical measures to improve the situation.</strong><br><br>
                    One effective solution is to <strong>improve language teaching methods in schools</strong>. <em>Teachers should use more interactive activities such as games, group discussions, and speaking practice in class instead of focusing only on grammar exercises. In addition, students should be encouraged to use the language in real communication during lessons and daily activities. As a result, students may become more interested in language learning.</em><br><br>
                    Another possible measure is to <strong>increase access to language learning resources</strong>. <em>Schools and governments can provide more books, online materials, videos, and language learning applications for students. Moreover, free or low-cost language courses can help people from low-income families have better opportunities to learn foreign languages. Consequently, more students and adults may be able to study languages more easily.</em><br><br>
                    A further approach is to <strong>create more opportunities for people to practise foreign languages in daily life</strong>. <em>Schools can organize language clubs, cultural exchange programs, or speaking competitions for students on a regular basis. For example, learners can communicate with foreign teachers or international students through these activities and improve their speaking confidence. Therefore, people may become more confident, develop better communication skills, and use foreign languages more naturally in real situations.</em><br><br>
                    In conclusion, <strong>several practical measures</strong> can help improve this situation effectively. These solutions can bring positive changes for both individuals and society. Therefore, it is important to take suitable actions in the future.
                </div>
            </div>
        `
    },
    {
        id: 'opinion',
        icon: 'fa-comment-dots',
        titleEn: 'OPINION',
        titleVi: 'Trình Bày Quan Điểm',
        basicInfo: `
            <div class="content-block">
                <h3>Mục đích</h3>
                <p>Trình bày quan điểm cá nhân về một vấn đề xã hội và bảo vệ quan điểm đó bằng các lập luận thuyết phục.</p>
            </div>
            <div class="content-block">
                <h3>Đặc điểm của dạng bài</h3>
                <p>Thí sinh cần lựa chọn một lập trường rõ ràng như <strong>hoàn toàn đồng ý</strong> hoặc <strong>hoàn toàn không đồng ý</strong> với ý kiến được đưa ra. Bài viết cần có hệ thống lập luận mạch lạc, logic và nhất quán xuyên suốt.</p>
            </div>
        `,
        identifyingSigns: `
            <div class="content-block">
                <h3>Một số dạng câu hỏi phổ biến:</h3>
                <ul>
                    <li>Do you agree or disagree with this opinion?</li>
                    <li>To what extent do you agree or disagree?</li>
                    <li>Do you agree that...?</li>
                    <li>What is your opinion about this?</li>
                    <li>What do you think about this?</li>
                    <li>Do you support or oppose this view? Why?</li>
                </ul>
            </div>
        `,
        detailedOutline: `
            <div class="outline-step">
                <h4>1. MỞ BÀI</h4>
                <p>↳ <span class="outline-phrase">In recent years, the idea that [quan điểm trong đề bài – mệnh đề] has become a common topic of discussion. From my perspective, I completely agree / disagree with this opinion for several important reasons. This essay will present the main arguments supporting my viewpoint.</span></p>
            </div>
            <div class="outline-step">
                <h4>2. THÂN BÀI</h4>
                <p><strong>THÂN BÀI 1</strong></p>
                <p>↳ <span class="outline-phrase">The first reason why I agree / disagree with this opinion is that [lý do 1 – mệnh đề].</span> → Giải thích và phát triển lý do bằng các lập luận, ví dụ phù hợp.</p>
                <p><strong>THÂN BÀI 2</strong></p>
                <p>↳ <span class="outline-phrase">Another important reason is that [lý do 2 – mệnh đề].</span> → Tiếp tục phân tích và mở rộng ý.</p>
                <p><strong>THÂN BÀI 3</strong></p>
                <p>↳ <span class="outline-phrase">A further reason supporting my viewpoint is that [lý do 3 – mệnh đề].</span> → Phát triển lý do cuối cùng và nhấn mạnh tác động.</p>
            </div>
            <div class="outline-step">
                <h4>3. KẾT BÀI</h4>
                <p>↳ <span class="outline-phrase">In conclusion, I strongly agree / disagree with the idea that [quan điểm trong đề bài – mệnh đề]. The reasons above clearly explain why I support / oppose this viewpoint. Therefore, people should think about this opinion carefully in modern society.</span></p>
            </div>
        `,
        sampleWriting: `
            <div class="content-block">
                <h3>BÀI VIẾT MẪU (SAMPLE ESSAY - B1 LEVEL)</h3>
                <div class="prompt-box" style="margin-bottom: 15px; margin-top: 15px;">
                    <p><strong>ĐỀ BÀI:</strong> In today’s modern society, many families can afford to hire domestic helpers or rely on convenient services for meals and housework. As a result, some people believe that children, especially girls, no longer need to learn how to cook or do household chores.<br><br><strong>To what extent do you agree or disagree with this opinion?</strong></p>
                </div>
                <div class="sample-letter-box">
                    In recent years, the idea that <strong>children, especially girls, no longer need to learn how to cook or do household chores</strong> has become a common topic of discussion. From my perspective, I completely <strong>disagree</strong> with this opinion for several important reasons. This essay will present the main arguments supporting my viewpoint.<br><br>
                    The first reason why I <strong>disagree</strong> with this opinion is that <strong>learning household chores helps children develop important life skills</strong>. This is because cooking, cleaning, and organizing personal things are useful skills in daily life. If children do not learn to do these tasks at an early age, they may depend too much on other people in the future. As a result, if they have these basic skills, they can become more independent and better prepared for adult life.<br><br>
                    Another important reason is that <strong>household chores can strengthen family relationships and encourage children to become more responsible</strong>. When children help their parents with cooking or cleaning, they can learn to share family duties. This can make family members understand and support each other better. As a result, children who often do housework may have closer relationships with their parents. They can also develop a stronger sense of responsibility from a young age.<br><br>
                    A further reason supporting my viewpoint is that <strong>both boys and girls should learn household chores to promote gender equality</strong>. In modern society, housework should not be only the responsibility of women. Teaching both boys and girls to cook and clean can help reduce old ideas about gender roles. Therefore, children can learn that both men and women should share responsibilities in the family.<br><br>
                    In conclusion, I strongly <strong>disagree</strong> with the idea that <strong>household chores are no longer necessary for children in modern society</strong>. The reasons above clearly explain why I oppose this viewpoint. Therefore, people should think about this opinion carefully in modern society.
                </div>
            </div>
        `
    },
    {
        id: 'discussion',
        icon: 'fa-users-viewfinder',
        titleEn: 'DISCUSSION',
        titleVi: 'Thảo Luận 2 Chiều',
        basicInfo: `
            <div class="content-block">
                <h3>Mục đích</h3>
                <p>Phân tích một vấn đề dưới góc nhìn của hai quan điểm hoặc hai lập trường trái chiều, sau đó nêu rõ quan điểm cá nhân nếu đề bài có yêu cầu.</p>
            </div>
            <div class="content-block">
                <h3>Đặc điểm của dạng bài</h3>
                <p>Người viết cần trình bày lập luận cho cả hai phía một cách tương đối cân bằng và hợp lý. Bài viết cần có bố cục rõ ràng, hệ thống lập luận logic. <strong>Không nên thiên vị quá mức cho một phía</strong> trong phần phân tích hai quan điểm đối lập.</p>
            </div>
        `,
        identifyingSigns: `
            <div class="content-block">
                <h3>Các cấu trúc thể hiện hai quan điểm hoặc hai lập trường trái chiều:</h3>
                <ul>
                    <li>Discuss both views and give your opinion.</li>
                    <li>Discuss both sides and state your own view.</li>
                    <li>Some people believe that... while others think that...</li>
                    <li>There are different views about…</li>
                    <li>While some think that…, others feel that…</li>
                    <li>Some people argue that… while others believe that…</li>
                </ul>
                <p><em><i class="fa-solid fa-thumbtack"></i> LƯU Ý: Khi đề bài xuất hiện hai quan điểm hoặc hai cách nhìn đối lập về cùng một vấn đề, đó thường là dấu hiệu đặc trưng của dạng DISCUSSION ESSAY. Người viết cần phân tích và phát triển cả hai phía trước khi đưa ra kết luận hoặc quan điểm cá nhân.</em></p>
            </div>
        `,
        detailedOutline: `
            <div class="outline-step">
                <h4>1. MỞ BÀI</h4>
                <p>↳ <span class="outline-phrase">In recent years, [chủ đề] has become a common topic of discussion. Some people believe that [ý kiến 1 – mệnh đề], while others argue that [ý kiến 2 – mệnh đề]. This essay will discuss both views and give my own opinion.</span></p>
            </div>
            <div class="outline-step">
                <h4>2. THÂN BÀI</h4>
                <p><strong>THÂN BÀI 1 (Phân tích ý kiến 1):</strong></p>
                <p>↳ <span class="outline-phrase">On the one hand, it is argued that [ý kiến 1 – mệnh đề].</span></p>
                <p>→ Phân tích và phát triển quan điểm bằng giải thích, ví dụ phù hợp (khoảng 4-6 câu).</p>
                <p><strong>THÂN BÀI 2 (Phân tích ý kiến 2):</strong></p>
                <p>↳ <span class="outline-phrase">On the other hand, it is believed that [ý kiến 2 – mệnh đề].</span></p>
                <p>→ Phân tích quan điểm đối lập bằng các lập luận và ví dụ phù hợp (khoảng 4-6 câu).</p>
            </div>
            <div class="outline-step">
                <h4>3. KẾT BÀI</h4>
                <p>↳ <span class="outline-phrase">In conclusion, both views have their own reasons. However, I believe that [quan điểm cá nhân – mệnh đề] because [lý do ngắn gọn]. Therefore, people should think carefully before forming an opinion.</span></p>
            </div>
        `,
        sampleWriting: `
            <div class="content-block">
                <h3>BÀI VIẾT MẪU (SAMPLE ESSAY - B1 LEVEL)</h3>
                <div class="prompt-box" style="margin-bottom: 15px; margin-top: 15px;">
                    <p><strong>ĐỀ BÀI:</strong> Some people believe that children should read picture books because they are easier to understand and more enjoyable. However, others argue that picture books may negatively affect children's imagination, just like watching television.<br><br><strong>Discuss both views and give your own opinion.</strong></p>
                </div>
                <div class="sample-letter-box">
                    In recent years, <strong>the use of picture books for children</strong> has become a common topic of discussion. Some people believe that <strong>children should read picture books because they are easier to understand and more enjoyable</strong>, while others argue that <strong>picture books may negatively affect children's imagination, just like watching television</strong>. <strong>This essay will discuss both views and give my own opinion.</strong><br><br>
                    On the one hand, it is argued that <strong>picture books bring many benefits to children</strong>. This is because pictures can help children understand stories more easily, especially when they are learning new words. In addition, young readers can follow the content more easily because the illustrations explain important parts of the story. Reading also becomes more enjoyable because colorful images attract children's attention. As a result, children are often more interested in reading and learning. For example, many primary teachers use picture books to encourage students to participate actively in reading lessons.<br><br>
                    On the other hand, it is believed that <strong>picture books may have some negative effects on children</strong>. The main reason is that children may rely too much on pictures instead of using their imagination. As a result, they may not need to imagine characters, places, or events because the illustrations already provide this information. This can reduce opportunities for children to develop creative thinking skills. Furthermore, some children may find books without pictures less attractive and more difficult to read. Therefore, the excessive use of picture books may reduce children's creativity and imagination.<br><br>
                    In conclusion, both views have their own reasons. However, I personally believe that <strong>picture books are beneficial for children</strong> because <strong>they help young readers enjoy reading and improve language skills</strong>. Therefore, people should think carefully before forming an opinion.
                </div>
            </div>
        `
    }
];

const recitationQuestions = {
    'adv-disadv': [
        {cue: '[DÀN Ý 01 - THUẬN LỢI & BẤT LỢI]<br>1. MỞ BÀI<br>Viết câu giới thiệu chủ đề:', target: 'In recent years, [chủ đề] has become more common in modern society.', vn: 'Trong những năm gần đây, [chủ đề] đã trở nên phổ biến hơn trong xã hội hiện đại.'},
        {cue: '[DÀN Ý 01 - THUẬN LỢI & BẤT LỢI]<br>1. MỞ BÀI<br>Viết câu khẳng định vấn đề có hai mặt (lợi và hại):', target: 'Although it has some benefits, there are also some drawbacks.', vn: 'Mặc dù nó có một số lợi ích, nhưng cũng có một vài bất lợi.'},
        {cue: '[DÀN Ý 01 - THUẬN LỢI & BẤT LỢI]<br>1. MỞ BÀI<br>Viết câu giới thiệu mục đích bài viết:', target: 'This essay will discuss both sides of this topic.', vn: 'Bài viết này sẽ thảo luận cả hai mặt của chủ đề này.'},
        {cue: '[DÀN Ý 01 - THUẬN LỢI & BẤT LỢI]<br>2. THÂN BÀI<br>Viết câu chủ đoạn cho thân bài miêu tả thuận lợi:', target: 'On the one hand, [chủ đề] has several advantages.', vn: 'Một mặt, [chủ đề] có một vài thuận lợi.'},
        {cue: '[DÀN Ý 01 - THUẬN LỢI & BẤT LỢI]<br>2. THÂN BÀI<br>Viết câu dẫn lợi ích 1:', target: 'One major benefit is that [lợi ích 1].', vn: 'Một lợi ích chính là [lợi ích 1].'},
        {cue: '[DÀN Ý 01 - THUẬN LỢI & BẤT LỢI]<br>2. THÂN BÀI<br>Viết câu dẫn lợi ích 2:', target: 'Another positive aspect is that [lợi ích 2].', vn: 'Một khía cạnh tích cực khác là [lợi ích 2].'},
        {cue: '[DÀN Ý 01 - THUẬN LỢI & BẤT LỢI]<br>2. THÂN BÀI<br>Viết câu dẫn lợi ích 3:', target: 'A further good point is that [lợi ích 3].', vn: 'Một điểm tốt nữa là [lợi ích 3].'},
        {cue: '[DÀN Ý 01 - THUẬN LỢI & BẤT LỢI]<br>2. THÂN BÀI<br>Viết câu chủ đoạn cho thân bài miêu tả bất lợi:', target: 'On the other hand, there are also several disadvantages.', vn: 'Mặt khác, cũng có một vài bất lợi.'},
        {cue: '[DÀN Ý 01 - THUẬN LỢI & BẤT LỢI]<br>2. THÂN BÀI<br>Viết câu dẫn bất lợi 1:', target: 'One possible drawback is that [bất lợi 1].', vn: 'Một bất lợi có thể xảy ra là [bất lợi 1].'},
        {cue: '[DÀN Ý 01 - THUẬN LỢI & BẤT LỢI]<br>2. THÂN BÀI<br>Viết câu dẫn bất lợi 2:', target: 'Another negative aspect is that [bất lợi 2].', vn: 'Một khía cạnh tiêu cực khác là [bất lợi 2].'},
        {cue: '[DÀN Ý 01 - THUẬN LỢI & BẤT LỢI]<br>2. THÂN BÀI<br>Viết câu dẫn bất lợi 3:', target: 'A further problem is that [bất lợi 3].', vn: 'Một vấn đề nữa là [bất lợi 3].'},
        {cue: '[DÀN Ý 01 - THUẬN LỢI & BẤT LỢI]<br>3. KẾT BÀI<br>Viết câu Kết bài khẳng định chủ đề có cả hai mặt:', target: 'In conclusion, [chủ đề] has both advantages and disadvantages.', vn: 'Tóm lại, [chủ đề] có cả thuận lợi và bất lợi.'},
        {cue: '[DÀN Ý 01 - THUẬN LỢI & BẤT LỢI]<br>3. KẾT BÀI<br>Viết câu nhận xét chung:', target: 'These points show that it has different effects on people’s lives.', vn: 'Những điểm này cho thấy nó có nhiều ảnh hưởng khác nhau lên đời sống con người.'},
        {cue: '[DÀN Ý 01 - THUẬN LỢI & BẤT LỢI]<br>3. KẾT BÀI<br>Viết câu chốt lại lời khuyên :', target: 'Therefore, it is important to consider both sides before making a decision.', vn: 'Vì vậy, việc xem xét cả hai mặt trước khi đưa ra quyết định là điều quan trọng.'},
        
        {cue: '[DÀN Ý 02 - CHỈ THUẬN LỢI]<br>1. MỞ BÀI<br>Viết câu dẫn dắt chủ đề:', target: 'In recent years, [chủ đề] has become more common in modern society.', vn: 'Trong những năm gần đây, [chủ đề] đã trở nên phổ biến hơn trong xã hội hiện đại.'},
        {cue: '[DÀN Ý 02 - CHỈ THUẬN LỢI]<br>1. MỞ BÀI<br>Viết câu nêu góc nhìn tích cực:', target: 'Many people see this as a positive development.', vn: 'Nhiều người xem đây là một sự phát triển tích cực.'},
        {cue: '[DÀN Ý 02 - CHỈ THUẬN LỢI]<br>1. MỞ BÀI<br>Viết câu giới thiệu mục đích bài viết:', target: 'This essay will discuss the main advantages of this topic.', vn: 'Bài viết này sẽ thảo luận những thuận lợi chính của chủ đề này.'},
        {cue: '[DÀN Ý 02 - CHỈ THUẬN LỢI]<br>2. THÂN BÀI<br>Thân bài 1 - Lợi ích 1:', target: 'One main advantage is that [lợi ích 1].', vn: 'Một thuận lợi chính là [lợi ích 1].'},
        {cue: '[DÀN Ý 02 - CHỈ THUẬN LỢI]<br>2. THÂN BÀI<br>Thân bài 2 - Lợi ích 2:', target: 'Another positive aspect is that [lợi ích 2].', vn: 'Một khía cạnh tích cực khác là [lợi ích 2].'},
        {cue: '[DÀN Ý 02 - CHỈ THUẬN LỢI]<br>2. THÂN BÀI<br>Thân bài 3 - Lợi ích 3:', target: 'A further benefit is that [lợi ích 3].', vn: 'Một lợi ích nữa là [lợi ích 3].'},
        {cue: '[DÀN Ý 02 - CHỈ THUẬN LỢI]<br>3. KẾT BÀI<br>Viết câu tóm tắt lại lợi ích:', target: 'In conclusion, [chủ đề] offers several benefits.', vn: 'Tóm lại, [chủ đề] mang lại một vài lợi ích.'},
        {cue: '[DÀN Ý 02 - CHỈ THUẬN LỢI]<br>3. KẾT BÀI<br>Viết câu khẳng định giá trị:', target: 'These advantages make it useful for many people.', vn: 'Những thuận lợi này khiến nó trở nên hữu ích cho nhiều người.'},
        {cue: '[DÀN Ý 02 - CHỈ THUẬN LỢI]<br>3. KẾT BÀI<br>Viết câu chốt lại vấn đề:', target: 'Overall, it is a positive development in modern society.', vn: 'Nhìn chung, đây là một sự phát triển tích cực trong xã hội hiện đại.'}
    ],
    'cause-effect': [
        {cue: '[DÀN Ý 01 - NGUYÊN NHÂN & GIẢI PHÁP]<br>1. MỞ BÀI<br>Viết câu dẫn dắt chủ đề:', target: 'In recent years, [chủ đề] has become a growing concern in many parts of the world.', vn: 'Trong những năm gần đây, [chủ đề] đã trở thành một mối lo ngại ngày càng tăng ở nhiều nơi trên thế giới.'},
        {cue: '[DÀN Ý 01 - NGUYÊN NHÂN & GIẢI PHÁP]<br>1. MỞ BÀI<br>Viết câu nêu mức độ nghiêm trọng:', target: 'This issue affects both individuals and society in different ways.', vn: 'Vấn đề này ảnh hưởng đến cả cá nhân và xã hội theo nhiều cách khác nhau.'},
        {cue: '[DÀN Ý 01 - NGUYÊN NHÂN & GIẢI PHÁP]<br>1. MỞ BÀI<br>Viết câu giới thiệu mục đích bài viết:', target: 'This essay will discuss the main causes of this problem and suggest possible solutions.', vn: 'Bài viết này sẽ thảo luận những nguyên nhân chính của vấn đề này và đề xuất các giải pháp khả thi.'},
        {cue: '[DÀN Ý 01 - NGUYÊN NHÂN & GIẢI PHÁP]<br>2. THÂN BÀI<br>Dẫn dắt Thân bài 1 (Nguyên nhân):', target: 'This issue can be caused by several factors.', vn: 'Vấn đề này có thể được gây ra bởi một vài yếu tố.'},
        {cue: '[DÀN Ý 01 - NGUYÊN NHÂN & GIẢI PHÁP]<br>2. THÂN BÀI<br>Câu dẫn nguyên nhân 1:', target: 'One major cause is that [nguyên nhân 1].', vn: 'Một nguyên nhân chính là [nguyên nhân 1].'},
        {cue: '[DÀN Ý 01 - NGUYÊN NHÂN & GIẢI PHÁP]<br>2. THÂN BÀI<br>Câu dẫn nguyên nhân 2:', target: 'Another contributing factor is that [nguyên nhân 2].', vn: 'Một yếu tố góp phần khác là [nguyên nhân 2].'},
        {cue: '[DÀN Ý 01 - NGUYÊN NHÂN & GIẢI PHÁP]<br>2. THÂN BÀI<br>Câu dẫn nguyên nhân 3:', target: 'A further reason is that [nguyên nhân 3].', vn: 'Một lý do nữa là [nguyên nhân 3].'},
        {cue: '[DÀN Ý 01 - NGUYÊN NHÂN & GIẢI PHÁP]<br>2. THÂN BÀI<br>Dẫn dắt Thân bài 2 (Giải pháp):', target: 'To solve this problem, several measures can be taken.', vn: 'Để giải quyết vấn đề này, một vài biện pháp có thể được thực hiện.'},
        {cue: '[DÀN Ý 01 - NGUYÊN NHÂN & GIẢI PHÁP]<br>2. THÂN BÀI<br>Câu dẫn giải pháp 1:', target: 'One effective solution is to [giải pháp 1].', vn: 'Một giải pháp hiệu quả là [giải pháp 1].'},
        {cue: '[DÀN Ý 01 - NGUYÊN NHÂN & GIẢI PHÁP]<br>2. THÂN BÀI<br>Câu dẫn giải pháp 2:', target: 'Another possible measure is to [giải pháp 2].', vn: 'Một biện pháp khả thi khác là [giải pháp 2].'},
        {cue: '[DÀN Ý 01 - NGUYÊN NHÂN & GIẢI PHÁP]<br>2. THÂN BÀI<br>Câu dẫn giải pháp 3:', target: 'Finally, it is important to [giải pháp 3].', vn: 'Cuối cùng, điều quan trọng là phải [giải pháp 3].'},
        {cue: '[DÀN Ý 01 - NGUYÊN NHÂN & GIẢI PHÁP]<br>3. KẾT BÀI<br>Viết câu tóm tắt nguyên nhân và giải pháp:', target: 'In conclusion, [chủ đề] is caused by several factors and requires practical solutions.', vn: 'Tóm lại, [chủ đề] được gây ra bởi một vài yếu tố và đòi hỏi các giải pháp thực tế.'},
        {cue: '[DÀN Ý 01 - NGUYÊN NHÂN & GIẢI PHÁP]<br>3. KẾT BÀI<br>Viết câu khẳng định tính khả thi:', target: 'By addressing the causes and applying suitable measures, this problem can be reduced in the future.', vn: 'Bằng cách giải quyết nguyên nhân và áp dụng các biện pháp phù hợp, vấn đề này có thể được giảm thiểu trong tương lai.'},
        {cue: '[DÀN Ý 01 - NGUYÊN NHÂN & GIẢI PHÁP]<br>3. KẾT BÀI<br>Viết câu chốt lại vấn đề:', target: 'These actions can help create positive changes for both individuals and society.', vn: 'Những hành động này có thể giúp tạo ra những thay đổi tích cực cho cả cá nhân và xã hội.'},
        
        {cue: '[DÀN Ý 02 - NGUYÊN NHÂN & ẢNH HƯỞNG]<br>1. MỞ BÀI<br>Viết câu dẫn dắt chủ đề:', target: 'In recent years, [chủ đề] has become a growing concern in many parts of the world.', vn: 'Trong những năm gần đây, [chủ đề] đã trở thành một mối lo ngại ngày càng tăng ở nhiều nơi trên thế giới.'},
        {cue: '[DÀN Ý 02 - NGUYÊN NHÂN & ẢNH HƯỞNG]<br>1. MỞ BÀI<br>Viết câu nêu mức độ nghiêm trọng:', target: 'This issue affects both individuals and society in different ways.', vn: 'Vấn đề này ảnh hưởng đến cả cá nhân và xã hội theo nhiều cách khác nhau.'},
        {cue: '[DÀN Ý 02 - NGUYÊN NHÂN & ẢNH HƯỞNG]<br>1. MỞ BÀI<br>Viết câu giới thiệu mục đích bài viết:', target: 'This essay will discuss the main causes of this problem and its possible effects.', vn: 'Bài viết này sẽ thảo luận những nguyên nhân chính của vấn đề này và những ảnh hưởng có thể có của nó.'},
        {cue: '[DÀN Ý 02 - NGUYÊN NHÂN & ẢNH HƯỞNG]<br>2. THÂN BÀI<br>Dẫn dắt Thân bài 2 (Ảnh hưởng):', target: 'This problem can lead to several negative effects.', vn: 'Vấn đề này có thể dẫn đến một vài ảnh hưởng tiêu cực.'},
        {cue: '[DÀN Ý 02 - NGUYÊN NHÂN & ẢNH HƯỞNG]<br>2. THÂN BÀI<br>Câu dẫn ảnh hưởng 1:', target: 'One serious impact is that [ảnh hưởng 1].', vn: 'Một tác động nghiêm trọng là [ảnh hưởng 1].'},
        {cue: '[DÀN Ý 02 - NGUYÊN NHÂN & ẢNH HƯỞNG]<br>2. THÂN BÀI<br>Câu dẫn ảnh hưởng 2:', target: 'Another consequence is that [ảnh hưởng 2].', vn: 'Một hậu quả khác là [ảnh hưởng 2].'},
        {cue: '[DÀN Ý 02 - NGUYÊN NHÂN & ẢNH HƯỞNG]<br>2. THÂN BÀI<br>Câu dẫn ảnh hưởng 3:', target: 'A further problem is that [ảnh hưởng 3].', vn: 'Một vấn đề nữa là [ảnh hưởng 3].'},
        {cue: '[DÀN Ý 02 - NGUYÊN NHÂN & ẢNH HƯỞNG]<br>3. KẾT BÀI<br>Viết câu tóm tắt nguyên nhân và ảnh hưởng:', target: 'In conclusion, [chủ đề] is caused by several factors and can lead to many negative effects.', vn: 'Tóm lại, [chủ đề] được gây ra bởi một vài yếu tố và có thể dẫn đến nhiều ảnh hưởng tiêu cực.'},
        {cue: '[DÀN Ý 02 - NGUYÊN NHÂN & ẢNH HƯỞNG]<br>3. KẾT BÀI<br>Viết câu đề xuất hướng cải thiện:', target: 'By understanding the causes and paying more attention to this issue, the situation can be improved in the future.', vn: 'Bằng cách thấu hiểu nguyên nhân và quan tâm hơn đến vấn đề này, tình hình có thể được cải thiện trong tương lai.'},
        {cue: '[DÀN Ý 02 - NGUYÊN NHÂN & ẢNH HƯỞNG]<br>3. KẾT BÀI<br>Viết câu chốt lại vấn đề:', target: 'These actions can help create a better environment for both individuals and society.', vn: 'Những hành động này có thể giúp tạo ra một môi trường tốt hơn cho cả cá nhân và xã hội.'},
        
        {cue: '[DÀN Ý 03 - ẢNH HƯỞNG & GIẢI PHÁP]<br>1. MỞ BÀI<br>Viết câu dẫn dắt chủ đề:', target: 'In recent years, [chủ đề] has become a growing concern in many parts of the world.', vn: 'Trong những năm gần đây, [chủ đề] đã trở thành một mối lo ngại ngày càng tăng ở nhiều nơi trên thế giới.'},
        {cue: '[DÀN Ý 03 - ẢNH HƯỞNG & GIẢI PHÁP]<br>1. MỞ BÀI<br>Viết câu nêu mức độ nghiêm trọng:', target: 'This issue affects both individuals and society in different ways.', vn: 'Vấn đề này ảnh hưởng đến cả cá nhân và xã hội theo nhiều cách khác nhau.'},
        {cue: '[DÀN Ý 03 - ẢNH HƯỞNG & GIẢI PHÁP]<br>1. MỞ BÀI<br>Viết câu giới thiệu mục đích bài viết:', target: 'This essay will discuss the main effects of this problem and suggest possible solutions.', vn: 'Bài viết này sẽ thảo luận những ảnh hưởng chính của vấn đề này và đề xuất các giải pháp khả thi.'},
        {cue: '[DÀN Ý 03 - ẢNH HƯỞNG & GIẢI PHÁP]<br>3. KẾT BÀI<br>Viết câu tóm tắt ảnh hưởng và giải pháp:', target: 'In conclusion, [chủ đề] leads to several negative effects and requires practical solutions.', vn: 'Tóm lại, [chủ đề] dẫn đến một vài ảnh hưởng tiêu cực và đòi hỏi các giải pháp thực tế.'},
        {cue: '[DÀN Ý 03 - ẢNH HƯỞNG & GIẢI PHÁP]<br>3. KẾT BÀI<br>Viết câu đề xuất hướng cải thiện:', target: 'By applying suitable measures and paying more attention to this issue, the situation can be improved in the future.', vn: 'Bằng cách áp dụng các biện pháp phù hợp và quan tâm hơn đến vấn đề này, tình hình có thể được cải thiện trong tương lai.'},
        {cue: '[DÀN Ý 03 - ẢNH HƯỞNG & GIẢI PHÁP]<br>3. KẾT BÀI<br>Viết câu chốt lại vấn đề:', target: 'These actions can help create positive changes for both individuals and society.', vn: 'Những hành động này có thể giúp tạo ra những thay đổi tích cực cho cả cá nhân và xã hội.'},
        
        {cue: '1. MỞ BÀI<br>(DÀN Ý 4: Chỉ Nguyên Nhân) Viết câu dẫn dắt chủ đề:', target: 'In recent years, [chủ đề] has become a growing concern in many parts of the world.', vn: 'Trong những năm gần đây, [chủ đề] đã trở thành một mối lo ngại ngày càng tăng ở nhiều nơi trên thế giới.'},
        {cue: '1. MỞ BÀI<br>(DÀN Ý 4: Chỉ Nguyên Nhân) Viết câu nêu mức độ nghiêm trọng:', target: 'This issue affects both individuals and society in different ways.', vn: 'Vấn đề này ảnh hưởng đến cả cá nhân và xã hội theo nhiều cách khác nhau.'},
        {cue: '1. MỞ BÀI<br>(DÀN Ý 4: Chỉ Nguyên Nhân) Viết câu giới thiệu mục đích bài viết:', target: 'This essay will discuss the main causes of this problem.', vn: 'Bài viết này sẽ thảo luận những nguyên nhân chính của vấn đề này.'},
        {cue: '3. KẾT BÀI<br>(DÀN Ý 4: Chỉ Nguyên Nhân) Viết câu tóm tắt nguyên nhân:', target: 'In conclusion, [chủ đề] is caused by several factors that affect both individuals and society.', vn: 'Tóm lại, [chủ đề] được gây ra bởi một vài yếu tố có ảnh hưởng đến cả cá nhân và xã hội.'},
        {cue: '1. MỞ BÀI<br>(DÀN Ý 4: Chỉ Nguyên Nhân) Viết câu khẳng định tầm quan trọng:', target: 'Understanding these causes is important to improve the situation in the future.', vn: 'Việc thấu hiểu những nguyên nhân này là quan trọng để cải thiện tình hình trong tương lai.'},
        {cue: '3. KẾT BÀI<br>(DÀN Ý 4: Chỉ Nguyên Nhân) Viết câu chốt lại vấn đề:', target: 'With greater attention, this problem can be reduced over time.', vn: 'Với sự quan tâm lớn hơn, vấn đề này có thể được giảm thiểu theo thời gian.'},
        
        {cue: '1. MỞ BÀI<br>(DÀN Ý 5: Chỉ Ảnh Hưởng) Viết câu dẫn dắt chủ đề:', target: 'In recent years, [chủ đề] has become a growing concern in many parts of the world.', vn: 'Trong những năm gần đây, [chủ đề] đã trở thành một mối lo ngại ngày càng tăng ở nhiều nơi trên thế giới.'},
        {cue: '1. MỞ BÀI<br>(DÀN Ý 5: Chỉ Ảnh Hưởng) Viết câu nêu mức độ nghiêm trọng:', target: 'This issue affects both individuals and society in different ways.', vn: 'Vấn đề này ảnh hưởng đến cả cá nhân và xã hội theo nhiều cách khác nhau.'},
        {cue: '1. MỞ BÀI<br>(DÀN Ý 5: Chỉ Ảnh Hưởng) Viết câu giới thiệu mục đích bài viết:', target: 'This essay will discuss the main effects of this problem.', vn: 'Bài viết này sẽ thảo luận những ảnh hưởng chính của vấn đề này.'},
        {cue: '2. THÂN BÀI<br>(DÀN Ý 5: Chỉ Ảnh Hưởng) Thân bài 3 - Ảnh hưởng 3:', target: 'A further consequence is that [ảnh hưởng 3].', vn: 'Một hậu quả nữa là [ảnh hưởng 3].'},
        {cue: '3. KẾT BÀI<br>(DÀN Ý 5: Chỉ Ảnh Hưởng) Viết câu tóm tắt ảnh hưởng:', target: 'In conclusion, [chủ đề] leads to several negative effects on both individuals and society.', vn: 'Tóm lại, [chủ đề] dẫn đến một vài ảnh hưởng tiêu cực lên cả cá nhân và xã hội.'},
        {cue: '1. MỞ BÀI<br>(DÀN Ý 5: Chỉ Ảnh Hưởng) Viết câu khẳng định mức độ tác động:', target: 'These impacts can affect many areas of life in different ways.', vn: 'Những tác động này có thể ảnh hưởng đến nhiều lĩnh vực của đời sống theo những cách khác nhau.'},
        {cue: '3. KẾT BÀI<br>(DÀN Ý 5: Chỉ Ảnh Hưởng) Viết câu chốt lại lời khuyên:', target: 'Therefore, it is important to pay more attention to this issue in the future.', vn: 'Vì vậy, việc quan tâm nhiều hơn đến vấn đề này trong tương lai là điều quan trọng.'},
        
        {cue: '1. MỞ BÀI<br>(DÀN Ý 6: Chỉ Giải Pháp) Viết câu dẫn dắt chủ đề:', target: 'In recent years, [chủ đề] has become increasingly important in modern society.', vn: 'Trong những năm gần đây, [chủ đề] đã trở nên ngày càng quan trọng trong xã hội hiện đại.'},
        {cue: '1. MỞ BÀI<br>(DÀN Ý 6: Chỉ Giải Pháp) Viết câu nêu tính cấp thiết:', target: 'Many people believe that more effective actions are needed in this area.', vn: 'Nhiều người tin rằng cần có những hành động hiệu quả hơn trong lĩnh vực này.'},
        {cue: '1. MỞ BÀI<br>(DÀN Ý 6: Chỉ Giải Pháp) Viết câu giới thiệu mục đích bài viết:', target: 'This essay will suggest several practical measures to improve the situation.', vn: 'Bài viết này sẽ đề xuất một vài biện pháp thực tế để cải thiện tình hình.'},
        {cue: '2. THÂN BÀI<br>(DÀN Ý 6: Chỉ Giải Pháp) Thân bài 1 - Giải pháp 1:', target: 'One effective solution is to [giải pháp 1].', vn: 'Một giải pháp hiệu quả là [giải pháp 1].'},
        {cue: '2. THÂN BÀI<br>(DÀN Ý 6: Chỉ Giải Pháp) Thân bài 2 - Giải pháp 2:', target: 'Another possible measure is to [giải pháp 2].', vn: 'Một biện pháp khả thi khác là [giải pháp 2].'},
        {cue: '2. THÂN BÀI<br>(DÀN Ý 6: Chỉ Giải Pháp) Thân bài 3 - Giải pháp 3:', target: 'A further approach is to [giải pháp 3].', vn: 'Một hướng tiếp cận nữa là [giải pháp 3].'},
        {cue: '3. KẾT BÀI<br>(DÀN Ý 6: Chỉ Giải Pháp) Viết câu tóm tắt giải pháp:', target: 'In conclusion, several practical measures can help improve this situation effectively.', vn: 'Tóm lại, một vài biện pháp thực tế có thể giúp cải thiện tình hình này một cách hiệu quả.'},
        {cue: '3. KẾT BÀI<br>(DÀN Ý 6: Chỉ Giải Pháp) Viết câu dự báo kết quả:', target: 'These solutions can bring positive changes for both individuals and society.', vn: 'Những giải pháp này có thể mang lại thay đổi tích cực cho cả cá nhân và xã hội.'},
        {cue: '3. KẾT BÀI<br>(DÀN Ý 6: Chỉ Giải Pháp) Viết câu chốt lại lời khuyên:', target: 'Therefore, it is important to take suitable actions in the future.', vn: 'Vì vậy, việc đưa ra các hành động phù hợp trong tương lai là điều quan trọng.'}
    ],
    'opinion': [
        {cue: '1. MỞ BÀI<br>Viết câu mở bài cho dạng Opinion:', target: 'In recent years, the idea that [quan điểm trong đề bài – mệnh đề] has become a common topic of discussion.', vn: 'Trong những năm gần đây, ý kiến cho rằng [quan điểm trong đề bài – mệnh đề] đã trở thành một chủ đề thảo luận phổ biến.'},
        {cue: '1. MỞ BÀI<br>Viết câu thể hiện quan điểm cá nhân (Đồng ý / Không đồng ý):', target: 'From my perspective, I completely agree / disagree with this opinion for several important reasons.', vn: 'Theo quan điểm của tôi, tôi hoàn toàn đồng ý / không đồng ý với ý kiến này vì một vài lý do quan trọng.'},
        {cue: '1. MỞ BÀI<br>Viết câu kết nối dẫn dắt vào Thân bài:', target: 'This essay will present the main arguments supporting my viewpoint.', vn: 'Bài viết này sẽ trình bày những lập luận chính ủng hộ quan điểm của tôi.'},
        {cue: '2. THÂN BÀI<br>Viết câu dẫn lý do 1:', target: 'The first reason why I agree / disagree with this opinion is that [lý do 1 – mệnh đề].', vn: 'Lý do đầu tiên khiến tôi đồng ý / không đồng ý với ý kiến này là [lý do 1 – mệnh đề].'},
        {cue: '2. THÂN BÀI<br>Viết câu dẫn lý do 2:', target: 'Another important reason is that [lý do 2 – mệnh đề].', vn: 'Một lý do quan trọng khác là [lý do 2 – mệnh đề].'},
        {cue: '2. THÂN BÀI<br>Viết câu dẫn lý do 3:', target: 'A further reason supporting my viewpoint is that [lý do 3 – mệnh đề].', vn: 'Một lý do nữa ủng hộ quan điểm của tôi là [lý do 3 – mệnh đề].'},
        {cue: '3. KẾT BÀI<br>Viết câu Kết bài khẳng định lại quan điểm:', target: 'In conclusion, I strongly agree / disagree with the idea that [quan điểm trong đề bài – mệnh đề].', vn: 'Tóm lại, tôi mạnh mẽ đồng ý / không đồng ý với ý kiến cho rằng [quan điểm trong đề bài – mệnh đề].'},
        {cue: '2. THÂN BÀI<br>Viết câu kết luận cuối cùng:', target: 'The reasons above clearly explain why I support / oppose this viewpoint.', vn: 'Những lý do trên giải thích rõ ràng tại sao tôi ủng hộ / phản đối quan điểm này.'}
    ],
    'discussion': [
        {cue: '1. MỞ BÀI<br>Viết câu mở bài cho dạng Discussion:', target: 'In recent years, [chủ đề] has become a common topic of discussion.', vn: 'Trong những năm gần đây, [chủ đề] đã trở thành một chủ đề thảo luận phổ biến.'},
        {cue: '2. THÂN BÀI<br>Viết câu trình bày 2 luồng quan điểm:', target: 'Some people believe that [ý kiến 1 – mệnh đề], while others argue that [ý kiến 2 – mệnh đề].', vn: 'Một số người tin rằng [ý kiến 1 – mệnh đề], trong khi những người khác cho rằng [ý kiến 2 – mệnh đề].'},
        {cue: '2. THÂN BÀI<br>Viết câu kết nối dẫn dắt vào Thân bài (kèm quan điểm cá nhân):', target: 'This essay will discuss both views and give my own opinion.', vn: 'Bài viết này sẽ thảo luận cả hai quan điểm và đưa ra ý kiến của riêng tôi.'},
        {cue: '2. THÂN BÀI<br>Viết câu mở đầu Thân bài 1 (Ý kiến 1):', target: 'On the one hand, it is argued that [ý kiến 1 – mệnh đề].', vn: 'Một mặt, người ta lập luận rằng [ý kiến 1 – mệnh đề].'},
        {cue: '2. THÂN BÀI<br>Viết câu mở đầu Thân bài 2 (Ý kiến 2):', target: 'On the other hand, it is believed that [ý kiến 2 – mệnh đề].', vn: 'Mặt khác, người ta tin rằng [ý kiến 2 – mệnh đề].'},
        {cue: '3. KẾT BÀI<br>Viết câu Kết bài tóm tắt:', target: 'In conclusion, both views have their own reasons.', vn: 'Tóm lại, cả hai quan điểm đều có những lý do riêng.'},
        {cue: '3. KẾT BÀI<br>Viết câu Kết bài nêu quan điểm cá nhân:', target: 'However, I believe that [quan điểm cá nhân – mệnh đề] because [lý do ngắn gọn – mệnh đề].', vn: 'Tuy nhiên, tôi tin rằng [quan điểm cá nhân – mệnh đề] bởi vì [lý do ngắn gọn – mệnh đề].'}
    ]
};

// DOM Elements
let essayNav;
let mainTitle;
let welcomeScreen;
let essayContent;
let themeToggle;
let isDarkMode = false;

// Recitation DOM Elements
let recitationInput;
let btnPrevQuestion;
let btnShowHint;
let btnCheckAnswer;
let btnNextQuestion;
let currentQuestionNum;
let totalQuestionsNum;
let progressBarFill;
let questionCueText;
let recitationFeedback;
let feedbackStatus;
let userDiffResult;
let correctTextResult;

// Evaluation DOM Elements
let recitationQuizBox;
let recitationResultBox;
let scorePercentageVal;
let resultStatusVal;
let resultMessageVal;
let btnRestartRecitation;
let evaluationIcon;

// Recitation State
let activeEssayTypeId = 'adv-disadv';
let currentQuestionIndex = 0;
let activeQuestions = [];
let questionScores = [];

// Word-by-word diff algorithm using LCS
function diffWords(userText, targetText) {
    const preProcess = (t) => t
        .replace(/…/g, '...')
        .replace(/\.\s*\.\s*\./g, '...')
        .replace(/[’‘]/g, "'")
        .replace(/[“”]/g, '"')
        .replace(/\s*[-\u2010\u2011\u2013\u2014\u2212]+\s*/g, ' - ');
        
    const clean = (w) => w.toLowerCase().trim();
    
    const uWords = preProcess(userText).trim().split(/\s+/).filter(w => w !== "");
    const tWords = preProcess(targetText).trim().split(/\s+/).filter(w => w !== "");
    
    const n = uWords.length;
    const m = tWords.length;
    const dp = Array(n + 1).fill(null).map(() => Array(m + 1).fill(0));
    
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (clean(uWords[i - 1]) === clean(tWords[j - 1])) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    
    let i = n, j = m;
    const diff = [];
    
    while (i > 0 || j > 0) {
        if (i > 0 && j > 0 && clean(uWords[i - 1]) === clean(tWords[j - 1])) {
            diff.unshift({ word: uWords[i - 1], type: 'match' });
            i--;
            j--;
        } else if (j > 0 && (i === 0 || dp[i][j - 1] >= dp[i - 1][j])) {
            diff.unshift({ word: tWords[j - 1], type: 'missing' });
            j--;
        } else {
            diff.unshift({ word: uWords[i - 1], type: 'extra' });
            i--;
        }
    }
    
    let matchCount = diff.filter(d => d.type === 'match').length;
    let maxWords = Math.max(tWords.length, uWords.length);
    let accuracy = maxWords > 0 ? Math.round((matchCount / maxWords) * 100) : 0;
    
    return {
        diff,
        accuracy,
        isPerfect: matchCount === tWords.length && uWords.length === tWords.length
    };
}

// Progress Tracking Helpers
function getCompletedEssays() {
    try {
        const completed = localStorage.getItem('vstep_completed_essays');
        return completed ? JSON.parse(completed) : [];
    } catch (e) {
        return [];
    }
}

function markEssayCompleted(id) {
    if (!id) return;
    let completed = getCompletedEssays();
    if (!completed.includes(id)) {
        completed.push(id);
        try {
            localStorage.setItem('vstep_completed_essays', JSON.stringify(completed));
        } catch (e) {
            console.error('Failed to write to localStorage:', e);
        }
    }
    updateGlobalProgress();
    renderNav();
}

function updateGlobalProgress() {
    const completed = getCompletedEssays();
    const total = 4;
    const count = completed.length;
    const percent = Math.round((count / total) * 100);

    // Update Sidebar progress
    const sidebarText = document.getElementById('sidebarProgressText');
    const sidebarFill = document.getElementById('sidebarProgressFill');
    if (sidebarText) sidebarText.textContent = `${count}/${total} ĐẠT`;
    if (sidebarFill) sidebarFill.style.width = `${percent}%`;

    // Update Dashboard progress
    const dashPercent = document.getElementById('dashboardProgressPercent');
    const dashFill = document.getElementById('dashboardProgressFill');
    const dashStatus = document.getElementById('dashboardProgressStatus');

    if (dashPercent) dashPercent.textContent = `${percent}%`;
    if (dashFill) dashFill.style.width = `${percent}%`;

    if (dashStatus) {
        if (count === 0) {
            dashStatus.textContent = "Chưa hoàn thành dạng bài nào. Hãy bắt đầu học tập!";
        } else if (count === total) {
            dashStatus.textContent = "🎉 TUYỆT VỜI! Bạn đã xuất sắc chinh phục tất cả 4 dạng luận VSTEP Writing Task 02!";
        } else {
            dashStatus.textContent = `Đã chinh phục ${count}/${total} dạng bài. Hãy tiếp tục nhiệm vụ tiếp theo!`;
        }
    }
}

function resetLearningProgress() {
    if (confirm('Bạn có chắc chắn muốn làm mới toàn bộ tiến độ học tập và các dạng bài đã đạt không?')) {
        try {
            localStorage.removeItem('vstep_completed_essays');
        } catch (e) {
            console.error('Failed to clear localStorage:', e);
        }
        updateGlobalProgress();
        renderNav();
        alert('Đã làm mới tiến độ học tập thành công!');
    }
}

// Save current recitation progress
function saveCurrentRecitationProgress() {
    if (!activeEssayTypeId) return;
    try {
        localStorage.setItem('vstep_recitation_' + activeEssayTypeId, JSON.stringify({
            currentQuestionIndex,
            questionScores
        }));
    } catch (e) {}
}

// Reset Recitation State and UI
function resetRecitationUI(isRestart = false) {
    if (isRestart === true && activeEssayTypeId) {
        try { localStorage.removeItem('vstep_recitation_' + activeEssayTypeId); } catch (e) {}
    }

    activeQuestions = recitationQuestions[activeEssayTypeId] || [];
    let savedProgress = null;
    try {
        const data = localStorage.getItem('vstep_recitation_' + activeEssayTypeId);
        if (data) savedProgress = JSON.parse(data);
    } catch (e) {}

    if (savedProgress && savedProgress.questionScores && savedProgress.questionScores.length === activeQuestions.length) {
        currentQuestionIndex = savedProgress.currentQuestionIndex || 0;
        questionScores = savedProgress.questionScores;
    } else {
        currentQuestionIndex = 0;
        questionScores = Array(activeQuestions.length).fill(0);
    }
    
    if (recitationInput) recitationInput.value = '';
    if (recitationFeedback) recitationFeedback.classList.add('hidden');
    if (btnNextQuestion) btnNextQuestion.classList.add('hidden');
    if (btnCheckAnswer) btnCheckAnswer.classList.remove('hidden');
    
    if (totalQuestionsNum) totalQuestionsNum.textContent = activeQuestions.length;
    
    // Toggle containers
    if (recitationResultBox) recitationResultBox.classList.add('hidden');
    if (recitationQuizBox) recitationQuizBox.classList.remove('hidden');
    
    const hintBox = document.getElementById('recitationHintBox');
    if (hintBox) hintBox.classList.add('hidden');
    
    // Restore header and progress bar wrapper visibility
    const recitationHeader = document.querySelector('.recitation-header');
    if (recitationHeader) recitationHeader.classList.remove('hidden');
    
    const progressWrapper = document.querySelector('.recitation-progress-wrapper');
    if (progressWrapper) progressWrapper.style.display = '';
    
    showRecitationQuestion();
}

// Show the current question
function showRecitationQuestion() {
    if (activeQuestions.length === 0) return;
    
    const q = activeQuestions[currentQuestionIndex];
    if (questionCueText) {
        let parts = q.cue.split('<br>');
        if (parts.length === 3) {
            questionCueText.innerHTML = `<span class="cue-part-1">${parts[0]}</span><br><span class="cue-part-2">${parts[1]}</span><br><span class="cue-part-3">${parts[2]}</span>`;
        } else if (parts.length === 2) {
            questionCueText.innerHTML = `<span class="cue-part-1">${parts[0]}</span><br><span class="cue-part-3">${parts[1]}</span>`;
        } else {
            questionCueText.innerHTML = q.cue;
        }
    }
    
    const questionHintVn = document.getElementById('questionHintVn');
    if (questionHintVn) {
        if (q.vn) {
            questionHintVn.textContent = 'Gợi ý: ' + q.vn;
            questionHintVn.style.display = 'block';
        } else {
            questionHintVn.style.display = 'none';
        }
    }
    if (currentQuestionNum) currentQuestionNum.textContent = currentQuestionIndex + 1;
    
    // Update progress bar
    if (progressBarFill) {
        const percent = ((currentQuestionIndex + 1) / activeQuestions.length) * 100;
        progressBarFill.style.width = `${percent}%`;
    }
    
    // Reset inputs & feedback for this question
    if (recitationInput) recitationInput.value = '';
    if (recitationFeedback) recitationFeedback.classList.add('hidden');
    
    const hintBox = document.getElementById('recitationHintBox');
    if (hintBox) hintBox.classList.add('hidden');
    
    // Manage buttons visibility
    if (btnCheckAnswer) btnCheckAnswer.classList.remove('hidden');
    if (btnNextQuestion) btnNextQuestion.classList.add('hidden');
    
    // Disable/enable Prev button
    if (btnPrevQuestion) {
        if (currentQuestionIndex === 0) {
            btnPrevQuestion.disabled = true;
            btnPrevQuestion.style.opacity = '0.5';
            btnPrevQuestion.style.cursor = 'not-allowed';
        } else {
            btnPrevQuestion.disabled = false;
            btnPrevQuestion.style.opacity = '1';
            btnPrevQuestion.style.cursor = 'pointer';
        }
    }
}

// Check recitation answer
function checkRecitationAnswer() {
    if (activeQuestions.length === 0) return;
    const q = activeQuestions[currentQuestionIndex];
    const userAns = recitationInput ? recitationInput.value.trim() : '';
    
    if (userAns === '') {
        alert('Vui lòng nhập câu trả lời của bạn trước khi kiểm tra!');
        return;
    }
    
    const diffResult = diffWords(userAns, q.target);
    
    // Track score
    questionScores[currentQuestionIndex] = diffResult.accuracy;
    saveCurrentRecitationProgress();
    
    if (recitationFeedback) recitationFeedback.classList.remove('hidden');
    
    // Build user diff display
    if (userDiffResult) {
        userDiffResult.innerHTML = '';
        diffResult.diff.forEach(d => {
            if (d.type === 'match') {
                const span = document.createElement('span');
                span.className = 'diff-word-match';
                span.textContent = d.word + ' ';
                userDiffResult.appendChild(span);
            } else if (d.type === 'extra') {
                const span = document.createElement('span');
                span.className = 'diff-word-extra';
                span.textContent = d.word + ' ';
                userDiffResult.appendChild(span);
            }
        });
        if (userDiffResult.innerHTML === '') {
            userDiffResult.innerHTML = '<em>(Bỏ trống)</em>';
        }
    }
    
    // Build correct text display
    if (correctTextResult) {
        correctTextResult.innerHTML = '';
        diffResult.diff.forEach(d => {
            if (d.type === 'match') {
                const span = document.createElement('span');
                span.className = 'diff-word-match';
                span.textContent = d.word + ' ';
                correctTextResult.appendChild(span);
            } else if (d.type === 'missing') {
                const span = document.createElement('span');
                span.className = 'diff-word-mismatch';
                span.textContent = d.word + ' ';
                correctTextResult.appendChild(span);
            }
        });
    }
    
    // Update status banner
    if (feedbackStatus) {
        feedbackStatus.className = 'feedback-status';
        if (diffResult.isPerfect) {
            feedbackStatus.classList.add('status-success');
            feedbackStatus.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>Chính xác tuyệt đối! (Độ chính xác: 100%)</span>`;
        } else {
            feedbackStatus.classList.add('status-error');
            feedbackStatus.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> <span>Chưa chính xác! Độ chính xác: ${diffResult.accuracy}%. Xem phần so sánh bên dưới.</span>`;
        }
    }
    
    // Manage Next/Finish button
    if (btnNextQuestion) {
        btnNextQuestion.classList.remove('hidden');
        if (currentQuestionIndex === activeQuestions.length - 1) {
            btnNextQuestion.innerHTML = `Hoàn thành & Đánh giá <i class="fa-solid fa-chart-simple"></i>`;
            btnNextQuestion.className = 'btn btn-primary';
        } else {
            btnNextQuestion.innerHTML = `Câu tiếp theo <i class="fa-solid fa-chevron-right"></i>`;
            btnNextQuestion.className = 'btn btn-success';
        }
    }
}

// Show hint instead of full answer
function showRecitationHint() {
    if (activeQuestions.length === 0) return;
    const q = activeQuestions[currentQuestionIndex];
    
    const hintBox = document.getElementById('recitationHintBox');
    const hintText = document.getElementById('recitationHintText');
    
    if (hintBox && hintText) {
        hintBox.classList.remove('hidden');
        
        // Generate hint: Keep first 4 words, then just first letter of each subsequent word
        const words = q.target.split(' ');
        if (words.length <= 4) {
            hintText.textContent = words[0] + ' ...';
        } else {
            let hint = words.slice(0, 4).join(' ') + ' ';
            for (let i = 4; i < words.length; i++) {
                let word = words[i];
                if (word.startsWith('[')) {
                    hint += word + ' ';
                } else {
                    let firstLetter = word.charAt(0);
                    let rest = word.slice(1).replace(/[a-zA-ZÀ-ỹ]/g, '_');
                    hint += firstLetter + rest + ' ';
                }
            }
            hintText.textContent = hint.trim();
        }
    }
}


// Next recitation question
function nextRecitationQuestion() {
    if (currentQuestionIndex < activeQuestions.length - 1) {
        currentQuestionIndex++;
        saveCurrentRecitationProgress();
        showRecitationQuestion();
    } else {
        showEvaluationResult();
    }
}

// Show evaluation result screen
function showEvaluationResult() {
    // Hide quiz box and feedback panel
    if (recitationQuizBox) recitationQuizBox.classList.add('hidden');
    if (recitationFeedback) recitationFeedback.classList.add('hidden');
    
    // Hide header and progress bar wrapper during evaluation results
    const recitationHeader = document.querySelector('.recitation-header');
    if (recitationHeader) recitationHeader.classList.add('hidden');
    
    const progressWrapper = document.querySelector('.recitation-progress-wrapper');
    if (progressWrapper) progressWrapper.style.display = 'none';
    
    // Calculate average score
    const totalQuestions = activeQuestions.length;
    const totalScore = questionScores.reduce((sum, s) => sum + s, 0);
    const averageScore = totalQuestions > 0 ? Math.round(totalScore / totalQuestions) : 0;
    
    // Update score text
    if (scorePercentageVal) scorePercentageVal.textContent = averageScore;
    
    // Get active essay type data for dynamic title
    const typeData = essayTypes.find(t => t.id === activeEssayTypeId);
    const essayTitleEn = typeData ? typeData.titleEn : 'This Essay Type';
    
    const evalCard = document.querySelector('.evaluation-card');
    
    if (averageScore >= 90) {
        // Passed state
        if (resultStatusVal) {
            resultStatusVal.textContent = 'ĐẠT';
        }
        if (resultMessageVal) {
            resultMessageVal.textContent = `Chúc mừng bạn đã chinh phục được ${essayTitleEn}. Nhiệm vụ đã được hoàn thành, hãy tiếp tục với phần tiếp theo.`;
        }
        if (evaluationIcon) {
            evaluationIcon.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        }
        if (evalCard) {
            evalCard.classList.remove('failed');
            evalCard.classList.add('passed');
        }
        markEssayCompleted(activeEssayTypeId);
    } else {
        // Failed state
        if (resultStatusVal) {
            resultStatusVal.textContent = 'KHÔNG ĐẠT';
        }
        if (resultMessageVal) {
            resultMessageVal.textContent = 'Xin vui lòng ôn lại bài thật kỹ và trả bài lại một lần nữa.';
        }
        if (evaluationIcon) {
            evaluationIcon.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i>';
        }
        if (evalCard) {
            evalCard.classList.remove('passed');
            evalCard.classList.add('failed');
        }
    }
    
    // Show result box
    if (recitationResultBox) recitationResultBox.classList.remove('hidden');
}

// Prev recitation question
function prevRecitationQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        saveCurrentRecitationProgress();
        showRecitationQuestion();
    }
}

// Show Welcome Screen
function showWelcomeScreen() {
    activeEssayTypeId = null;
    
    // Update active nav
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    const homeItem = document.querySelector('.home-nav-item');
    if (homeItem) homeItem.classList.add('active');

    // Show welcome, hide content
    if (welcomeScreen) welcomeScreen.style.display = 'flex';
    if (essayContent) essayContent.classList.add('hidden');

    // Reset Title
    if (mainTitle) {
        mainTitle.innerHTML = `
            <div class="main-title-en placeholder-blink">Chọn một dạng bài để bắt đầu NHIỆM VỤ HỆ THỐNG của bạn!</div>
        `;
    }
}

// Render Navigation
function renderNav() {
    if (!essayNav) return;
    essayNav.innerHTML = ''; // Clear existing
    
    // Add Home button first
    const homeItem = document.createElement('div');
    homeItem.className = 'nav-item home-nav-item active';
    homeItem.innerHTML = `
        <i class="fa-solid fa-house"></i>
        <div class="nav-text">
            <div class="nav-title-en" style="font-weight: bold;">TRANG CHỦ</div>
            <div class="nav-title-vi">Màn hình khởi đầu</div>
        </div>
    `;
    homeItem.addEventListener('click', showWelcomeScreen);
    essayNav.appendChild(homeItem);

    const completed = getCompletedEssays();

    essayTypes.forEach(type => {
        const isCompleted = completed.includes(type.id);
        const navItem = document.createElement('div');
        navItem.className = 'nav-item';
        navItem.dataset.id = type.id;
        navItem.innerHTML = `
            <i class="fa-solid ${type.icon}"></i>
            <div class="nav-text">
                <div class="nav-title-en">${type.titleEn}</div>
                <div class="nav-title-vi">${type.titleVi}</div>
            </div>
            ${isCompleted ? '<span class="nav-completed-badge" title="Đã chinh phục"><i class="fa-solid fa-circle-check"></i></span>' : ''}
        `;
        
        navItem.addEventListener('click', () => selectEssayType(type.id));
        essayNav.appendChild(navItem);
    });
}


// Select an Essay Type
function selectEssayType(id) {
    activeEssayTypeId = id;
    
    // Update active nav
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.id === id) item.classList.add('active');
    });

    const typeData = essayTypes.find(t => t.id === id);
    if (!typeData) return;

    // Hide welcome, show content
    if (welcomeScreen) welcomeScreen.style.display = 'none';
    if (essayContent) essayContent.classList.remove('hidden');

    // Set Title
    if (mainTitle) {
        mainTitle.innerHTML = `
            <div class="main-title-en">${typeData.titleEn}</div>
            <div class="main-title-vi">${typeData.titleVi}</div>
        `;
    }

    // Populate Content
    const basicInfoPanel = document.getElementById('basicInfoPanel');
    const identifyingSignsPanel = document.getElementById('identifyingSignsPanel');
    const detailedOutlinePanel = document.getElementById('detailedOutlinePanel');
    const sampleWritingPanel = document.getElementById('sampleWritingPanel');

    if (basicInfoPanel) basicInfoPanel.innerHTML = typeData.basicInfo;
    if (identifyingSignsPanel) identifyingSignsPanel.innerHTML = typeData.identifyingSigns;
    if (detailedOutlinePanel) {
        detailedOutlinePanel.innerHTML = typeData.detailedOutline.replace(/\[([^\]]+)\]/g, '[<strong>$1</strong>]');
    }
    if (sampleWritingPanel) sampleWritingPanel.innerHTML = typeData.sampleWriting;

    // Reset recitation for this type
    resetRecitationUI();

    // Reset tabs to first tab
    const firstTab = document.querySelector('.tab-btn[data-tab="basicInfo"]');
    if (firstTab) firstTab.click();
}

// Initialize application on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    // Query DOM Elements
    essayNav = document.getElementById('essayNav');
    mainTitle = document.getElementById('mainTitle');
    welcomeScreen = document.getElementById('welcomeScreen');
    essayContent = document.getElementById('essayContent');
    themeToggle = document.getElementById('themeToggle');

    // Query Recitation Elements
    recitationInput = document.getElementById('recitationInput');
    btnPrevQuestion = document.getElementById('btnPrevQuestion');
    btnShowHint = document.getElementById('btnShowHint');
    btnCheckAnswer = document.getElementById('btnCheckAnswer');
    btnNextQuestion = document.getElementById('btnNextQuestion');
    currentQuestionNum = document.getElementById('currentQuestionNum');
    totalQuestionsNum = document.getElementById('totalQuestionsNum');
    progressBarFill = document.getElementById('progressBarFill');
    questionCueText = document.getElementById('questionCueText');
    recitationFeedback = document.getElementById('recitationFeedback');
    feedbackStatus = document.getElementById('feedbackStatus');
    userDiffResult = document.getElementById('userDiffResult');
    correctTextResult = document.getElementById('correctTextResult');

    // Query Evaluation Elements
    recitationQuizBox = document.getElementById('recitationQuizBox');
    recitationResultBox = document.getElementById('recitationResultBox');
    scorePercentageVal = document.getElementById('scorePercentageVal');
    resultStatusVal = document.getElementById('resultStatusVal');
    resultMessageVal = document.getElementById('resultMessageVal');
    btnRestartRecitation = document.getElementById('btnRestartRecitation');
    evaluationIcon = document.getElementById('evaluationIcon');

    // --- Login Logic ---
    const loginOverlay = document.getElementById('loginOverlay');
    const loginBtn = document.getElementById('loginBtn');
    const loginFullName = document.getElementById('loginFullName');
    const loginClass = document.getElementById('loginClass');
    const loginError = document.getElementById('loginError');

    const allowedClasses = ['CB196', 'CB201', 'CB202', 'B209'];

    const loggedInUser = localStorage.getItem('vstep_student_info');
    if (loggedInUser) {
        loginOverlay.classList.add('hidden');
    } else {
        loginOverlay.classList.remove('hidden');
    }

    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            const fullName = loginFullName.value.trim();
            const className = loginClass.value.trim().toUpperCase();

            if (!fullName) {
                loginError.textContent = 'Vui lòng nhập Họ và tên.';
                return;
            }

            if (!className) {
                loginError.textContent = 'Vui lòng nhập Lớp học.';
                return;
            }

            if (!allowedClasses.includes(className)) {
                loginError.textContent = 'Lớp học không hợp lệ. Chỉ nhận CB196, CB201, CB202, B209.';
                return;
            }

            loginError.textContent = '';
            loginBtn.textContent = 'ĐANG VÀO LỚP...';
            loginBtn.disabled = true;

            // Save to localStorage
            const studentInfo = { fullName, className };
            localStorage.setItem('vstep_student_info', JSON.stringify(studentInfo));

            // Submit to Google Forms via no-cors fetch
            const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScU5Jd_R15uECAgsBMHZsqKAaCR2g2K1IzqOGs-ZN9_RbDkdQ/formResponse';
            const formData = new URLSearchParams();
            formData.append('entry.388968236', `${fullName} - ${className}`);

            fetch(formUrl, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: formData.toString()
            }).then(() => {
                loginOverlay.classList.add('hidden');
            }).catch(err => {
                console.error('Lỗi khi gửi form:', err);
                loginOverlay.classList.add('hidden');
            }).finally(() => {
                loginBtn.textContent = 'BẮT ĐẦU HỌC NGAY';
                loginBtn.disabled = false;
            });
        });
    }
    // -------------------
    // Render navigation
    renderNav();

    // Update global progress on load
    updateGlobalProgress();

    // Reset progress button listener
    const btnResetProgress = document.getElementById('btnResetProgress');
    if (btnResetProgress) btnResetProgress.addEventListener('click', resetLearningProgress);

    // Handle Tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Remove active class from all buttons and panels
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));

            // Add active class to clicked button
            e.currentTarget.classList.add('active');

            // Show corresponding panel
            const tabId = e.currentTarget.dataset.tab;
            const panel = document.getElementById(`${tabId}Panel`);
            if (panel) panel.classList.add('active');
        });
    });

    // Recitation Button Listeners
    if (btnPrevQuestion) btnPrevQuestion.addEventListener('click', prevRecitationQuestion);
    if (btnShowHint) btnShowHint.addEventListener('click', showRecitationHint);
    if (btnCheckAnswer) btnCheckAnswer.addEventListener('click', checkRecitationAnswer);
    if (btnNextQuestion) btnNextQuestion.addEventListener('click', nextRecitationQuestion);
    if (btnRestartRecitation) btnRestartRecitation.addEventListener('click', () => resetRecitationUI(true));

    // Theme Toggle
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            isDarkMode = !isDarkMode;
            if (isDarkMode) {
                document.documentElement.setAttribute('data-theme', 'dark');
                themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
            } else {
                document.documentElement.removeAttribute('data-theme');
                themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
            }
        });
    }
});
