/*!
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * v4.0.30 - 2019-02-23
 *
 */
!function(a,b){var c=Modernizr.inputtypes.date?describe.skip:describe;c('Input type="date" polyfill (date picker)',function(){var c,d,e,f,g,h=sinon.sandbox.create(),i="input[type=date]",j=b.doc,k=j.find("body"),l="#wb-picker",m=function(b,d){return b=b||'<input type="date" id="appointment"/>',d=d||'<label for="appointment">Appointment Date</label>',function(i){f=h.spy(a.prototype,"trigger"),g||(g=i),c=a("<div>"+d+"</div>").prependTo(k),e=a(b).appendTo(c),e.trigger("wb-init.wb-date")}},n=function(){h.restore(),c.remove(),g=null};before(function(){j.on("wb-init.wb-date",i,function(){d=a(l),g&&g()})}),describe("initialization",function(){before(m()),after(n),it("should have marked the element as initialized",function(){expect(e.hasClass("wb-date-inited")).to.equal(!0)}),it("should have created the date picker toggle button",function(){var a=e.next().find("a");expect(a.attr("class")).to.contain("picker-toggle"),expect(a.attr("id")).to.equal("appointment-picker-toggle")}),it("should have created an instance of the calendar plugin",function(){expect(d.length).to.equal(1),expect(d.find(".wb-clndr").length).to.equal(1)}),it("should have created a close icon",function(){expect(d.find(".picker-close").length).to.equal(1)}),it("should have hidden the calendar",function(){expect(d.css("display")).to.equal("none"),expect(d.attr("aria-hidden")).to.equal("true")}),it("should have added links to the calendar",function(){var a=new Date;a.setMonth(a.getMonth()+1,0),expect(d.find(".cal-days a").length).to.equal(a.getDate())}),it("should have stored a state object in the field element",function(){var a=e.get(0),b=a.state,c=new Date;expect(typeof b).to.equal("object"),expect(b.labelText).to.equal("Appointment Date"),expect(b.field).to.equal(a),expect(b.$field.get(0)).to.equal(e.get(0)),expect(b.minDate.toString()).to.equal(new Date(1800,0,1).toString()),expect(b.maxDate.toString()).to.equal(new Date(2100,0,1).toString()),expect(b.year).to.equal(c.getFullYear()),expect(b.month).to.equal(c.getMonth()),expect(typeof b.daysCallback).to.equal("function")})}),describe("with a date format and error in the label",function(){var a='<label for="appointment"><span class="field-name">Appointment Date</span><span class="datepicker-format">(YYYY-MM-DD)</span><strong class="error" id="appointment-error"><span class="label label-danger"><span class="prefix">Error 1: </span>Please enter a valid date</span></strong></label>';before(m(null,a)),after(n),it("should have stored only the field name in the label",function(){var a=e.get(0).state;expect(a.labelText).to.equal("Appointment Date")})}),describe("with a populated date",function(){before(m('<input type="date" id="appointment" value="2014-08-07"/>')),after(n),it("should have stored the date in the state object",function(){var a=e.get(0).state;expect(a.date.toString()).to.equal(new Date(2014,7,7).toString())})}),describe("toggle button",function(){var a="Pick a date from a calendar for field: Appointment Date";before(m()),after(n),it("should have added alternative text indentifying the parent control",function(){var b=e.next().find("a");expect(b.text()).to.equal(a),expect(b.attr("title")).to.equal(a)}),describe("click while calendar is closed",function(){before(function(){e.next().find("a").click()}),after(function(){e.next().find("a").click()}),it("should have opened the calendar",function(){expect(d.hasClass("open")).to.equal(!0),expect(d.css("display")).to.equal("block")}),it("should have updated the alternative text on open",function(){var a=e.next().find("a"),b="Hide calendar  (escape key)";expect(a.text()).to.equal(b),expect(a.attr("title")).to.equal(b)})}),describe("click while calendar is opened",function(){before(function(){e.next().find("a").click().click()}),it("should have closed the calendar on a second click",function(){expect(d.hasClass("open")).to.equal(!1),expect(d.css("display")).to.equal("none")}),it("should have updated the alternative text on close",function(){var b=e.next().find("a");expect(b.text()).to.equal(a),expect(b.attr("title")).to.equal(a)})})}),describe("toggle button for disabled date field",function(){before(function(a){g=function(){e.next().find("a").click(),a()},m('<input type="date" readonly id="appointment"/>')()}),after(function(){e.next().find("a").click(),n()}),it("should not have opend the calendar on click",function(){expect(d.hasClass("open")).to.equal(!1),expect(d.css("display")).to.equal("none")})}),describe("toggle button for read-only date field",function(){before(function(a){g=function(){e.next().find("a").click(),a()},m('<input type="date" readonly id="appointment"/>')()}),after(function(){e.next().find("a").click(),n()}),it("should not have opend the calendar on click",function(){expect(d.hasClass("open")).to.equal(!1),expect(d.css("display")).to.equal("none")})}),describe("close button",function(){before(function(b){g=function(){e.next().find("a").click(),a(".picker-close").click(),b()},m('<input type="date" id="appointment"/>')()}),after(n),it("should have closed the calendar on click",function(){expect(d.hasClass("open")).to.equal(!1),expect(d.css("display")).to.equal("none")})}),describe("keyboard shortcut",function(){before(function(a){g=function(){e.next().find("a").click(),d.trigger({type:"keydown",which:27}),a()},m()()}),after(n),it("should have close the calendar on pressing the escape key",function(){expect(d.hasClass("open")).to.equal(!1),expect(d.css("display")).to.equal("none")})}),describe("opening the calendar",function(){before(function(a){g=function(){e.next().find("a").click(),a()},m('<input type="date" id="test" min="2014-03-04" max="2014-03-18"/>','<label for="test">Test Date</label>')()}),after(function(){e.next().find("a").click(),n()}),it("should have update the calendar settings object with the field state object",function(){var a,b=e.get(0).state,c=d.get(0).firstChild.lib;for(a in b)expect(c[a]).to.equal(b[a])}),it("should have updated the aria-hidden attribute",function(){expect(d.attr("aria-hidden")).to.equal("false")}),it("should have updated the aria-controls to the date field",function(){expect(d.attr("aria-controls")).to.equal("test")}),it("should have updated the aria-labelled-by to the toggle button",function(){expect(d.attr("aria-labelledby")).to.equal("test-picker-toggle")}),it("should have positioned the date picker immediately under the control",function(){var a=d.offset(),b=e.offset();expect(Math.floor(a.left)).to.equal(Math.floor(b.left)),expect(Math.floor(a.top)).to.equal(Math.floor(b.top+e.outerHeight()))})}),describe("opening the calendar when the field has no date and the current date is inside the date range",function(){var a=new Date;before(function(a){var b=new Date,c=new Date;b.setMonth(-1),c.setMonth(1),g=function(){e.next().find("a").click(),a()},m('<input type="date" id="appointment" min="'+b.toISOString().split("T")[0]+' max="'+c.toISOString().split("T")[0]+' "/>')()}),after(function(){e.next().find("a").click(),n()}),it("should have set the month and year to the current month and year",function(){var b=d.get(0).firstChild.lib;expect(b.year).to.equal(a.getFullYear()),expect(b.month).to.equal(a.getMonth())})}),describe("opening the calendar when the field has no date and the current date is outside the date range",function(){var a=new Date;before(function(b){var c=new Date;c.setMonth(-2),a.setMonth(-1),g=function(){e.next().find("a").click(),b()},m('<input type="date" id="appointment" min="'+c.toISOString().split("T")[0]+'" max="'+a.toISOString().split("T")[0]+'" />')()}),after(function(){e.next().find("a").click(),n()}),it("should have set the month and year to the maximum data's month and year",function(){var b=d.get(0).firstChild.lib;expect(b.year).to.equal(a.getFullYear()),expect(b.month).to.equal(a.getMonth())})}),describe("opening the calendar when the associated field has a date that is inside the date range",function(){before(function(a){g=function(){e.next().find("a").click(),a()},m('<input type="date" id="appointment" min="2014-03-18" max="2015-03-18" value="2014-08-07"/>')()}),after(function(){e.next().find("a").click(),n()}),it("should have set the calendar to the same month as the field's date",function(){var a=d.get(0).firstChild.lib;expect(a.year).to.equal(2014),expect(a.month).to.equal(7)}),it("should have highlighted the selected date",function(){expect(d.find(".cal-index-7 > a").attr("aria-selected")).to.equal("true")})}),describe("closing the calendar",function(){before(function(a){g=function(){e.next().find("a").click().click(),a()},m()()}),after(n),it("should have updated the aria-hidden attribute",function(){expect(d.attr("aria-hidden")).to.equal("true")})}),describe("minimum date",function(){before(function(b){g=function(){e.next().find("a").click(),a(".cal-year").val(2014).trigger("change"),a(".cal-month").val(2).trigger("change"),b()},m('<input type="date" id="appointment" min="2014-03-18"/>')()}),after(function(){e.next().find("a").click(),n()}),it("should have been added to the state object",function(){expect(e.get(0).state.minDate.toString()).to.equal(new Date(2014,2,18).toString())}),it("should have been passed the minimum to the calendar plugin",function(){expect(d.get(0).firstChild.lib.minDate.toString()).to.equal(new Date(2014,2,18).toString())}),it("should have prevented the creation of links before the minimum date",function(){expect(d.find(".cal-days a").length).to.equal(14)})}),describe("maximum date",function(){before(function(b){g=function(){e.next().find("a").click(),a(".cal-year").val(2014).trigger("change"),a(".cal-month").val(2).trigger("change"),b()},m('<input type="date" id="appointment" max="2014-03-18"/>')()}),after(function(){e.next().find("a").click(),n()}),it("should have been added to the state object",function(){expect(e.get(0).state.maxDate.toString()).to.equal(new Date(2014,2,18).toString())}),it("should have been passed the minimum to the calendar plugin",function(){expect(d.get(0).firstChild.lib.maxDate.toString()).to.equal(new Date(2014,2,18).toString())}),it("should have prevented the creation of links past the maximum date",function(){expect(d.find(".cal-days a").length).to.equal(18)})}),describe("minimum and maximum dates in same month",function(){before(function(a){g=function(){e.next().find("a").click(),a()},m('<input type="date" id="appointment" min="2014-03-04" max="2014-03-18"/>')()}),after(function(){e.next().find("a").click(),n()}),it("should have been passed the minimum and maximum to the calendar plugin",function(){var a=d.get(0).firstChild.lib;expect(a.minDate.toString()).to.equal(new Date(2014,2,4).toString()),expect(a.maxDate.toString()).to.equal(new Date(2014,2,18).toString())}),it("should have prevented the creation of links before the minimum date and past the maximum date",function(){expect(a(l).find(".cal-days a").length).to.equal(15)})}),describe("selecting a date",function(){before(function(a){g=function(){e.next().find("a").click(),d.find(".cal-days a").eq(5).click(),a()},m('<input type="date" id="appointment" min="2014-03-01" max="2014-03-31"/>')()}),after(n),it("should have populated the from field with the selected date",function(){expect(e.val()).to.equal("2014-03-06")}),it("should have triggered the change event on the form field",function(){expect(f.calledWith("change")).to.equal(!0),expect(f.calledOn(e)).to.equal(!0)}),it("should have closed the calendar",function(){expect(d.hasClass("open")).to.equal(!1),expect(d.css("display")).to.equal("none")})}),describe("selecting a date for a disabled field",function(){before(function(a){g=function(){e.next().find("a").click(),e.attr("disabled","true"),d.find(".cal-days a").eq(5).click(),a()},m()()}),after(function(){e.next().find("a").click(),n()}),it("should not have populated the form field",function(){expect(e.val()).to.equal("")}),it("should not have triggered the change event on the form field",function(){expect(f.calledWith("change")).to.equal(!1)})}),describe("selecting a date for a read-only field",function(){before(function(a){g=function(){e.next().find("a").click(),e.attr("readonly","true"),d.find(".cal-days a").eq(5).click(),a()},m()()}),after(function(){e.next().find("a").click(),n()}),it("should not have populated the form field",function(){expect(e.val()).to.equal("")}),it("should not have triggered the change event on the form field",function(){expect(f.calledWith("change")).to.equal(!1)})}),describe("updating the min and max date of the field after the creation of the element",function(){before(function(a){g=function(){e.next().find("a").click().click(),e.attr("min","2014-03-12"),e.attr("max","2014-03-17"),e.next().find("a").click(),a()},m('<input type="date" id="appointment" min="2014-03-08" max="2014-03-22"/>')()}),after(function(){e.next().find("a").click(),n()}),it("should have update the field's state",function(){var a=e.get(0),b=a.state;expect(b.minDate.toString()).to.equal(new Date(2014,2,12).toString()),expect(b.maxDate.toString()).to.equal(new Date(2014,2,17).toString())}),it("should have update the min and max date of the date picker",function(){expect(a(l).find(".cal-days a").length).to.equal(6)})})})}(jQuery,wb);
//# sourceMappingURL=test.min.js.map