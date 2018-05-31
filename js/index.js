window.onload = function() {
				var data, img ,create = document.getElementById('create');
				var move=document.getElementById("move");
				$.ajax({
					url: "http://www.sky31.top/bybwg/get_image.php",
					dataType: 'json',
					method: "POST",
					data: {
						place: "yfl" //获取到的id值
					},
					success: function(datas) {
						img = datas.image;
						for(var i = 0; i < img.length; i++) {
							var oDiv = document.createElement("div");
							oDiv.className = "swiper-slide";
							var img4 = document.createElement("img");
							img4.src = img[i];
							oDiv.appendChild(img4);
							var sDiv = document.createElement("div");
							sDiv.innerHTML = i+1;
							oDiv.appendChild(sDiv);
							create.appendChild(oDiv);
							var Div = document.createElement("div");
							Div.className = "swiper-slide";
							var Img = document.createElement("img");
							Img.src = img[i];
							Div.appendChild(Img);
							move.appendChild(Div);
						}
						if(i==img.length){
							var galleryTop = new Swiper('.gallery-top', {
								nextButton: '.swiper-button-next',
								prevButton: '.swiper-button-prev',
								spaceBetween: 10,
								loop: true,
								loopedSlides: 5, //looped slides should be the same
							});
							var galleryThumbs = new Swiper('.gallery-thumbs', {
								spaceBetween: 10,
								centeredSlides: true,
								slidesPerView: 'auto',
								touchRatio: 0.75,
								loop: true,
								centeredSlides: true,
								loopedSlides: 5, //looped slides should be the same
								slideToClickedSlide: true
							});
							galleryTop.params.control = galleryThumbs;
							galleryThumbs.params.control = galleryTop;
							var obj;
				var main = document.getElementById('main');
				var img = document.getElementsByTagName("img");
				var full_img = document.getElementById("full_img");
				var full = document.getElementById("full");
				var nav = document.getElementById("nav");
				var width = document.documentElement.clientWidth || document.body.clientWidth;
				var height = document.documentElement.clientHeight || document.body.clientHeight;
				var navout = document.getElementById("navout");
				for(var i = 0; i < img.length; i++) {
					img[i].addEventListener("click", function() {
						if(full.style.display == "flex") {
							return;
						}
						full_img.src = this.src;
						obj = this;
						full_img.onload = function() {
							$('#full').fadeIn(750);
							full.style.display = "flex";
							if(full_img.naturalWidth < full_img.naturalHeight * (width / height)) {
								full_img.style.height = "100%";
								full_img.style.width = "";
							} else {
								full_img.style.width = "100%";
								full_img.style.height = "";
							}
						}
					})
				}
				full.onclick = function() {
					$('#full').fadeOut(750);
				}
				nav.onclick = function() {
					if(full.style.display == "flex") {
						return;
					}
					console.log(nav.innerHTML);
					if(nav.innerHTML == "学活 ∨") {
						setTimeout(function() {
							nav.innerHTML = "学活 ∧";
						}, 300);
						$('#navout').fadeIn(500);
					} else {
						setTimeout(function() {
							nav.innerHTML = "学活 ∨";
						}, 300);
						$('#navout').fadeOut(500);
					}
				}
						}
					},
				});
				}