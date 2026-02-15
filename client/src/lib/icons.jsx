import {
  Target, Workflow, PenTool, FileText, MessageSquare, Calendar,
  Send, Share2, ClipboardList, Store, CreditCard, Headphones,
  Bot, BookOpen, Receipt, Wallet, Mail, Video, FileEdit,
  Users, UserPlus, Lock, Shield, Monitor, BarChart3,
  FolderKanban, Zap, Code, Globe, Wifi, TrendingUp,
  Megaphone, ShoppingCart, DollarSign, Scale, ChevronRight,
  ChevronDown, Search, Menu, X, ArrowRight, Check,
  Star, Phone, MapPin, Clock, Play, Layers, ExternalLink,
  Building2, Heart, Award, Sparkles
} from "lucide-react";

const iconMap = {
  Target, Workflow, PenTool, FileText, MessageSquare, Calendar,
  Send, Share2, ClipboardList, Store, CreditCard, Headphones,
  Bot, BookOpen, Receipt, Wallet, Mail, Video, FileEdit,
  Users, UserPlus, Lock, Shield, Monitor, BarChart3,
  FolderKanban, Zap, Code, Globe, Wifi, TrendingUp,
  Megaphone, ShoppingCart, DollarSign, Scale, ChevronRight,
  ChevronDown, Search, Menu, X, ArrowRight, Check,
  Star, Phone, MapPin, Clock, Play, Layers, ExternalLink,
  Building2, Heart, Award, Sparkles
};

export function DynamicIcon({ name, ...props }) {
  const IconComponent = iconMap[name];
  if (!IconComponent) return <div className="w-5 h-5" />;
  return <IconComponent {...props} />;
}

export {
  Target, Workflow, PenTool, FileText, MessageSquare, Calendar,
  Send, Share2, ClipboardList, Store, CreditCard, Headphones,
  Bot, BookOpen, Receipt, Wallet, Mail, Video, FileEdit,
  Users, UserPlus, Lock, Shield, Monitor, BarChart3,
  FolderKanban, Zap, Code, Globe, Wifi, TrendingUp,
  Megaphone, ShoppingCart, DollarSign, Scale, ChevronRight,
  ChevronDown, Search, Menu, X, ArrowRight, Check,
  Star, Phone, MapPin, Clock, Play, Layers, ExternalLink,
  Building2, Heart, Award, Sparkles
};
