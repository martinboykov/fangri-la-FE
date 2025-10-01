import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArtistTabChatComponent } from './chat.component';

describe('ArtistTabChatComponent', () => {
  let component: ArtistTabChatComponent;
  let fixture: ComponentFixture<ArtistTabChatComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistTabChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
