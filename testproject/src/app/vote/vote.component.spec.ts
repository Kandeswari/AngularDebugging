import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteComponent } from './vote.component';
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";
describe(' all VoteComponent unit test', () => {
  let component: VoteComponent;
  let fixture: ComponentFixture<VoteComponent>;
  let DebugElement : DebugElement
  let htmlelement : HTMLElement

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should increse by 1(in view) when + is clicked",()=>{

    component.upvote()
    fixture.detectChanges()

    DebugElement = fixture.debugElement.query(By.css('p'))
    htmlelement = DebugElement.nativeElement

    // assert
    expect(htmlelement.textContent).toBe('Votes:1')
  })
  it("should decrese by 1(in view) when - is clicked",()=>{

    component.downvote()
    fixture.detectChanges()

    DebugElement = fixture.debugElement.query(By.css('p'))
    htmlelement = DebugElement.nativeElement

    // assert
    expect(htmlelement.textContent).toBe('Votes:-1')
  })

  it("click + button to invoke upvote", ()=>{
    const clickonPlus = spyOn(component,'downvote')
    fixture.debugElement.query(By.css('#minus')).triggerEventHandler('click',null)
    fixture.detectChanges()
    expect(clickonPlus).toHaveBeenCalled()
  })
});
