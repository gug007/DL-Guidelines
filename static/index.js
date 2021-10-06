new Vue({
	template: '#guidelines-template',
	el: "#guidelines",
	name: 'Guidlines',
	components: {
		
	},
	data () {
		return {
			title: 'Guidelines',
			step: 0,
			instructionsStepZero: "Step Zero: Lorem ipsum...",
			instructionsStepOne: "Step One: Let's start by selecting the sections you would like to use.",
			instructionsStepTwo: "Step Two: Use the elements below to build your Guidelines. You can drag, drop and edit each element.",
			newGuide: false,
			newSection: false,
			previewTotalMode: false,
			mode: '',
			guidelines: [
				{
					id: 0,
					title: 'Foo Guidelines',
					createdDate: 'August 10, 2021',
					modifiedDate: 'August 24, 2021',
					createdBy: 'Evan Krow',
					modifiedBy: 'Catherine Krow'
				},
				{
					id: 1,
					title: 'Bar Guidelines',
					createdDate: 'July 10, 2021',
					modifiedDate: 'September 4, 2021',
					createdBy: 'Kooba Boo',
					modifiedBy: 'Miley Krow'
				}
			],
			availableSections: [
				{
					id: 0,
					list: 0,
					title: 'Header',
					fieldName: 'header',
					fieldType: 'text',
					defaultText: '<h1>Header</h1>'
				},
				{
					id: 1,
					list: 1,
					title: 'Introduction',
					fieldName: 'introduction',
					fieldType: 'text',
					defaultText: '<p>PLEASE READ THESE TERMS OF SERVICE (THESE “TERMS”) CAREFULLY. THESE TERMS ARE A BINDING CONTRACT FOR THE USE OF Genericom, INC. (Genericom) SERVICES.</p><p>BY ACCESSING OR USING Genericom SERVICES YOU ARE ACCEPTING THESE TERMS (ON BEHALF OF YOURSELF OR THE ENTITY THAT YOU REPRESENT) AND YOU REPRESENT AND WARRANT THAT YOU HAVE THE RIGHT, AUTHORITY, AND CAPACITY TO ENTER INTO THESE TERMS (ON BEHALF OF YOURSELF OR THE ENTITY THAT YOU REPRESENT AND ITS AFFILIATES). IF YOU DO NOT AGREE TO BE BOUND BY ALL OF THE PROVISIONS OF THESE TERMS, DO NOT ACCESS OR USE Genericom’S SERVICES.</p><p>PRICING FOR Genericom’S SERVICES IS AVAILABLE AT <a href="https://www.Genericom.com/pricing">https://www.Genericom.com/pricing</a>. DOCUMENTATION OF Genericom’S SERVICES IS AVAILABLE AT <a href="https://docs.Genericom.com">https://docs.Genericom.com</a>. Genericom’S ACCEPTABLE USE POLICY IS AVAILABLE AT <a href="https://www.Genericom.com/acceptable-use">https://www.Genericom.com/acceptable-use</a>. BEFORE ACCEPTING THESE TERMS AND USING Genericom’S SERVICES, PLEASE REVIEW THE INFORMATION AT EACH OF THESE ONLINE LOCATIONS.</p><p>THESE TERMS WERE LAST UPDATED ON March 08, 2021. PRIOR VERSIONS OF Genericom’S TERMS OF SERVICE ARE AVAILABLE AT <a href="https://docs.Genericom.com">https://docs.Genericom.com</a>.</p>'
				},
				{
					id: 2,
					list: 2,
					title: 'Services',
					fieldName: 'services',
					fieldType: 'text',
					defaultText: '<p><strong>Services.</strong> Genericom will make the Services available to Subscriber according to one or more online or written ordering documents which incorporate the Agreement (each a <strong>“Service Order”</strong>).</p>'
				},
				{
					id: 3,
					list: 3,
					title: 'Compliance',
					fieldName: 'compliance',
					fieldType: 'text',
					defaultText: '<p><strong>3.2   Compliance with Laws.</strong> Lorem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>'
				},
				{
					id: 4,
					list: 4,
					title: 'Expectations',
					fieldName: 'expectations',
					fieldType: 'text',
					defaultText: 'Sunt omnis blanditiis aut vitae a sed amet voluptas sit rerum similique recusandae explicabo. Voluptatibus et qui qui et quis ut commodi in corrupti qui dolorem consequatur rerum similique voluptatum. Unde aspernatur nulla earum excepturi ut eius dolor ad reprehenderit. Modi molestias et aperiam qui voluptas voluptas incidunt. Quam aliquam animi quia.'
				},
				{
					id: 5,
					list: 5,
					title: 'Standards',
					fieldName: 'standards',
					fieldType: 'text',
					defaultText: 'Sunt omnis blanditiis aut vitae a sed amet voluptas sit rerum similique recusandae explicabo. Voluptatibus et qui qui et quis ut commodi in corrupti qui dolorem consequatur rerum similique voluptatum. Unde aspernatur nulla earum excepturi ut eius dolor ad reprehenderit. Modi molestias et aperiam qui voluptas voluptas incidunt. Quam aliquam animi quia.'
				},
				{
					id: 6,
					list: 6,
					title: 'Diversity',
					fieldName: 'diversity',
					fieldType: 'text',
					defaultText: 'Sunt omnis blanditiis aut vitae a sed amet voluptas sit rerum similique recusandae explicabo. Voluptatibus et qui qui et quis ut commodi in corrupti qui dolorem consequatur rerum similique voluptatum. Unde aspernatur nulla earum excepturi ut eius dolor ad reprehenderit. Modi molestias et aperiam qui voluptas voluptas incidunt. Quam aliquam animi quia.'
				}
			],
			selectedSectionsArr: [],
			activeGuidelinesArr: [],
			openSectionArr: [],
			sectionBubble: null
		}
	},
	mounted(){

	},
	methods: {
		createGuide(){
			this.newGuide = true;
		},
		createGuideSave(e){
			e.preventDefault();
			var options = { year: 'numeric', month: 'long', day: 'numeric' };
			var newGuideObj = {}
			newGuideObj["id"] = this.guidelines.length;
			newGuideObj["title"] = document.querySelector('input[name=new-guide-name]').value;
			newGuideObj["createdDate"] = new Date().toLocaleDateString("en-US", options);
			newGuideObj["modifiedDate"] = '';
			newGuideObj["createdBy"] = 'Josh Levy';
			newGuideObj["modifiedBy"] = '';

			this.guidelines.push(newGuideObj);
			document.querySelector('input[name=new-guide-name]').value = '';
			this.newGuide = false;

		},
		createGuideCancel(){
			this.newGuide = false;
		},
		previewToggleTotalGuide(){
			this.previewTotalMode = !this.previewTotalMode;
		},
		createNewSection(){
			if(this.newSection){
				this.newSection = false;
			} else {
				this.newSection = true;
					InlineEditor
						.create( document.getElementById( 'new-section-content' ), {
							toolbar: {
								items: [
									'heading',
									'|',
									'bold',
									'italic',
									'link',
									'bulletedList',
									'numberedList',
									'|',
									'outdent',
									'indent',
									'|',
									'imageUpload',
									'blockQuote',
									'insertTable',
									'undo',
									'redo'
								]
							},
							language: 'en',
							image: {
								toolbar: [
									'imageTextAlternative',
									'imageStyle:full',
									'imageStyle:side'
								]
							},
							table: {
								contentToolbar: [
									'tableColumn',
									'tableRow',
									'mergeTableCells',
									'tableCellProperties',
									'tableProperties'
								]
							}
						})
						.then( editor => {
							console.log( editor );
						} )
						.catch( error => {
							console.error( error );
						} );
			}
		},
		saveNewSection(e){
			let title = document.getElementById('new-section-name').value;
			let fieldName = title.toLowerCase();
			let sectionText = document.getElementById('new-section-content').value;
			let newSectionObj = {};
				newSectionObj["id"] = this.availableSections.length++;
				newSectionObj["list"]= this.availableSections.length++;
				newSectionObj["title"] = title;
				newSectionObj["fieldName"] = fieldName;
				newSectionObj["fieldType"] = 'text';
				newSectionObj["defaultText"] = sectionText;
			// console.info(newSectionObj);
				this.availableSections.push(newSectionObj);
		},
		selectAll(){
			this.selectedSectionsArr = this.availableSections.map((item)=>{
				return item.id;
			});
		},
		deSelectAll(){
			this.selectedSectionsArr = [];
		},
		selectSection(ss){
			if( !this.selectedSectionsArr.includes(ss) ){
                this.selectedSectionsArr.push(ss);
			} else {
				const index = this.selectedSectionsArr.indexOf(ss);
				if (index > -1) {
					this.selectedSectionsArr.splice(index, 1);
				}
			}
		},
		isSelected(is){
			if( this.selectedSectionsArr.includes(is) ){
                return true;
			}
		},
		addToGuidelines(){
			var that = this;
			this.selectedSectionsArr.forEach(function(id){
				var foo = that.availableSections.filter((s)=>{
					return s.id === id;
				});
				that.activeGuidelinesArr.push(foo[0]);
			});
		
			this.stepCount();
			this.selectedSectionsArr = [];
		},
		removeItem(gl){
			this.activeGuidelinesArr = this.activeGuidelinesArr.filter(function( obj ) {
				return obj.id !== gl.id;
			});

			if(!this.activeGuidelinesArr.length){
				this.step = 1;
			}
		},
		sectionIsOpen(a){
            return this.openSectionArr.includes(a);
        },
		expandedSectionToggle(a){
			if(this.openSectionArr.includes(a)){
                var index = this.openSectionArr.indexOf(a);
                this.openSectionArr.splice(index, 1);
            } else {
                this.openSectionArr.push(a);
            }
		},
		stepCount(){
			if(this.activeGuidelinesArr.length){
				this.step = 2;

				let totalSections = this.activeGuidelinesArr.length;
				Vue.nextTick(function(){
					let c = 0;
					do {
						InlineEditor
							.create( document.getElementById( 'section-content' + c ), {
								toolbar: {
									items: [
										'heading',
										'|',
										'bold',
										'italic',
										'link',
										'bulletedList',
										'numberedList',
										'|',
										'outdent',
										'indent',
										'|',
										'imageUpload',
										'blockQuote',
										'insertTable',
										'undo',
										'redo'
									]
								},
								language: 'en',
								image: {
									toolbar: [
										'imageTextAlternative',
										'imageStyle:full',
										'imageStyle:side'
									]
								},
								table: {
									contentToolbar: [
										'tableColumn',
										'tableRow',
										'mergeTableCells',
										'tableCellProperties',
										'tableProperties'
									]
								}
							})
							.then( editor => {
								console.log( editor );
							} )
							.catch( error => {
								console.error( error );
							} );
						c++;
						}
					while (c < totalSections);
					
					var guideBuilder = document.getElementById('guideBuilder');
					Sortable.create(guideBuilder, {
						handle: '.move',
						animation: 1500,
						forceFallback: true,
						ghostClass: 'blue-background-class'
					});
				});

				return;
			}
		},
		backToStepOne(){
			if(this.step === 2){
				this.activeGuidelinesArr = [];
				this.step = 1;
			}
		},
		selectSectionBubble(i){
			if(this.sectionBubble === null){
				this.sectionBubble = i;
			} else {
				if(this.sectionBubble === i){
					this.sectionBubble = null;
				} else {
					this.sectionBubble = i;
				}
			}
		},
		scrollToSection(i){
			window.scrollTo({
				top: $(i).offset().top,
				left: 0,
				behavior: 'smooth'
			});
		}
	},
	computed: {
		
	}
});
