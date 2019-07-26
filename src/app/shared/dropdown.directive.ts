import { Directive, HostBinding, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  @HostListener('document:click', ['$event']) toggleOpen(event: Event){
    this.isOpen = this.elRel.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  constructor(private elRel: ElementRef) { }

}
