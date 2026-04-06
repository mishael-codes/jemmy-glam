import { X } from "lucide-react";
import { useEffect } from "react";

interface PriceListModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PriceListModal({ isOpen, onClose }: PriceListModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl p-6 md:p-10 animate-in fade-in zoom-in-95 duration-200">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-muted transition-colors"
          aria-label="Close modal"
        >
          <X className="w-6 h-6 text-foreground" />
        </button>

        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-3">Price List</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          
          {/* Gel Nails */}
          <div className="bg-secondary/30 p-6 rounded-2xl border border-secondary">
            <h3 className="text-2xl font-semibold mb-6 text-center text-primary">Gel Nails <span className="text-lg font-normal text-muted-foreground">(plain)</span></h3>
            <ul className="space-y-4">
              <li className="flex justify-between items-center border-b border-border/50 pb-2">
                <span className="font-medium">Short</span>
                <span className="font-semibold text-primary">&#8358;4,000</span>
              </li>
              <li className="flex justify-between items-center border-b border-border/50 pb-2">
                <span className="font-medium">Medium</span>
                <span className="font-semibold text-primary">&#8358;6,000</span>
              </li>
              <li className="flex justify-between items-center border-b border-border/50 pb-2">
                <span className="font-medium">Long</span>
                <span className="font-semibold text-primary">&#8358;7,000</span>
              </li>
              <li className="flex justify-between items-center border-b border-border/50 pb-2">
                <span className="font-medium">XL</span>
                <span className="font-semibold text-primary">&#8358;8,000</span>
              </li>
              <li className="flex justify-between items-center pt-1">
                <span className="font-medium">On natural nails</span>
                <span className="font-semibold text-primary">&#8358;2,000</span>
              </li>
            </ul>
          </div>

          {/* Acrylic Nails */}
          <div className="bg-secondary/30 p-6 rounded-2xl border border-secondary">
            <h3 className="text-2xl font-semibold mb-6 text-center text-primary">Acrylic Nails <span className="text-lg font-normal text-muted-foreground">(plain)</span></h3>
            <ul className="space-y-4">
              <li className="flex justify-between items-center border-b border-border/50 pb-2">
                <span className="font-medium">Short</span>
                <span className="font-semibold text-primary">&#8358;6,000</span>
              </li>
              <li className="flex justify-between items-center border-b border-border/50 pb-2">
                <span className="font-medium">Medium</span>
                <span className="font-semibold text-primary">&#8358;8,000</span>
              </li>
              <li className="flex justify-between items-center border-b border-border/50 pb-2">
                <span className="font-medium">Long</span>
                <span className="font-semibold text-primary">&#8358;10,000</span>
              </li>
              <li className="flex justify-between items-center border-b border-border/50 pb-2">
                <span className="font-medium">XL</span>
                <span className="font-semibold text-primary">&#8358;12,000</span>
              </li>
              <li className="flex justify-between items-center pt-1">
                <span className="font-medium">XXL</span>
                <span className="font-semibold text-primary">&#8358;15,000</span>
              </li>
            </ul>
          </div>

          {/* Toes */}
          <div className="bg-secondary/30 p-6 rounded-2xl border border-secondary">
            <h3 className="text-2xl font-semibold mb-6 text-center text-primary">Toes</h3>
            <ul className="space-y-4">
              <li className="flex justify-between items-center border-b border-border/50 pb-2">
                <span className="font-medium">Fixing of big toe</span>
                <span className="font-semibold text-primary">&#8358;2,500</span>
              </li>
              <li className="flex justify-between items-center border-b border-border/50 pb-2">
                <span className="font-medium">Fixing of all toes</span>
                <span className="font-semibold text-primary">&#8358;3,500</span>
              </li>
              <li className="flex justify-between items-center border-b border-border/50 pb-2">
                <span className="font-medium">Painting of toe nails</span>
                <span className="font-semibold text-primary">&#8358;2,000</span>
              </li>
              <li className="flex justify-between items-center border-b border-border/50 pb-2">
                <span className="font-medium">Plain</span>
                <span className="font-semibold text-primary">&#8358;4,000</span>
              </li>
              <li className="flex justify-between items-center pt-1">
                <span className="font-medium">French tips / Artwork</span>
                <span className="font-semibold text-primary">&#8358;6,000</span>
              </li>
            </ul>
          </div>

          {/* Add-ons/Extra Charges */}
          <div className="bg-secondary/30 p-6 rounded-2xl border border-secondary">
            <h3 className="text-2xl font-semibold mb-6 text-center text-primary">Add-Ons / Extra</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
              <div className="flex justify-between items-center border-b border-border/50 pb-2">
                <span className="font-medium">Nail Art</span>
                <span className="font-semibold text-primary">&#8358;1,000</span>
              </div>
              <div className="flex justify-between items-center border-b border-border/50 pb-2">
                <span className="font-medium">3D Art</span>
                <span className="font-semibold text-primary">&#8358;1,000</span>
              </div>
              <div className="flex justify-between items-center border-b border-border/50 pb-2">
                <span className="font-medium">Chrome</span>
                <span className="font-semibold text-primary">&#8358;1,000</span>
              </div>
              <div className="flex justify-between items-center border-b border-border/50 pb-2">
                <span className="font-medium">Ombre / Aura</span>
                <span className="font-semibold text-primary">&#8358;1,000</span>
              </div>
              <div className="flex justify-between items-center border-b border-border/50 pb-2">
                <span className="font-medium">French tips</span>
                <span className="font-semibold text-primary">&#8358;2,000</span>
              </div>
              <div className="flex justify-between items-center border-b border-border/50 pb-2">
                <span className="font-medium text-sm sm:text-base">Gems / Charms</span>
                <span className="font-semibold text-primary whitespace-nowrap">&#8358;1k-4k</span>
              </div>
              <div className="flex justify-between items-center border-b border-border/50 pb-2">
                <span className="font-medium">Soak Off</span>
                <span className="font-semibold text-primary">&#8358;2,000</span>
              </div>
              <div className="flex justify-between items-center pb-1">
                <span className="font-medium">Short Refill</span>
                <span className="font-semibold text-primary">&#8358;3,000</span>
              </div>
              <div className="flex justify-between items-center sm:col-span-2 pt-1 border-t border-border/50">
                <span className="font-medium">Medium Refill</span>
                <span className="font-semibold text-primary">&#8358;4,000</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-muted-foreground italic max-w-lg mx-auto">
            * Further changes might be made soon. Right now our nail sets are very affordable!
          </p>
        </div>

      </div>
    </div>
  );
}
