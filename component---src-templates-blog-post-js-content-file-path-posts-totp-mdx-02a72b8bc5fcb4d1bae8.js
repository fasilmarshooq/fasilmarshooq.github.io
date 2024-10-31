"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[660],{5969:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var n=a(2333),r=a(9474);function s(e){const t=Object.assign({p:"p",span:"span",h3:"h3",a:"a",h4:"h4",pre:"pre",code:"code"},(0,n.R)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.p,null,"Basic Authentication (just username and password) has become increasingly insecure, as it can be easily compromised through phishing, brute force attacks, or data breaches. Let's face it: all systems have security flaws, but we should make it difficult for attackers."),"\n",r.createElement(t.p,null,'So, what can we do? Well, we can do many things, but the easiest go-to answer is "Multi-Factor Authentication" (MFA).'),"\n",r.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 861px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/417717973f4fc39ca911b8d8f02100de/e35ec/mfa-dog.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 58.00000000000001%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAA7DAAAOwwHHb6hkAAACRElEQVR42o2T30tTYRzG95dE1/0BddVVNxGCXRRdeNdFQlAzwpRALdPyIjBQTDSwUERRt3K1WWbNebbh2VHbZovl1IEetzmPimvq2Tr7dLbj6QdO6IEvnOfle573+b7v81oKhQJFbG1t4XQ68XgEDg4O+Btmj6IouN1uRFEslSRJBINBBEEo8SIsZnNRJL66wnY6QS6nUg75fJ5kMkksFiMej+u1qvMEsiyTSqVMQY2C9rNE1sIu/Lb7ZDNpw5mm8T8wTf3jMH+YITjZxrv+W2zK0aNGrezPxdK0gr6xok+WPeKGKUtyxUfU30vI1Yj/dR2zb+r4OtVGdLafjBI3VY652d3eYKD5Kl3Wi8QiUmmtKGoRnQ+YGatFsNcjjN7BO1Kj83o8I1aW5gaPjWQ6mXAM0N54hVe1F3hurWB/f89w6LXdw6cL+scbEJ0t+EdrEHQxr62WxenOE89LUdK4Rp/gaK6g9fJp7D0PDUHPyF2++XoR9VGFoWq8QzcIupoQHU2EPd3HHJpQVRVh4gUBm5Xum2dprjrP4eE+FvfwbeKhcUIfWhAGr+Mdribq7SYw8ZiIr6+MoPGdU7OMv6xhrP0a9ZdOUVd1DrUoGJ7pQprq4MvHp8zrtxzxdDI3+YyAq5XtxGJZh0UWCjjoelRJT0MF1sozCJ/fGiNndtdJrYdZXhgjsSyw8f0TS/N2Ntfm9RzmTwh4jmlXB0k5gvS+D8lt/3PLZtZ+7Mpk95JkdtbJ6Zk8KYem45xqPM+lhUnS8vLv9V8iulX5RWIfkAAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="dog-mfa"\n        title=""\n        src="/static/417717973f4fc39ca911b8d8f02100de/e35ec/mfa-dog.png"\n        srcset="/static/417717973f4fc39ca911b8d8f02100de/5a46d/mfa-dog.png 300w,\n/static/417717973f4fc39ca911b8d8f02100de/0a47e/mfa-dog.png 600w,\n/static/417717973f4fc39ca911b8d8f02100de/e35ec/mfa-dog.png 861w"\n        sizes="(max-width: 861px) 100vw, 861px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",r.createElement("br"),"\n",r.createElement(t.p,null,"Attention 🚨 - MFA is not a replacement for allowing users to create weak passwords."),"\n",r.createElement(t.p,null,"There are multiple ways to enable MFA. Let's explore a few of them."),"\n",r.createElement(t.h3,null,"Email Based OTP"),"\n",r.createElement(t.p,null,"An OTP will be delivered to the registered email. Accessibility is a pro here, as most users have an email account. However, you need to set up SMTP, store the OTP to validate it later, and be aware that emails can be compromised."),"\n",r.createElement(t.h3,null,"Sms Based Otp"),"\n",r.createElement(t.p,null,"An OTP will be delivered to the registered mobile number. It's easy to use and poses a lesser security risk than email-based OTPs. But... there are high costs involved."),"\n",r.createElement(t.p,null,"So, this leaves us to select a solution that should be cost-effective and easy to use."),"\n",r.createElement(t.h3,null,"Introducing TOTP!!!"),"\n",r.createElement(t.p,null,"Time-Based One-Time Passwords (TOTP) are randomized numeric codes generated by authenticator apps like ",r.createElement(t.a,{href:"https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en"},"Google Authenticator")," and ",r.createElement(t.a,{href:"https://play.google.com/store/apps/details?id=com.azure.authenticator&hl=en"},"Microsoft Authenticator"),". These codes are generated based on a shared secret and a time counter, which means a new OTP is typically generated every 30 seconds. The OTP is valid only for the allotted time window, beyond which it becomes redundant, preventing OTP reuse."),"\n",r.createElement(t.h4,null,"Fun Fact!"),"\n",r.createElement(t.p,null,"The first TOTP authentication system was developed, patented, and marketed by RSA Security. Later, the Initiative for Open Authentication (OATH) developed its own variant of TOTP, which it made freely available. I hope many of you have seen the image below 😆"),"\n",r.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 567px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/6b708138ce1112066c9bc2133d58fef3/8710b/rsa.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 56.666666666666664%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAA7DAAAOwwHHb6hkAAADDElEQVR42iWS60/bZRiG+0f4yfjFL7po4nHGZcZEdEMUg+LQjG24zB04jE7KOGwsWGC1i9ugYbQUhNIfpf31RNsVS7vSA4WW0pZCcANWp2FZGYftn7h8wQ93nuf9cuV+7vdW6HQahod7sUwM4nSN4vWNEwjYCYc9xONTzM8HSS+EyWSiZLOxAy0uRkinIyQXZkjMhZiJBAgEfXh8DhR6/S3M0j2czhG8XolQyEV81k8yGSSTniGfi7O0NEs+P8fK8jzLK0LLc+KdIJdLsJCOCWiYaDRIMORHMfzHXWw2I55JMw8EzOczI1sHsU0YcdlHiUXvs7qa4vF6lsJGjsLjPBtirq0t8vBhhpWVRQFOkUzFiESnUYyN9Qt3o4SCDoaMWtquN3Je2crnVU18cbqFti4NY9IwNrtFRGLD5ZZxTco4hRxil50yFtkiXEZIJeMoxi16PB4Ji6TjsvIMyror1B49QcPhSprf+YbSklraNb9zp+8uN3p6aO/qoun6DZRt17h8tZX6JhVtnZ1M+twi35RwaOqj93YH52rKqWu8yPdlP3H/rcNkjh9j9sinlL97CpWmH/XNbj4oq+D941/z5iclvP7hEV479DavvHGIY99VCJfW/4G3tO0Y+rs4WfUZdfU/89UPSn4sq6WqtIGzZzr5qFKNqvseA8YBzje3UN/aTvXFBr48dYGSymq+La/g7IVLmK0WkeUCCoNBy53bnWh6VNReOomqo5uPT//Kq6Vq3qvRUdmsxzBqxuf3EnoQJDwTRPb4OPebg2q1yPSXa2iuqhmRbaIFORQTE0P4/TKxmB+tVkVzS6PIREPNFQ31Hb0YTSbs4jNkpw231yXkxuVxYbXbGbdZD5ztnzufmhOVyqOQJANut8T0tJtEIiAKrqevX8vgkI5xywgB0a3Ck3W2tv5le+cpu7vPeLH3nJcvt9l7scXObpFi8SkbhXWW9h2aTAM4nBJTfzpFOafIirLmlpJiJnm0tkxxH7S9eaAdAdvdKwroFs+3izwToM3Nfyj8vc5fj1bJ5nP8B8SCcrOkeaQLAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="dog-mfa"\n        title=""\n        src="/static/6b708138ce1112066c9bc2133d58fef3/8710b/rsa.png"\n        srcset="/static/6b708138ce1112066c9bc2133d58fef3/5a46d/rsa.png 300w,\n/static/6b708138ce1112066c9bc2133d58fef3/8710b/rsa.png 567w"\n        sizes="(max-width: 567px) 100vw, 567px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",r.createElement("br"),"\n",r.createElement(t.p,null,"Let's see how we can implement one. I'm using C# here as an example, but it should\r\nbe pretty much the same across platforms."),"\n",r.createElement(t.p,null,"Below is the basic user journey for registration and authentication:"),"\n",r.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 373px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/4cc3ba47e58391a778550062601ba2c0/67a5d/mfa-flow.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 129.66666666666666%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAaCAYAAAC3g3x9AAAACXBIWXMAAAsTAAALEwEAmpwYAAADQElEQVR42q1VaXPiMAzN//9t7c70AALkILeTOAcQwo1WT2my0NB+2sy4dm1Zlt7TEwb958/An/1+T67rkecHFIQRhVFMuS5GxrfbjTr7AyVJSnGsqCjKscPz+UxpmlOaFeyopKre0Hq9/dnh4cDOUirLmqpq/XBmYHG5XIZNjOv1Oozv3+l0+tqH7VXsERCGOMRhGIb8Yiyzz2lnWcazT3GiHpzBtigKsQuCgDzPk3tKJZTlms9vZMAzHCwWC3p5eaG3tzeaTCaMqcuYRqOU8dDHxwfN53P6/Pyk6XQqa9vxOodIoWkaIcY0TbJtW15GOmGYDNjgAzSIEEEopeRhrbXYrLyQz68dhlmmKWKQPd50XJ8ZzDilmBKlRxhqJg22OF9arqzDSJFK9T+W++/A7NX1I2s/fYiyqupxHeIiHB2PR3ZWc8quMNntnUYY7nY7gaeqKoZoLmvstW3bOcRly7Ioz3OKokiwibmwfd8jc271rgaWZ7OZkLJarYQQYD6ZMDmzRecQoTuOLU6Xy6UQs1wu+OKUZ+chQpCCLFAqsP/z+sp3HY625BLLGIYLGTBKuN7iOGG1ZBxp8SWrhJmLRnUIm6bZyWxZNqulos1my2QGcm702mzbg0hJqZza/ZG2TcvzYQR62+5Zlo1IDrbbbUs1y3TH+yOWAXCe619Z7uUJ0pIvJfUSHKQHpazXazZIaMbMgUE41t86Di4BQzyM2XVXki7u9iUkpIAtEAIGATYU8P7+zv8vRhiiGnotQ4YIAgFFXNzgQxzCCEyhbOAM8ioK/VR6m82GCUlFntA7ygZ7CeM5sIxeqHVNPsvJNJe8rhhwzc0hHqWsVCaXoyhh+0ikF3N0HlcEzo3+ZXhvuOJrbq6X81VU8qwfogFgoDJQMlifTufB1ngsifaOud+1DKkiypGWEV1ZllxPW8HOY6CxBosFR/A95d4Ws+f5gh9Y7n9bhn6Ivgb2ADaA7uosk6Z5TwqqAOeQn207QqTHugb2giEcolvAKcrHNGdSDtJgGez71LHuHl1JlwbL0DLs0R+lwQLMnrk048GNEqzjVy0I1ShlNOPORpNie8W2kKAfJNKTjN6wZ+9+PCMGEPxm+xfB/8sQVGRQhQAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="mfa-flow"\n        title=""\n        src="/static/4cc3ba47e58391a778550062601ba2c0/67a5d/mfa-flow.png"\n        srcset="/static/4cc3ba47e58391a778550062601ba2c0/5a46d/mfa-flow.png 300w,\n/static/4cc3ba47e58391a778550062601ba2c0/67a5d/mfa-flow.png 373w"\n        sizes="(max-width: 373px) 100vw, 373px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",r.createElement("br"),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-csharp"},"using OtpNet;\r\nusing QRCoder;\n")),"\n",r.createElement("br"),"\n",r.createElement(t.p,null,"We are using ",r.createElement(t.a,{href:"https://github.com/kspearrin/Otp.NET?tab=readme-ov-file#totp-timed-one-time-password"},"otp.net"),"\r\nand ",r.createElement(t.a,{href:"https://github.com/codebude/QRCoder"},"QRCode")," here"),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-csharp"},"var secret = Base32Encoding.ToString(\r\n                KeyGeneration.GenerateRandomKey(20)\r\n                );\n")),"\n",r.createElement(t.p,null,r.createElement("br")," The secret is generated using ",r.createElement(t.code,null,"KeyGeneration.GenerateRandomKey"),". I would\r\nprefer one secret per user and store it securely after encrypting it using AES\r\nor other popular algorithms."),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-csharp"},'\r\nstring GenerateQrCodeUri(string email, string secret)\r\n{\r\nstring issuer = "my amazing app";\r\nstring uri = $"otpauth://totp/{issuer}:{email}?secret={secret}&issuer={issuer}";\r\n\r\n    using (var qrGenerator = new QRCodeGenerator())\r\n    {\r\n    \tvar qrCodeData = qrGenerator.CreateQrCode(uri, QRCodeGenerator.ECCLevel.Q);\r\n    \tvar qrCode = new Base64QRCode(qrCodeData);\r\n    \treturn qrCode.GetGraphic(20);\r\n    }\r\n\r\n}\r\n\n')),"\n",r.createElement(t.p,null,r.createElement("br")," With the help of QRCoder, we can generate a QR code. Below is the output\r\nfrom the above code, which you can scan using authenticator apps."),"\n",r.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 541px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/1f29c072d81b5d5a7d28e42c41e8859d/9d576/mfa-qr.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 97.66666666666669%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD5klEQVR42jVUxUu3YRB8/xMvevAieFIQC8VW7G5M7PzZ3Yrd3YmBeFAMUIyD2BgnEURsRUVM3O+bEYUfPu8Tu7Mzs6vI/7+npyd5eHiQ19dX+f7+lufnZ7m/v5efnx9+v729yfv7O9cvLy/y8fEhn5+f8vX1xf3Hx0e+x7lyc3Mj6enpEhcXJzk5OdLd3S0FBQXi6+sry8vLEhISIhkZGZKQkCC5ubmiq6sr2dnZ4ufnJ0FBQZKcnCyZmZkSHR0ti4uLotze3vKBmZmZ1NXVycLCgsTGxkpwcDD3PT09xd3dXTQ0NCQqKorJCgsLRVNTU1JSUmR6elo8PDx4DwAUlFBdXU10PT09RIisLS0tRDUyMsLzyspKsbe3J5K5uTkxNzdn8M3NTenv75eioiLZ2toSBfwA8vDwMIOZmpqSgra2NjExMZGmpiYJCwuTwMBAIk1MTJSamhoxMjKSoaEhGRsbk97eXhkYGJCLiwtRQOrk5KTU19dLXl4eA4yOjvLR7u6u9PX1kTPsIaG3tzf5TktLY8nh4eHca25ulpWVFVGgENCABwRD6V1dXSwF33gAxEhWWlrKu7Ozs+Ls7CxZWVncNzQ0JN94o1xeXnITQlRUVEhqaiofNTY2MsDExIRsbGzwzNbWliXr6ekRMXjb3t6Wzs5OUoI1OVxaWiJkf39/aW1tpQAoKykpSU5OTpgA58XFxVJSUkJ6ysvL5fj4mPv7+/us5u7u7pdDWAUb8fHxtMbR0RFVhs8gBB4DDaxibGxMWlxcXIjMx8eH6re3t/8aG90AVBYWFvQXDAtvubm5Ud2dnR2KAh6RAFxPTU1RWZSOZE5OTqKjoyOnp6eiXF1d0cR2dna8gMwoCWitra3JoZWVFekICAjgHrpncHCQiVxdXbkuKytjcgU9CR5mZmZIuJqaGsnX0tJiAFgjJiaGPgMyGB1cOjg4sAHQiuiwqqoqGR8f/+0UwAYvyAi1YXQoj1LQJciO8g0MDIj++vqanEI4cIyAqHJtbU0UKANEIBeqAhG4gnEtLS2JGnzB6AiKJggNDeU3PAre0YLwJQaNgvGFKdLR0cEgkZGRvOjl5cXLNjY2XOfn5xM1ykTJsBYS4QzBwO3BwYEomIFwOTgEP5gaeAAUECIiIoJBgN7R0ZHIwC8SwGLoFpVKxXO0qgI+EPCvlaAqRMKwwBq8wioQCAHQEZg4tbW1TI6xBx9iSKDrOGAxpiA/vAZx9PX1RVtbm/zhsrq6OvkEHRi8f8OhoaGBVeCHxGgStt76+jr7dW9vj+Mcxp6fn2dLHR4ekhv06fn5Oe9hvbq6KmdnZ4IBjR+qwf9/ZZIvZ9HrSncAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="mfa-qr"\n        title=""\n        src="/static/1f29c072d81b5d5a7d28e42c41e8859d/9d576/mfa-qr.png"\n        srcset="/static/1f29c072d81b5d5a7d28e42c41e8859d/5a46d/mfa-qr.png 300w,\n/static/1f29c072d81b5d5a7d28e42c41e8859d/9d576/mfa-qr.png 541w"\n        sizes="(max-width: 541px) 100vw, 541px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",r.createElement("br"),"\n",r.createElement(t.p,null,"Once you have scanned the QR code, it will appear in authenticator apps like the one below. Oh yeah, the screenshot below is taken from the Chrome Google Authenticator extension."),"\n",r.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 818px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/325fb1a30674f08b7727b1d6b5727f76/64d87/mfa-auth.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 55.99999999999999%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAA7DAAAOwwHHb6hkAAABuUlEQVR42oVS23LaMBDV/39Nf6DTTpvShiQdyAAmkPgq2+C7seULBk5XW2DyQJudObPSarVanbPi8fcEQRDCcV3kRYEkTZFmGVLylm1jtX5l/2ZZeDNNOJ5H5zmyPOc8k+IyCBBFMUbjB4i1aSOkgO/70HY6na7edhw8P0/xul5juVphMp3AogIXOxwOfHcThmjbBtPZAmJpzDAMAwVaNE1z9RqqUdc1g86UUtjtdoyqqniv/X6/x3xhQEjTQFUranmL7WYDn9uPGLqDgRL1g++h4xp936Oua5RlyQ9KKSEWkzF11RGP9G3iMvAlH7h+gIF+fyCccNu6rkOSJMiJT732iF8xfxwh3QPzmDiIWtxJhZGvsMp6jIMan15yWEV35hX/tWvBnjazSOE+VPhs7/DNrfBEa6/s8VNWcIr+ZkEtnMbxeGQfxzGEMX0g8lv40sNy+QLpuaRawOrVqvl78R8dXSbCMAz+toZ4+vWDOYziiHnckhh6FpM0oYcaUm8g8ves4i1okXQhrbSeXXH//Qt3mOUZq1XScBdnZOcB/wiX7mJqRozvvvLYaLXeJ2WMjIt+BM4nrzn8A0/cQg0EJlGLAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="mfa-auth"\n        title=""\n        src="/static/325fb1a30674f08b7727b1d6b5727f76/64d87/mfa-auth.png"\n        srcset="/static/325fb1a30674f08b7727b1d6b5727f76/5a46d/mfa-auth.png 300w,\n/static/325fb1a30674f08b7727b1d6b5727f76/0a47e/mfa-auth.png 600w,\n/static/325fb1a30674f08b7727b1d6b5727f76/64d87/mfa-auth.png 818w"\n        sizes="(max-width: 818px) 100vw, 818px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",r.createElement("br"),"\n",r.createElement(t.p,null,"Now you have a time-based OTP. Let's see how to validate it."),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-csharp"},'var secret = "my secure secret";\r\n\r\nvar code = "650260";\r\n\r\nvar isValid = ValidateTotpCode(secret,code);\r\n\r\nisValid.Dump();\r\n\r\nbool ValidateTotpCode(string secret, string code)\r\n{\r\n\tvar totp = new Totp(Base32Encoding.ToBytes(secret));\r\n\treturn totp.VerifyTotp(code, out long timeStepMatched, new VerificationWindow(2, 2));\r\n}\n')),"\n",r.createElement("br"),"\n",r.createElement(t.p,null,r.createElement(t.code,null,"totp.VerifyTotp")," will help us validate whether the input TOTP is valid or not."),"\n",r.createElement(t.p,null,"Tada!!! With these easy steps, you have enabled MFA for your application."),"\n",r.createElement(t.p,null,"Having MFA will not protect against impersonating cookies or JWTs. We will see how to make your JWT more secure in upcoming posts."))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.R)(),e.components);return t?r.createElement(t,e,r.createElement(s,e)):s(e)},l=a(3328),o=a(9982),c=a(2788),d=a(3202);const p={pre:c.N,code:c.R},m=e=>{let{data:t,location:a,children:s}=e;const i=t.mdx;return r.createElement(o.A,{location:a,headerTitle:"Fasil Marshooq",title:i.frontmatter.title,description:i.frontmatter.description||i.excerpt,date:i.frontmatter.date,tags:i.frontmatter.tags},r.createElement("div",{className:l.Qs,id:"md-content",itemProp:"articleBody"},r.createElement(n.x,{components:p},s),r.createElement(d.A)))};function g(e){return r.createElement(m,e,r.createElement(i,e))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-content-file-path-posts-totp-mdx-02a72b8bc5fcb4d1bae8.js.map