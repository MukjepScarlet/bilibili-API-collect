import{_ as t,o as n,c as s,e as a}from"./app-61339773.js";const o={},e=a(`<h1 id="关注up直播情况" tabindex="-1"><a class="header-anchor" href="#关注up直播情况" aria-hidden="true">#</a> 关注UP直播情况</h1><h2 id="用户关注的所有up的直播情况" tabindex="-1"><a class="header-anchor" href="#用户关注的所有up的直播情况" aria-hidden="true">#</a> 用户关注的所有UP的直播情况</h2><blockquote><p>https://api.bilibili.com/x/space/wbi/acc/info</p></blockquote><p><em>请求方式：GET</em></p><p>认证方式：Cookie（SESSDATA）</p><p><strong>URL参数：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>page</td><td>num</td><td>页码</td><td>非必要</td><td>默认为<code>1</code></td></tr><tr><td>page_size</td><td>num</td><td>每页的数据数量</td><td>非必要</td><td>有效值<code>1</code>-<code>10</code>, 默认为<code>10</code></td></tr><tr><td>ignoreRecord</td><td>num</td><td></td><td></td><td><strong>尚不明确</strong><br>一般为<code>1</code></td></tr><tr><td>hit_ab</td><td>bool</td><td></td><td></td><td><strong>尚不明确</strong><br>建议用<code>true</code>, 不填为<code>false</code></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td><code>0</code>：成功<br><code>-101</code>：错误</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td></td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>title</td><td>str</td><td>标题</td><td></td></tr><tr><td>pageSize</td><td>num</td><td>每页的数据数量</td><td></td></tr><tr><td>totalPage</td><td>num</td><td>分页数量</td><td></td></tr><tr><td>list</td><td>obj</td><td>UP直播情况列表</td><td></td></tr><tr><td>count</td><td>num</td><td>曾直播过的UP数量</td><td></td></tr><tr><td>never_lived_count</td><td>num</td><td>未直播过的UP数量</td><td></td></tr><tr><td>live_count</td><td>num</td><td>正在直播的UP数量</td><td></td></tr><tr><td>never_lived_faces</td><td>list</td><td></td><td><strong>尚不明确</strong></td></tr></tbody></table><p><code>list</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>roomid</td><td>num</td><td>房间号</td><td></td></tr><tr><td>uid</td><td>num</td><td>主播uid</td><td></td></tr><tr><td>uname</td><td>str</td><td>主播名</td><td></td></tr><tr><td>title</td><td>str</td><td>直播标题</td><td></td></tr><tr><td>face</td><td>str</td><td>主播头像</td><td></td></tr><tr><td>live_status</td><td>num</td><td>是否正在直播</td><td><code>0</code>: 未直播<br><code>1</code>: 正在直播</td></tr><tr><td>record_num</td><td>num</td><td></td><td><strong>尚不明确</strong><br>一般为0</td></tr><tr><td>recent_record_id</td><td>str</td><td></td><td><strong>尚不明确</strong><br>一般为空</td></tr><tr><td>is_attention</td><td>num</td><td></td><td><strong>尚不明确</strong><br>一般为1</td></tr><tr><td>clipnum</td><td>num</td><td></td><td><strong>尚不明确</strong><br>一般为0</td></tr><tr><td>fans_num</td><td>num</td><td></td><td><strong>尚不明确</strong><br>一般为0</td></tr><tr><td>area_name</td><td>str</td><td></td><td><strong>尚不明确</strong><br>一般为空</td></tr><tr><td>area_value</td><td>str</td><td></td><td><strong>尚不明确</strong><br>一般为空</td></tr><tr><td>tags</td><td>str</td><td></td><td><strong>尚不明确</strong><br>一般为空</td></tr><tr><td>recent_record_id_v2</td><td>str</td><td></td><td><strong>尚不明确</strong><br>一般为空</td></tr><tr><td>record_num_v2</td><td>num</td><td></td><td><strong>尚不明确</strong><br>一般为0</td></tr><tr><td>record_live_time</td><td>num</td><td>主播上一次直播结束的时间戳</td><td>正在直播时, 值为<code>0</code></td></tr><tr><td>area_name_v2</td><td>str</td><td>频道的名称</td><td></td></tr><tr><td>room_news</td><td>str</td><td>房间公告</td><td></td></tr><tr><td>switch</td><td>bool</td><td></td><td><strong>尚不明确</strong></td></tr><tr><td>watch_icon</td><td>str</td><td></td><td><strong>尚不明确</strong></td></tr><tr><td>text_small</td><td>str</td><td></td><td><strong>尚不明确</strong><br>当主播正在直播时, 为在线人数(可能)</td></tr><tr><td>room_cover</td><td>str</td><td>房间封面图片的URL</td><td></td></tr><tr><td>parent_area_id</td><td>num</td><td>父分区id</td><td></td></tr><tr><td>area_id</td><td>num</td><td>分区id</td><td></td></tr></tbody></table><p><strong>示例：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://api.live.bilibili.com/xlive/web-ucenter/user/following&#39;</span> <span class="token punctuation">\\</span>
     <span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx&#39;</span> <span class="token punctuation">\\</span>
     --data-urlencode <span class="token string">&#39;page=1&#39;</span> <span class="token punctuation">\\</span>
     --data-urlencode <span class="token string">&#39;page_size=2&#39;</span> <span class="token punctuation">\\</span>
     --data-urlencode <span class="token string">&#39;ignoreRecord=1&#39;</span> <span class="token punctuation">\\</span>
     --data-urlencode <span class="token string">&#39;hit_ab=true&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;哔哩哔哩直播 - 我的关注&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;pageSize&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;totalPage&quot;</span><span class="token operator">:</span> <span class="token number">26</span><span class="token punctuation">,</span>
    <span class="token property">&quot;list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;roomid&quot;</span><span class="token operator">:</span> <span class="token number">544853</span><span class="token punctuation">,</span>
        <span class="token property">&quot;uid&quot;</span><span class="token operator">:</span> <span class="token number">686127</span><span class="token punctuation">,</span>
        <span class="token property">&quot;uname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;籽岷&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;尝试双机位&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;face&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://i0.hdslb.com/bfs/face/7efb679569b2faeff38fa08f6f992fa1ada5e948.webp&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;live_status&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;record_num&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;recent_record_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;is_attention&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;clipnum&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;fans_num&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;area_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;area_value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;tags&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;recent_record_id_v2&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;record_num_v2&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;record_live_time&quot;</span><span class="token operator">:</span> <span class="token number">1720011626</span><span class="token punctuation">,</span>
        <span class="token property">&quot;area_name_v2&quot;</span><span class="token operator">:</span> <span class="token string">&quot;新游推荐&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;room_news&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;switch&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;watch_icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://i0.hdslb.com/bfs/live/a725a9e61242ef44d764ac911691a7ce07f36c1d.png&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;text_small&quot;</span><span class="token operator">:</span> <span class="token string">&quot;10.9万&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;room_cover&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i0.hdslb.com/bfs/live/new_room_cover/6c89c41d7695a080d31ae21c128f7759a7f419e5.jpg&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;parent_area_id&quot;</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
        <span class="token property">&quot;area_id&quot;</span><span class="token operator">:</span> <span class="token number">889</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;roomid&quot;</span><span class="token operator">:</span> <span class="token number">21686237</span><span class="token punctuation">,</span>
        <span class="token property">&quot;uid&quot;</span><span class="token operator">:</span> <span class="token number">456664753</span><span class="token punctuation">,</span>
        <span class="token property">&quot;uname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;央视新闻&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;央视新闻的直播间&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;face&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://i1.hdslb.com/bfs/face/38a8db1c187b64a1412fafffbf350f8a3f436371.jpg&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;live_status&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;record_num&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;recent_record_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;is_attention&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;clipnum&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;fans_num&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;area_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;area_value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;tags&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;recent_record_id_v2&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;record_num_v2&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;record_live_time&quot;</span><span class="token operator">:</span> <span class="token number">1720001717</span><span class="token punctuation">,</span>
        <span class="token property">&quot;area_name_v2&quot;</span><span class="token operator">:</span> <span class="token string">&quot;社科法律心理&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;room_news&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;switch&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;watch_icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://i0.hdslb.com/bfs/live/0b265af1af0a77abc47aa3b8f1a5c0769d8bd23b.png&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;text_small&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;room_cover&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i0.hdslb.com/bfs/live/d650d0e6e49397ea71d630be0a0e686679df16d8.jpg&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;parent_area_id&quot;</span><span class="token operator">:</span> <span class="token number">11</span><span class="token punctuation">,</span>
        <span class="token property">&quot;area_id&quot;</span><span class="token operator">:</span> <span class="token number">376</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;count&quot;</span><span class="token operator">:</span> <span class="token number">52</span><span class="token punctuation">,</span>
    <span class="token property">&quot;never_lived_count&quot;</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
    <span class="token property">&quot;live_count&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;never_lived_faces&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,17),p=[e];function r(d,c){return n(),s("div",null,p)}const u=t(o,[["render",r],["__file","follow_up_live.html.vue"]]);export{u as default};
