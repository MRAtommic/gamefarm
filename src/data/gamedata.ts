/* ========================================================
   ฟาร์มสุขใจ (Happy Farm 2D) - Stardew Valley Style
   Game Data & Configuration (Typed TypeScript Module)
   ======================================================== */

import {
  CropData,
  AnimalData,
  RecipeData,
  ToolData,
  UpgradeData,
  DemonBugData,
  WeaponData,
  HunterData,
  FarmHelperData,
  MaterialItem,
  WorldMonsterData,
  BossData,
  QuestData,
  StoryNPCData,
  ForgeRecipe,
  NPCCustomerData,
  FishData,
  BountyData
} from '../types';

export const CROPS: Record<string, CropData> = {
  wheat: { id: 'wheat', name: 'ข้าวสาลี', seedName: 'เมล็ดข้าวสาลี', buyPrice: 10, sellPrice: 20, growDays: 2, xp: 4, levelReq: 1, category: 'grain' },
  carrot: { id: 'carrot', name: 'แครอท', seedName: 'เมล็ดแครอท', buyPrice: 15, sellPrice: 32, growDays: 2, xp: 6, levelReq: 1, category: 'vegetable' },
  potato: { id: 'potato', name: 'มันฝรั่ง', seedName: 'เมล็ดมันฝรั่ง', buyPrice: 18, sellPrice: 40, growDays: 2, xp: 7, levelReq: 1, category: 'vegetable' },
  corn: { id: 'corn', name: 'ข้าวโพด', seedName: 'เมล็ดข้าวโพด', buyPrice: 20, sellPrice: 45, growDays: 3, xp: 8, levelReq: 2, category: 'grain' },
  tomato: { id: 'tomato', name: 'มะเขือเทศ', seedName: 'เมล็ดมะเขือเทศ', buyPrice: 25, sellPrice: 55, growDays: 3, xp: 10, levelReq: 2, category: 'vegetable' },
  strawberry: { id: 'strawberry', name: 'สตรอเบอร์รี่', seedName: 'เมล็ดสตรอเบอร์รี่', buyPrice: 35, sellPrice: 80, growDays: 4, xp: 14, levelReq: 3, category: 'fruit' },
  pumpkin: { id: 'pumpkin', name: 'ฟักทอง', seedName: 'เมล็ดฟักทอง', buyPrice: 40, sellPrice: 95, growDays: 4, xp: 16, levelReq: 4, category: 'vegetable' },
  sunflower: { id: 'sunflower', name: 'ทานตะวัน', seedName: 'เมล็ดทานตะวัน', buyPrice: 30, sellPrice: 70, growDays: 3, xp: 12, levelReq: 3, category: 'flower' },
  rice: { id: 'rice', name: 'ข้าวเปลือก', seedName: 'เมล็ดข้าว', buyPrice: 12, sellPrice: 25, growDays: 2, xp: 5, levelReq: 2, category: 'grain' },
  cabbage: { id: 'cabbage', name: 'กะหล่ำปลี', seedName: 'เมล็ดกะหล่ำ', buyPrice: 22, sellPrice: 48, growDays: 3, xp: 9, levelReq: 3, category: 'vegetable' },
  chili: { id: 'chili', name: 'พริก', seedName: 'เมล็ดพริก', buyPrice: 28, sellPrice: 62, growDays: 3, xp: 11, levelReq: 4, category: 'vegetable' },
  sugarcane: { id: 'sugarcane', name: 'อ้อย', seedName: 'ท่อนอ้อย', buyPrice: 18, sellPrice: 40, growDays: 3, xp: 8, levelReq: 3, category: 'grain' },
  pineapple: { id: 'pineapple', name: 'สับปะรดทองคำ', seedName: 'หน่อสับปะรด', buyPrice: 50, sellPrice: 135, growDays: 4, xp: 22, levelReq: 3, category: 'fruit' },
  coconut: { id: 'coconut', name: 'มะพร้าวน้ำหอม', seedName: 'ลูกมะพร้าวเพาะชำ', buyPrice: 60, sellPrice: 150, growDays: 4, xp: 25, levelReq: 3, category: 'fruit' },
  banana: { id: 'banana', name: 'กล้วยหอมทอง (Golden Banana)', seedName: 'หน่อกล้วยทอง', buyPrice: 55, sellPrice: 140, growDays: 3, xp: 20, levelReq: 3, category: 'fruit' },
  golden_melon: { id: 'golden_melon', name: 'เมลอนทองคำเกาะโจรสลัด', seedName: 'เมล็ดเมลอนทองคำ', buyPrice: 120, sellPrice: 420, growDays: 5, xp: 45, levelReq: 4, category: 'fruit' },
  starfruit: { id: 'starfruit', name: 'ผลไม้ดวงดาวแคริบเบียน', seedName: 'เมล็ดผลไม้ดาว', buyPrice: 150, sellPrice: 550, growDays: 6, xp: 60, levelReq: 5, category: 'fruit' },
  cosmic_fruit: { id: 'cosmic_fruit', name: 'ผลไม้ดวงดาวจักรวาล', seedName: 'เมล็ดพันธุ์ดาราจักร', buyPrice: 400, sellPrice: 920, growDays: 5, xp: 85, levelReq: 5, category: 'fruit' }
};

export const ANIMALS: Record<string, AnimalData> = {
  chicken: { id: 'chicken', name: 'ไก่', buyPrice: 150, product: 'egg', productName: 'ไข่ไก่', productPrice: 25, xp: 6, levelReq: 1, feedType: 'corn' },
  cow: { id: 'cow', name: 'วัวนม', buyPrice: 350, product: 'milk', productName: 'นมวัวสด', productPrice: 50, xp: 12, levelReq: 2, feedType: 'wheat' },
  sheep: { id: 'sheep', name: 'แกะ', buyPrice: 450, product: 'wool', productName: 'ขนแกะ', productPrice: 75, xp: 16, levelReq: 3, feedType: 'wheat' },
  pig: { id: 'pig', name: 'หมู', buyPrice: 500, product: 'truffle', productName: 'เห็ดทรัฟเฟิลดำ', productPrice: 120, xp: 20, levelReq: 4, feedType: 'carrot' }
};

export const RECIPES: Record<string, RecipeData> = {
  flour: { id: 'flour', name: 'แป้งทำขนม', category: 'mill', ingredients: { wheat: 2 }, sellPrice: 35, xp: 8, levelReq: 1 },
  bread: { id: 'bread', name: 'ขนมปังอบสด', category: 'bakery', ingredients: { flour: 2 }, sellPrice: 85, energyRestore: 40, xp: 15, levelReq: 2 },
  butter: { id: 'butter', name: 'เนยสด', category: 'dairy', ingredients: { milk: 2 }, sellPrice: 75, xp: 12, levelReq: 2 },
  cheese: { id: 'cheese', name: 'ชีสแท้', category: 'dairy', ingredients: { milk: 3 }, sellPrice: 120, energyRestore: 50, xp: 20, levelReq: 3 },
  cake: { id: 'cake', name: 'เค้กสตรอเบอร์รี่', category: 'bakery', ingredients: { flour: 2, egg: 2, milk: 1, strawberry: 2 }, sellPrice: 320, energyRestore: 90, xp: 45, levelReq: 4 },
  cookie: { id: 'cookie', name: 'คุกกี้เนย', category: 'bakery', ingredients: { flour: 1, butter: 1, egg: 1 }, sellPrice: 140, energyRestore: 35, xp: 18, levelReq: 3 },
  pizza: { id: 'pizza', name: 'พิซซ่าถาดใหญ่', category: 'kitchen', ingredients: { flour: 2, tomato: 2, cheese: 1 }, sellPrice: 360, energyRestore: 100, xp: 50, levelReq: 5 },
  demon_elixir: { id: 'demon_elixir', name: 'น้ำยาบำรุงพลังปีศาจ', category: 'kitchen', ingredients: { beetle_shell: 1, demon_wing: 1, strawberry: 1 }, sellPrice: 280, energyRestore: 85, xp: 35, levelReq: 2 },
  antidote_serum: { id: 'antidote_serum', name: 'เซรุ่มต้านสปอร์พิษ', category: 'kitchen', ingredients: { blight_spore: 2, starflower_herb: 1 }, sellPrice: 160, energyRestore: 50, xp: 30, levelReq: 1 },
  grilled_fish: { id: 'grilled_fish', name: 'ปลาย่างเนยสด', category: 'kitchen', ingredients: { tilapia: 1, butter: 1 }, sellPrice: 160, energyRestore: 65, xp: 22, levelReq: 2 },
  spicy_fish_soup: { id: 'spicy_fish_soup', name: 'ต้มยำปลารสเด็ด', category: 'kitchen', ingredients: { catfish: 1, chili: 2, tomato: 1 }, sellPrice: 240, energyRestore: 95, xp: 35, levelReq: 3 },
  farmer_stew: { id: 'farmer_stew', name: 'สตูว์เนื้อผักรวมพลังใจชาวสวน', category: 'kitchen', ingredients: { potato: 2, carrot: 2, aged_cheese: 1 }, sellPrice: 280, energyRestore: 120, xp: 45, levelReq: 3 },
  vigor_juice: { id: 'vigor_juice', name: 'น้ำผลไม้วิเศษสายลมว่องไว', category: 'kitchen', ingredients: { strawberry: 2, frost_berry: 1, craft_ale: 1 }, sellPrice: 250, energyRestore: 100, xp: 40, levelReq: 3 },
  herbal_defense_soup: { id: 'herbal_defense_soup', name: 'ซุปสมุนไพรเกราะพฤกษาคุ้มภัย', category: 'kitchen', ingredients: { starflower_herb: 2, swamp_herb: 2, milk: 1 }, sellPrice: 320, energyRestore: 100, xp: 50, levelReq: 4 },
  parry_master_broth: { id: 'parry_master_broth', name: 'ซุปสมาธิอัศวิน (Parry Master Broth)', category: 'kitchen', ingredients: { carrot: 3, tilapia: 1, milk: 1 }, sellPrice: 380, energyRestore: 120, xp: 55, levelReq: 3 },
  ironhide_dragon_steak: { id: 'ironhide_dragon_steak', name: 'สเต๊กเกราะศิลา (Ironhide Steak)', category: 'kitchen', ingredients: { potato: 3, aged_cheese: 1, butter: 1 }, sellPrice: 420, energyRestore: 140, xp: 60, levelReq: 4 },
  stamina_surge_pie: { id: 'stamina_surge_pie', name: 'พายวายุคลั่ง (Stamina Surge Pie)', category: 'kitchen', ingredients: { flour: 2, strawberry: 2, egg: 2 }, sellPrice: 390, energyRestore: 110, xp: 50, levelReq: 3 },
  sacred_purification_tea: { id: 'sacred_purification_tea', name: 'ชาเทวะชำระมลทิน (Purification Tea)', category: 'kitchen', ingredients: { starflower_herb: 2, star_fruit: 1, milk: 1 }, sellPrice: 460, energyRestore: 150, xp: 65, levelReq: 4 },
  crab_cakes: { id: 'crab_cakes', name: 'ทอดมันปูยักษ์เกาะสมบัติ (Crab Cakes)', category: 'kitchen', ingredients: { crab_meat: 2, flour: 1, egg: 1 }, sellPrice: 380, energyRestore: 130, xp: 50, levelReq: 3 },
  tropical_smoothie: { id: 'tropical_smoothie', name: 'สมูทตี้ผลไม้รวมเขตร้อน (Tropical Smoothie)', category: 'kitchen', ingredients: { pineapple: 1, banana: 1, coconut: 1 }, sellPrice: 340, energyRestore: 120, xp: 45, levelReq: 3 },
  titan_elixir: { id: 'titan_elixir', name: 'น้ำยาเทวะสยบศึก (Titan Elixir)', category: 'kitchen', ingredients: { strawberry: 2, blight_spore: 2, aged_cheese: 1 }, sellPrice: 480, energyRestore: 150, xp: 75, levelReq: 4 },
  swiftfoot_tonic: { id: 'swiftfoot_tonic', name: 'ยาบำรุงสายลมคลั่ง (Swiftfoot Tonic)', category: 'kitchen', ingredients: { pineapple: 2, banana: 2, craft_ale: 1 }, sellPrice: 420, energyRestore: 130, xp: 60, levelReq: 3 },
  ironbark_brew: { id: 'ironbark_brew', name: 'โอสถปราการศิลา (Ironbark Brew)', category: 'kitchen', ingredients: { potato: 3, swamp_herb: 2, beetle_shell: 1 }, sellPrice: 450, energyRestore: 140, xp: 70, levelReq: 4 },

  // สิ่งประดิษฐ์งานช่าง & กล่องเก็บของ & อัปเกรดกระเป๋า
  chest: { id: 'chest', name: 'กล่องเก็บของไม้ (Storage Chest)', category: 'carpentry', ingredients: { wood: 20 }, sellPrice: 50, xp: 15, levelReq: 1 },
  axe: { id: 'axe', name: 'ขวานตัดไม้ (Woodcutter Axe)', category: 'carpentry', ingredients: { wood: 10, iron_ore: 1 }, sellPrice: 80, xp: 20, levelReq: 1 },
  backpack_upgrade_1: { id: 'backpack_upgrade_1', name: 'กระเป๋าเป้นักเดินทาง (+12 ช่อง -> รวม 48 ช่อง)', category: 'carpentry', ingredients: { wood: 20 }, sellPrice: 0, xp: 35, levelReq: 1 },
  backpack_upgrade_2: { id: 'backpack_upgrade_2', name: 'กระเป๋าเป้จอมผจญภัย (+12 ช่อง -> รวม 60 ช่อง)', category: 'carpentry', ingredients: { wood: 40, iron_ore: 2 }, sellPrice: 0, xp: 60, levelReq: 2 },

  // ระบบฟาร์มอัตโนมัติ (Automated Sprinklers)
  sprinkler_basic: { id: 'sprinkler_basic', name: 'สปริงเกอร์รดน้ำพื้นฐาน (รด 4 ช่องติดกัน)', category: 'carpentry', ingredients: { copper_ore: 4, iron_ore: 1 }, sellPrice: 120, xp: 25, levelReq: 1 },
  sprinkler_quality: { id: 'sprinkler_quality', name: 'สปริงเกอร์รดน้ำคุณภาพสูง (รด 8 ช่อง 3x3)', category: 'carpentry', ingredients: { iron_ore: 4, gold_ore: 2 }, sellPrice: 280, xp: 50, levelReq: 2 },

  // เครื่องแปรรูปผลผลิต (Artisan Processing Machines)
  mayo_machine: { id: 'mayo_machine', name: 'เครื่องทำมายองเนส (Mayonnaise Machine)', category: 'carpentry', ingredients: { wood: 15, stone: 10, copper_ore: 2 }, sellPrice: 150, xp: 30, levelReq: 1 },
  cheese_press: { id: 'cheese_press', name: 'เครื่องอัดชีสแท้ (Cheese Press)', category: 'carpentry', ingredients: { wood: 20, stone: 15 }, sellPrice: 160, xp: 30, levelReq: 1 },
  preserves_jar: { id: 'preserves_jar', name: 'ถังหมักแยม & ผักดอง (Preserves Jar)', category: 'carpentry', ingredients: { wood: 25, stone: 15, iron_ore: 2 }, sellPrice: 220, xp: 35, levelReq: 2 },
  wine_keg: { id: 'wine_keg', name: 'ถังบ่มไวน์และเอลโบราณ (Wine & Ale Keg)', category: 'carpentry', ingredients: { wood: 35, iron_ore: 3, copper_ore: 2 }, sellPrice: 320, xp: 50, levelReq: 3 },

  // ม้าพาหนะ & สัตว์เลี้ยงคู่ใจ (Mount & Pets)
  horse_whistle: { id: 'horse_whistle', name: 'นกหวีดเรียกม้าคู่ใจ (ขี่ม้าวิ่งเร็ว +65%)', category: 'carpentry', ingredients: { wood: 10, iron_ore: 2, ruby_gem: 1 }, sellPrice: 0, xp: 60, levelReq: 1 },
  pet_basket: { id: 'pet_basket', name: 'เบาะสัตว์เลี้ยงคู่หู (รับเลี้ยงน้องหมา/แมว)', category: 'carpentry', ingredients: { wood: 15, wool: 2 }, sellPrice: 0, xp: 40, levelReq: 1 },

  // สิ่งปลูกสร้างและตกแต่งฟาร์ม (Farm Building & Decor)
  wood_fence: { id: 'wood_fence', name: 'รั้วไม้กั้นคอก (Wood Fence x4)', category: 'carpentry', ingredients: { wood: 5 }, sellPrice: 20, xp: 8, levelReq: 1 },
  stone_fence: { id: 'stone_fence', name: 'รั้วหินแกรนิต (Stone Fence x4)', category: 'carpentry', ingredients: { stone: 5 }, sellPrice: 32, xp: 10, levelReq: 1 },
  stone_path: { id: 'stone_path', name: 'ทางเดินหินปูพื้น (Cobblestone Path x4 - วิ่งเร็ว +15%)', category: 'carpentry', ingredients: { stone: 4 }, sellPrice: 16, xp: 6, levelReq: 1 },
  wood_path: { id: 'wood_path', name: 'ทางเดินไม้กระดาน (Plank Path x4 - วิ่งเร็ว +10%)', category: 'carpentry', ingredients: { wood: 4 }, sellPrice: 12, xp: 5, levelReq: 1 },
  farm_lantern: { id: 'farm_lantern', name: 'โคมไฟเสาไม้โบราณ (Farm Lantern)', category: 'carpentry', ingredients: { wood: 10, iron_ore: 1, copper_ore: 1 }, sellPrice: 40, xp: 15, levelReq: 1 },
  windmill_kit: { id: 'windmill_kit', name: 'ชุดสร้างกังหันลม (Windmill Kit - บดแป้ง/น้ำตาลเร็ว x2)', category: 'carpentry', ingredients: { wood: 40, stone: 30, iron_ore: 4 }, sellPrice: 500, xp: 80, levelReq: 2 },
  silo_kit: { id: 'silo_kit', name: 'ชุดสร้างไซโลเก็บเสบียง (Silo Kit - ให้อาหารสัตว์อัตโนมัติ)', category: 'carpentry', ingredients: { stone: 50, iron_ore: 4, copper_ore: 4 }, sellPrice: 600, xp: 90, levelReq: 2 },
  fish_tank: { id: 'fish_tank', name: 'ตู้จัดแสดงปลาในบ้าน (Fish Tank)', category: 'carpentry', ingredients: { stone: 25, iron_ore: 3, mana_gem: 1 }, sellPrice: 300, xp: 50, levelReq: 2 }
};

export const TOOLS: ToolData[] = [
  { id: 'hoe', name: 'จอบดายหญ้า', desc: 'ใช้พรวนดินเพื่อเตรียมแปลงปลูก (กด Space / คลิก)', energyCost: 2 },
  { id: 'water', name: 'บัวรดน้ำ', desc: 'รดน้ำแปลงดินที่พรวนแล้ว (เติมน้ำได้ที่บ่อน้ำ)', energyCost: 1 },
  { id: 'scythe', name: 'เคียว / มือเปล่า', desc: 'เก็บเกี่ยวผลผลิตที่สุกแล้ว หรือโต้ตอบสัตว์', energyCost: 1 },
  { id: 'axe', name: 'ขวานตัดไม้', desc: 'ใช้ตัดต้นไม้เพื่อเก็บท่อนไม้และผลโอ๊ค (กด Space / คลิก ที่ต้นไม้)', energyCost: 2 },
  { id: 'pickaxe', name: 'อีเต๋อขุดแร่ (Pickaxe)', desc: 'ใช้ขุดทุบหินและสกัดแร่ธาตุ/อัญมณีในถ้ำลึกและภูเขาไฟ', energyCost: 4 },
  { id: 'fishing_rod', name: 'คันเบ็ดไม้ไผ่', desc: 'เหวี่ยงเบ็ดริมน้ำเพื่อจับปลา (กด Space / คลิก เมื่อหันหน้าเข้าน้ำ)', energyCost: 2 }
];

export const FISH: Record<string, FishData> = {
  carp: { id: 'carp', name: 'ปลาคาร์ปหางยาว', sellPrice: 40, xp: 8, difficulty: 1, desc: 'ปลาเกล็ดทองประกาย พบได้ทั่วไปในบ่อน้ำฟาร์ม', habitat: 'pond' },
  tilapia: { id: 'tilapia', name: 'ปลานิลแม่น้ำ', sellPrice: 55, xp: 12, difficulty: 2, desc: 'ปลานิลตัวอ้วน เนื้อแน่นหวาน นิยมนำไปย่าง', habitat: 'any' },
  catfish: { id: 'catfish', name: 'ปลาดุกยักษ์', sellPrice: 80, xp: 18, difficulty: 3, desc: 'ปลาดุกหนวดยาว ว่ายน้ำเร็วและดิ้นแรงมาก', habitat: 'pond' },
  golden_salmon: { id: 'golden_salmon', name: 'ปลาแซลมอนสีทอง', sellPrice: 150, xp: 30, difficulty: 4, desc: 'ปลาหายาก ว่ายทวนน้ำในลำธารป่าลึก', habitat: 'river' },
  ancient_glowfish: { id: 'ancient_glowfish', name: 'ปลาเรืองแสงโบราณ', sellPrice: 320, xp: 60, difficulty: 5, desc: 'ปลาในตำนานที่เรืองแสงสีฟ้าคราม นำโชคลาภมาสู่ผู้ครอบครอง', habitat: 'river' },
  clownfish: { id: 'clownfish', name: 'ปลาการ์ตูนนีโม่', sellPrice: 85, xp: 16, difficulty: 2, desc: 'ปลาทะเลเขตร้อนลายส้มสลับขาว ว่ายตามแนวปะการังเกาะ', habitat: 'ocean' },
  lionfish: { id: 'lionfish', name: 'ปลาสิงโตครีบเพลิง', sellPrice: 135, xp: 26, difficulty: 3, desc: 'ปลาทะเลครีบหนามแหลมคม ลวดลายงดงามดั่งเปลวไฟ', habitat: 'ocean' },
  manta_ray: { id: 'manta_ray', name: 'ปลากระเบนราหูยักษ์', sellPrice: 260, xp: 50, difficulty: 4, desc: 'กระเบนทะเลลึกตัวมหึมา ร่อนใต้เกลียวคลื่นอย่างสง่างาม', habitat: 'ocean' },
  hammerhead_shark: { id: 'hammerhead_shark', name: 'ฉลามหัวค้อนเกาะสมบัติ', sellPrice: 700, xp: 130, difficulty: 5, desc: 'ราชันแห่งท้องทะเลเขตร้อน ฉลามในตำนานที่เฝ้าซากเรืออับปางโจรสลัด', habitat: 'ocean' }
};

export const UPGRADES: Record<string, UpgradeData> = {
  watering_can_pro: { id: 'watering_can_pro', name: 'บัวรดน้ำทองแดง', price: 600, desc: 'บรรจุน้ำได้มากขึ้น 2 เท่า และรดได้กว้างขึ้น', levelReq: 2 },
  backpack_1: { id: 'backpack_1', name: 'กระเป๋าเป้หนัง (+12 ช่อง)', price: 900, desc: 'เพิ่มความจุช่องเก็บของ', levelReq: 2 },
  coop_expansion: { id: 'coop_expansion', name: 'ขยายโรงเลี้ยงสัตว์ (+4 ตัว)', price: 1400, desc: 'เลี้ยงสัตว์ในฟาร์มได้เพิ่มขึ้น', levelReq: 3 },
  auto_sprinkler: { id: 'auto_sprinkler', name: 'สปริงเกอร์รดน้ำ', price: 1800, desc: 'รดน้ำอัตโนมัติทุกเช้า 4 ช่องรอบตัว', levelReq: 4 }
};

export const LEVEL_XP: number[] = [
  0, 0, 120, 300, 600, 1000, 1600, 2400, 3500, 5000,
  7000, 9500, 12500, 16000, 20000, 25000, 31000, 38000, 46000, 55000,
  65000, 76000, 88000, 101000, 115000, 130000
];

export const SEASONS = ['ฤดูใบไม้ผลิ', 'ฤดูร้อน', 'ฤดูใบไม้ร่วง', 'ฤดูหนาว'];
export const DAYS_PER_SEASON = 28;

export const HOUSE_DECOR_UPGRADES: Record<string, UpgradeData> = {
  bed_deluxe: {
    id: 'bed_deluxe',
    name: 'เตียงขนนกหรูหรา (Deluxe Bed)',
    price: 1500,
    desc: 'เตียงคิงไซส์ เพิ่ม Max Energy ถาวร +30 (สูงสุด 130) และฟื้นฟูเต็ม 100% ทุกเช้า',
    effectType: 'maxEnergy',
    value: 30
  },
  fireplace: {
    id: 'fireplace',
    name: 'เตาผิงหินโบราณ (Stone Fireplace)',
    price: 1800,
    desc: 'เตาผิงก่อหินให้ความอบอุ่นทั่วบ้าน ลดการเสียพลังงานในการทำงานลง 20%',
    effectType: 'energySave',
    value: 0.2
  },
  refrigerator: {
    id: 'refrigerator',
    name: 'ตู้เย็นถนอมอาหาร (Modern Fridge)',
    price: 1200,
    desc: 'ตู้เย็นสีพาสเทล อาหารที่รับประทานฟื้นพลังงานเพิ่มขึ้น +50%',
    effectType: 'foodBoost',
    value: 0.5
  },
  tea_table: {
    id: 'tea_table',
    name: 'ชุดโต๊ะน้ำชาไม้สัก (Oak Tea Table)',
    price: 900,
    desc: 'โต๊ะกลมพร้อมกาน้ำชา ฟื้นฟูพลังงานอัตโนมัติ 1 หน่วยทุก 10 วินาทีเมื่ออยู่ในบ้าน',
    effectType: 'homeRegen',
    value: 1
  },
  persian_rug: {
    id: 'persian_rug',
    name: 'พรมทอมือเปอร์เซีย (Royal Rug)',
    price: 750,
    desc: 'พรมหรูหรากลางห้อง เพิ่มความเร็วเดินในบ้าน +30% และเพิ่มค่า XP จากการทำฟาร์มทั้งหมด +15%',
    effectType: 'xpBoost',
    value: 0.15
  }
};

export const OUTFIT_OPTIONS = {
  hats: [
    { id: 'straw', name: 'หมวกฟางชาวสวน' },
    { id: 'cowboy', name: 'หมวกคาวบอยหนัง' },
    { id: 'chef', name: 'หมวกเชฟกุ๊ก' },
    { id: 'flower', name: 'มงกุฎดอกไม้ป่า' },
    { id: 'cap', name: 'หมวกแก๊ปสีแดง' },
    { id: 'none', name: 'ไม่สวมหมวก' }
  ],
  shirts: [
    { id: '#3b82f6', name: 'ฟ้าคลาสสิก' },
    { id: '#dc2626', name: 'แดงสดใส' },
    { id: '#16a34a', name: 'เขียวธรรมชาติ' },
    { id: '#1e293b', name: 'ดำพรีเมียม' },
    { id: '#ec4899', name: 'ชมพูหวาน' },
    { id: '#f59e0b', name: 'เหลืองทอง' },
    { id: '#8b5cf6', name: 'ม่วงลาเวนเดอร์' }
  ],
  overalls: [
    { id: '#1e3a8a', name: 'ยีนส์น้ำเงิน' },
    { id: '#78350f', name: 'น้ำตาลคลาสสิก' },
    { id: '#1e293b', name: 'ดำสุภาพ' },
    { id: '#3f6212', name: 'เขียวมะกอก' }
  ],
  hairs: [
    { id: '#78350f', name: 'น้ำตาลธรรมชาติ' },
    { id: '#1e293b', name: 'ดำสนิท' },
    { id: '#eab308', name: 'บลอนด์ทอง' },
    { id: '#dc2626', name: 'แดงส้มสดใส' },
    { id: '#94a3b8', name: 'สีเงินประกาย' }
  ]
};

export const NPC_CUSTOMERS: NPCCustomerData[] = [
  { id: 'uncle', name: 'คุณลุงทอง', desc: 'ชอบซื้อข้าวสาลีและผักสด', type: 'uncle' },
  { id: 'auntie', name: 'คุณป้าแก้ว', desc: 'ชอบซื้อผลไม้ ไข่ไก่ และนมสด', type: 'auntie' },
  { id: 'girl', name: 'น้องมะลิ', desc: 'ชอบซื้อสตรอเบอร์รี่ ขนมปัง และชีส', type: 'girl' },
  { id: 'chef', name: 'เชฟมิกซ์', desc: 'ชอบซื้อวัตถุดิบทำอาหารคุณภาพสูง', type: 'chef' }
];

export const DEMON_BUGS: Record<string, DemonBugData> = {
  shadow_beetle: {
    id: 'shadow_beetle',
    name: 'ด้วงปีศาจทมิฬ',
    desc: 'คลานเข้ามากัดกินแปลงผัก มีกระดองแข็งแกร่ง',
    hp: 60,
    speed: 1.1,
    damage: 10,
    attackCooldown: 1200,
    targetType: 'crop',
    loot: { gold: 20, item: 'beetle_shell', name: 'กระดองด้วงปีศาจ', xp: 18 }
  },
  demon_hornet: {
    id: 'demon_hornet',
    name: 'ต่อปีศาจเหล็กในพิษ',
    desc: 'บินฉวัดเฉวียนรวดเร็ว มุ่งเข้ามารังแกสัตว์เลี้ยงในคอก',
    hp: 40,
    speed: 1.8,
    damage: 8,
    attackCooldown: 900,
    targetType: 'animal',
    loot: { gold: 25, item: 'demon_wing', name: 'ปีกต่อปีศาจ', xp: 22 }
  },
  poison_larva: {
    id: 'poison_larva',
    name: 'หนอนพิษดูดกลืนพืช',
    desc: 'หนอนปีศาจตัวอ้วน พ่นกรดพิษกัดกร่อนแปลงผัก',
    hp: 85,
    speed: 0.8,
    damage: 15,
    attackCooldown: 1600,
    targetType: 'crop',
    loot: { gold: 35, item: 'monster_essence', name: 'น้ำมันปีศาจ', xp: 28 }
  }
};

export const WEAPONS: Record<string, WeaponData> = {
  slingshot: {
    id: 'slingshot',
    name: 'หนังสติ๊กล่าสัตว์ (Hunter Slingshot)',
    desc: 'ยิงลูกหิน เล็งเป้าหมายอัตโนมัติ ยิงด้วยคลิกซ้าย ปุ่ม A หรือแตะหน้าจอ',
    type: 'ranged',
    damage: 20,
    speed: 12.0,
    range: 680,
    cooldown: 300,
    bulletType: 'stone'
  },
  rifle: {
    id: 'rifle',
    name: 'ปืนล่าสัตว์โบราณ (Hunting Rifle)',
    desc: 'ปืนไรเฟิลล่าสัตว์ พลังยิงทะลวงสูงและระยะยิงไกลมาก พลังโจมตี 42',
    type: 'ranged',
    damage: 42,
    speed: 14.0,
    range: 720,
    cooldown: 540,
    bulletType: 'rifle'
  },
  iron_sword: {
    id: 'iron_sword',
    name: 'ดาบเหล็กกล้านักผจญภัย (Iron Sword)',
    desc: 'ดาบฟันระยะประชิด พลังโจมตี 28 ฟันศัตรูด้านหน้าเป็นวงกว้าง',
    type: 'melee',
    damage: 28,
    speed: 0,
    range: 88,
    cooldown: 320
  },
  excalibur_sword: {
    id: 'excalibur_sword',
    name: 'ดาบศักดิ์สิทธิ์เอ็กซ์คาลิเบอร์ (Holy Excalibur)',
    desc: 'ดาบในตำนาน ฟันคลื่นแสงศักดิ์สิทธิ์ทะลวง พลังโจมตี 38',
    type: 'melee_beam',
    damage: 38,
    speed: 12.0,
    range: 480,
    cooldown: 360,
    bulletType: 'holy_beam'
  },
  dragon_rifle: {
    id: 'dragon_rifle',
    name: 'ปืนมังกรเพลิง (Dragonfire Cannon)',
    desc: 'ยิงระเบิดเพลิงมังกร ระเบิดล้างผลาญกลุ่มศัตรู พลังโจมตี 48',
    type: 'ranged',
    damage: 48,
    speed: 12.0,
    range: 520,
    cooldown: 540,
    bulletType: 'dragon_fire'
  },
  luminarch_crystal_blade: {
    id: 'luminarch_crystal_blade',
    name: 'ดาบเลเซอร์ผลึกปริซึมลูมินาร์ค (Prismatic Laser Blade)',
    desc: 'ดาบผลึกโบราณ ฟันปลดปล่อยลำแสงเลเซอร์ปริซึมทะลวง พลังโจมตี 44',
    type: 'melee_beam',
    damage: 44,
    speed: 13.0,
    range: 480,
    cooldown: 350,
    bulletType: 'crystal_shard'
  },
  hydra_venom_bow: {
    id: 'hydra_venom_bow',
    name: 'คันธนูสามศรพิษพญาไฮดรา (Hydra Venom Bow)',
    desc: 'คันธนูมังกรบึงพิษ แผลงศรกรดพิษกระจาย 3 ดอกพร้อมกัน (18x3 DMG)',
    type: 'ranged',
    damage: 18,
    speed: 12.0,
    range: 450,
    cooldown: 500,
    bulletType: 'poison_glob'
  },
  volcano_sword: {
    id: 'volcano_sword',
    name: 'ดาบเพลิงลาวาภูเขาไฟ (Volcano Magma Blade)',
    desc: 'ดาบเพลิงหลอมจากแก่นภูเขาไฟ ฟันคลื่นเพลิงลาวา พลังโจมตี 48',
    type: 'melee_beam',
    damage: 48,
    speed: 12.0,
    range: 480,
    cooldown: 360,
    bulletType: 'dragon_fire'
  },
  volcano_magma_axe: {
    id: 'volcano_magma_axe',
    name: 'ขวานเพลิงโลกันตร์ลาวาอิกนิสทรอน (Molten Magma Axe)',
    desc: 'ขวานหินลาวาคู่ ระเบิดคลื่นเพลิงล้างผลาญกลุ่มศัตรู พลังโจมตี 56',
    type: 'melee_beam',
    damage: 56,
    speed: 11.0,
    range: 460,
    cooldown: 420,
    bulletType: 'dragon_fire'
  },
  glacial_titan_hammer: {
    id: 'glacial_titan_hammer',
    name: 'ค้อนเหมันต์ไททันน้ำแข็งฟรอสต์แฟงก์ (Glacial Titan Hammer)',
    desc: 'ค้อนน้ำแข็งพันปี ทุบพื้นสร้างคลื่นหอกน้ำแข็งแช่แข็งศัตรู พลังโจมตี 62',
    type: 'melee_beam',
    damage: 62,
    speed: 11.5,
    range: 480,
    cooldown: 460,
    bulletType: 'ice_shard'
  },
  malakor_soul_scythe: {
    id: 'malakor_soul_scythe',
    name: 'เคียวมรณะสูบวิญญาณลอร์ดมาลาคอร์ (Malakor Soul Scythe)',
    desc: 'เคียวแห่งความตาย ปล่อยคลื่นกะโหลกวิญญาณมืด และดูดเลือด 8% คืนแก่ผู้ใช้ พลังโจมตี 64',
    type: 'melee_beam',
    damage: 64,
    speed: 12.5,
    range: 500,
    cooldown: 380,
    bulletType: 'shadow_skull'
  },
  sylvan_bow: {
    id: 'sylvan_bow',
    name: 'คันธนูใบไม้พฤกษาพันปี (Ancient Sylvan Bow)',
    desc: 'คันธนูแห่งเทพพฤกษา แผลงศรใบไม้คมกริบ 4 ดอกรูปพัด ทะลวงศัตรู (19x4 DMG)',
    type: 'ranged',
    damage: 19,
    speed: 13.0,
    range: 550,
    cooldown: 440,
    bulletType: 'petal_blade'
  },
  tempest_blade: {
    id: 'tempest_blade',
    name: 'ดาบอัสนีบาตคลื่นสายฟ้า (Tempest Lightning Blade)',
    desc: 'สุดยอดดาบสายฟ้าแห่งจ้าวพายุ ปลดปล่อยคลื่นลำแสงสายฟ้าผ่าทะลวงศัตรู พลังโจมตี 72',
    type: 'melee_beam',
    damage: 72,
    speed: 14.0,
    range: 560,
    cooldown: 370,
    bulletType: 'lightning_beam'
  },
  spire_blade: {
    id: 'spire_blade',
    name: 'ดาบสุริยันผลึกหอคอย (Spire Solar Blade)',
    desc: 'ดาบในตำนานแห่งหอคอยผลึก ฟันคลื่นสุริยันทะลวงศัตรู พลังโจมตี 66',
    type: 'melee_beam',
    damage: 66,
    speed: 13.0,
    range: 520,
    cooldown: 360,
    bulletType: 'holy_beam'
  },
  spire_bow: {
    id: 'spire_bow',
    name: 'ธนูประกายดาราผลึก (Spire Star Bow)',
    desc: 'คันธนูมิติ แผลงศรแสงดารา 3 ดอก (24x3 DMG)',
    type: 'ranged',
    damage: 24,
    speed: 13.5,
    range: 540,
    cooldown: 400,
    bulletType: 'crystal_shard'
  },
  spire_staff: {
    id: 'spire_staff',
    name: 'คทาแก่นหอคอยมิติ (Spire Nebula Staff)',
    desc: 'คทามหาเวท ปลดปล่อยลูกพลังเนบิวลาระเบิดกว้าง พลังโจมตี 76',
    type: 'ranged',
    damage: 76,
    speed: 11.0,
    range: 500,
    cooldown: 440,
    bulletType: 'dragon_fire'
  },
  cutlass_saber: {
    id: 'cutlass_saber',
    name: 'ดาบโจรสลัดคัตลาสอาถรรพ์ (Corsair Cutlass)',
    desc: 'ดาบโค้งเหล็กกล้าแห่งแคริบเบียน ฟันคลื่นจันทร์เสี้ยววารี พลังโจมตี 62 ติดคริติคอล +20%!',
    type: 'melee_beam',
    damage: 62,
    speed: 13.5,
    range: 500,
    cooldown: 350,
    bulletType: 'crystal_shard'
  },
  volcano_flame_sword: {
    id: 'volcano_flame_sword',
    name: 'ดาบเพลิงสุริยันอัคนี (Solar Magma Blade)',
    desc: 'ดาบเพลิงศักดิ์สิทธิ์ใจกลางปล่องภูเขาไฟ ฟันคลื่นลูกไฟลาวาระเบิด พลังโจมตี 78 คริติคอล +20%!',
    type: 'melee_beam',
    damage: 78,
    speed: 13.5,
    range: 520,
    cooldown: 350,
    bulletType: 'dragon_fire'
  }
};

export const HUNTERS: Record<string, HunterData> = {
  scout_hunter: {
    id: 'scout_hunter',
    name: 'นายพรานป่า (Woodland Scout)',
    price: 350,
    salary: 0,
    desc: 'เดินลาดตระเวนรอบแปลงผัก คอยเล็งยิงหนังสติ๊กใส่แมลงปีศาจในระยะ 7 ช่อง',
    damage: 28,
    range: 220,
    attackSpeed: 800,
    patrolArea: 'crops',
    spriteType: 'scout_hunter'
  },
  veteran_marksman: {
    id: 'veteran_marksman',
    name: 'นายพรานปืนยาว (Veteran Marksman)',
    price: 700,
    salary: 0,
    desc: 'พรานรุ่นใหญ่ถือปืนยาว ส่องยิงแมลงปีศาจรอบคอกสัตว์และรั้วฟาร์มอย่างแม่นยำ',
    damage: 65,
    range: 340,
    attackSpeed: 1100,
    patrolArea: 'animals',
    spriteType: 'veteran_marksman'
  }
};

export const FARM_HELPERS: Record<string, FarmHelperData> = {
  gardener_joy: {
    id: 'gardener_joy',
    name: 'ป้าแจ่ม คนดูแลสวน (Garden Caretaker)',
    price: 250,
    desc: 'เดินรดน้ำแปลงดินที่แห้ง และช่วยเก็บเกี่ยวผลผลิตที่สุกแล้วเข้ากระเป๋าให้คุณอัตโนมัติ',
    role: 'gardener',
    spriteType: 'gardener_joy',
    speed: 1.4,
    actionCooldown: 1200
  },
  farmer_boy: {
    id: 'farmer_boy',
    name: 'น้องกล้า ผู้ช่วยเก็บเกี่ยว (Master Harvester)',
    price: 450,
    desc: 'ผู้ช่วยเก็บเกี่ยวความเร็วสูง เดินเก็บผลผลิตทันทีที่สุก และช่วยเติมน้ำใส่บัวให้เต็มตลอดเวลา',
    role: 'harvester',
    spriteType: 'farmer_boy',
    speed: 1.8,
    actionCooldown: 800
  }
};

export const MONSTER_DROPS: Record<string, MaterialItem> = {
  beetle_shell: { id: 'beetle_shell', name: 'กระดองด้วงปีศาจ', sellPrice: 45, desc: 'กระดองแข็งสีม่วง ใช้ปรุงยาหรือส่งขาย' },
  demon_wing: { id: 'demon_wing', name: 'ปีกต่อปีศาจ', sellPrice: 55, desc: 'ปีกแมลงสะท้อนแสงสีเลือด นำไปปรุงยาบำรุงพลัง' },
  monster_essence: { id: 'monster_essence', name: 'น้ำมันปีศาจ', sellPrice: 70, desc: 'ของเหลวเรืองแสงสีเขียวเข้มข้น' }
};

export const WORLD_ITEMS: Record<string, MaterialItem> = {
  shadow_pelt: { id: 'shadow_pelt', name: 'หนังหมาป่าเงา', sellPrice: 50, desc: 'ขนสัตว์สีดำเงา สำหรับตัดเย็บชุดเกราะ' },
  wolf_fang: { id: 'wolf_fang', name: 'เขี้ยวหมาป่าอาถรรพ์', sellPrice: 60, desc: 'เขี้ยวแหลมคม สำหรับตีดาบและอาวุธ' },
  iron_ore: { id: 'iron_ore', name: 'แร่เหล็กดิบ', sellPrice: 35, desc: 'แร่เหล็กบริสุทธิ์ สำหรับหลอมอาวุธที่เตาตีเหล็ก' },
  ruby_gem: { id: 'ruby_gem', name: 'อัญมณีทับทิมเวทมนตร์', sellPrice: 80, desc: 'ทับทิมเปล่งแสงสีเลือด บรรจุพลังเวทโบราณ' },
  cursed_wood: { id: 'cursed_wood', name: 'ไม้โบราณต้องสาป', sellPrice: 45, desc: 'กิ่งไม้จากต้นไม้ปีศาจ มีพลังวิญญาณสถิต' },
  mana_gem: { id: 'mana_gem', name: 'ผลึกมานาสีคราม', sellPrice: 65, desc: 'ผลึกแก้วสีฟ้าเรืองแสง ใช้สร้างอุปกรณ์ขั้นสูง' },
  starflower_herb: { id: 'starflower_herb', name: 'สมุนไพรดวงดาว', sellPrice: 30, desc: 'ดอกไม้สมุนไพรเรืองแสง นำไปต้มเป็นยาฟื้นพลังชีวิต' },
  blight_spore: { id: 'blight_spore', name: 'สปอร์กลายพันธุ์ (Blight Spore)', sellPrice: 40, desc: 'สปอร์สีม่วงแดงเรืองแสงที่ตกจากแมลงกลายพันธุ์ ใช้ศึกษาและปรุงเซรุ่มแก้พิษ' },
  antidote_serum: { id: 'antidote_serum', name: 'เซรุ่มต้านสปอร์พิษ (Antidote Serum)', sellPrice: 100, energyRestore: 50, hpRestore: 80, desc: 'เซรุ่มสูตรพิเศษของหมอยาลิเลียน ดื่มฟื้นฟู HP +80 และ พลังงาน +50 พร้อมชำระล้างพิษสปอร์' },
  health_potion: { id: 'health_potion', name: 'ยาฟื้นพลังชีวิตชั้นเลิศ', sellPrice: 60, energyRestore: 30, hpRestore: 60, desc: 'ดื่มเพื่อฟื้นฟู HP +60 และพลังงาน +30' },
  gold_ore: { id: 'gold_ore', name: 'แร่ทองคำดิบ', sellPrice: 50, desc: 'แร่ทองคำประกายระยิบระยับ ขุดได้จากถ้ำลึก' },
  diamond_crystal: { id: 'diamond_crystal', name: 'เพชรคริสตัลโบราณ', sellPrice: 160, desc: 'อัญมณีล้ำค่าและแข็งแกร่งที่สุดในถ้ำ' },
  bat_wing: { id: 'bat_wing', name: 'ปีกค้างคาวถ้ำ', sellPrice: 25, desc: 'ปีกค้างคาว ใช้ปรุงยาหรือขายเป็นเงิน' },
  crystal_core: { id: 'crystal_core', name: 'แก่นคริสตัลสไลม์', sellPrice: 45, desc: 'แก่นผลึกเวทมนตร์เรืองแสง' },
  demon_heart: { id: 'demon_heart', name: 'หัวใจจอมอสูรคาธูรอส', sellPrice: 450, desc: 'หัวใจที่ยังเต้นของราชาปีศาจ วัตถุดิบสร้างอาวุธระดับตำนาน' },
  crown_of_despair: { id: 'crown_of_despair', name: 'มงกุฎแห่งความสิ้นหวัง', sellPrice: 550, desc: 'มงกุฎทองคำโบราณ หลักฐานแห่งการปราบราชาปีศาจ' },
  cinder_shard: { id: 'cinder_shard', name: 'เศษผลึกเพลิง (Cinder Shard)', sellPrice: 90, desc: 'ผลึกหินลาวาคุกรุ่นจากถ้ำภูเขาไฟ ใช้สลักรูนไฟและหลอมอาวุธเพลิง' },
  dragon_tooth: { id: 'dragon_tooth', name: 'เขี้ยวมังกรโบราณ (Dragon Tooth)', sellPrice: 240, desc: 'เขี้ยวมังกรเพลิงโบราณที่แข็งแกร่งดั่งเหล็กกล้า วัตถุดิบสร้างดาบเพลิงลาวา' },
  volcano_sword: { id: 'volcano_sword', name: 'ดาบเพลิงลาวาภูเขาไฟ (Volcano Magma Blade)', sellPrice: 1100, desc: 'ดาบเพลิงหลอมจากแก่นภูเขาไฟ ฟันคลื่นเพลิงลาวาลุกท่วม พลังโจมตี 48' },
  wood: { id: 'wood', name: 'ท่อนไม้', sellPrice: 8, desc: 'ท่อนไม้เนื้อแข็ง ได้จากการตัดต้นไม้ ใช้สร้างกล่องและสิ่งประดิษฐ์' },
  chest: { id: 'chest', name: 'กล่องเก็บของไม้', sellPrice: 50, desc: 'นำไปวางบนพื้นดินเพื่อเปิดเก็บของได้ 16 ช่อง' },
  axe: { id: 'axe', name: 'ขวานตัดไม้', sellPrice: 80, desc: 'ใช้ตัดต้นไม้เพื่อเก็บท่อนไม้' },
  sapling: { id: 'sapling', name: 'ต้นกล้าไม้โอ๊ค', sellPrice: 15, desc: 'นำไปปลูกลงบนพื้นเพื่อปลูกต้นไม้ใหม่' },
  backpack_upgrade_1: { id: 'backpack_upgrade_1', name: 'กระเป๋าเป้นักเดินทาง (+12 ช่อง)', sellPrice: 0, desc: 'ขยายกระเป๋าเป้เป็น 48 ช่องทันที จุของได้จุใจ' },
  backpack_upgrade_2: { id: 'backpack_upgrade_2', name: 'กระเป๋าเป้จอมผจญภัย (+12 ช่อง)', sellPrice: 0, desc: 'ขยายกระเป๋าเป้เป็น 60 ช่องทันที จุของได้จุใจ' },

  // Deep Mine Minerals
  stone: { id: 'stone', name: 'ก้อนหินเนื้อแน่น', sellPrice: 4, desc: 'หินธรรมชาติจากการขุดเหมือง ใช้ก่อสร้างและประดิษฐ์เครื่องจักร' },
  copper_ore: { id: 'copper_ore', name: 'แร่ทองแดงบริสุทธิ์', sellPrice: 20, desc: 'แร่โลหะสีส้ม พบในเหมืองชั้นต้น ใช้สร้างสปริงเกอร์และเครื่องแปรรูป' },
  star_core: { id: 'star_core', name: 'แก่นผลึกดวงดาว', sellPrice: 280, desc: 'อัญมณีเรืองแสงล้ำค่าจากเหมืองชั้นลึกที่สุด มีพลังงานเวทมหาศาล' },
  phoenix_feather: { id: 'phoenix_feather', name: 'ขนนกฟีนิกซ์ศักดิ์สิทธิ์ (Phoenix Feather)', sellPrice: 1400, desc: 'ขนนกเรืองแสงสีทองอร่าม หากพลังชีวิตหมดลงจะชุบชีวิตฟื้นคืนชีพเต็ม 100% ทันที!' },
  void_elixir: { id: 'void_elixir', name: 'โอสถแห่งความว่างเปล่า (Void Elixir)', sellPrice: 280, energyRestore: 100, hpRestore: 100, desc: 'โอสถสีม่วงเรืองแสง ดื่มเพื่อฟื้นฟู HP/Energy เต็มเปี่ยมและวิ่งเร็วขึ้น 60 วินาที' },
  mystery_geode: { id: 'mystery_geode', name: 'หินผลึกปิดผนึกปริศนา (Mystery Geode)', sellPrice: 80, desc: 'หินเปลือกแข็งเรืองแสง นำไปกะเทาะที่โรงตีเหล็กหรือกดสำรวจเพื่อลุ้นรับแร่และอัญมณีหายาก!' },
  ancient_relic: { id: 'ancient_relic', name: 'โบราณวัตถุแห่งอารยธรรมสาบสูญ', sellPrice: 500, desc: 'โบราณวัตถุแกะสลักลวดลายลึกลับ นักสะสมและนักประวัติศาสตร์ให้ราคาสูงยิ่ง' },
  star_shard: { id: 'star_shard', name: 'เศษอุกกาบาตดวงดาว (Star Shard)', sellPrice: 200, desc: 'เศษหินอุกกาบาตเรืองแสงสีฟ้าอมม่วง ปล่อยไอความร้อนจากห้วงอวกาศ' },
  cosmic_fruit_seed: { id: 'cosmic_fruit_seed', name: 'เมล็ดพันธุ์ดาราจักร (Cosmic Star Seed)', sellPrice: 200, desc: 'เมล็ดพืชเรืองแสง ปลูกได้ทุกฤดู โตเร็ว ให้ผลไม้ดวงดาวมูลค่ามหาศาล' },
  cosmic_fruit: { id: 'cosmic_fruit', name: 'ผลไม้ดวงดาวจักรวาล (Cosmic Star Fruit)', sellPrice: 1500, energyRestore: 120, hpRestore: 120, desc: 'ผลไม้สีทองอร่ามดั่งแสงดารา กลิ่นหอมฟุ้ง รับประทานฟื้นฟูพลังทั้งหมด!' },

  // Machines & Sprinklers
  sprinkler_basic: { id: 'sprinkler_basic', name: 'สปริงเกอร์รดน้ำพื้นฐาน', sellPrice: 120, desc: 'วางในฟาร์มเพื่อรดน้ำแปลงดิน 4 ช่องรอบตัวอัตโนมัติทุกเช้า' },
  sprinkler_quality: { id: 'sprinkler_quality', name: 'สปริงเกอร์รดน้ำคุณภาพสูง', sellPrice: 280, desc: 'วางในฟาร์มเพื่อรดน้ำแปลงดิน 8 ช่อง (3x3) รอบตัวอัตโนมัติทุกเช้า' },
  mayo_machine: { id: 'mayo_machine', name: 'เครื่องทำมายองเนส', sellPrice: 150, desc: 'วางบนพื้น นำไข่ไก่มาใส่เพื่อแปรรูปเป็นมายองเนสรสกลมกล่อม' },
  cheese_press: { id: 'cheese_press', name: 'เครื่องอัดชีสแท้', sellPrice: 160, desc: 'วางบนพื้น นำนมสดมาใส่เพื่อบ่มเป็นเชดดาร์ชีสชั้นเลิศ' },
  preserves_jar: { id: 'preserves_jar', name: 'ถังหมักแยม & ผักดอง', sellPrice: 220, desc: 'วางบนพื้น ใส่ผลไม้หรือผักเพื่อทำแยมหวานฉ่ำหรือผักดอง' },
  wine_keg: { id: 'wine_keg', name: 'ถังบ่มไวน์และเอลโบราณ', sellPrice: 320, desc: 'วางบนพื้น ใส่ผลไม้เพื่อบ่มไวน์ หรือใส่ข้าวสาลีเพื่อบ่มเบียร์สด' },
  horse_whistle: { id: 'horse_whistle', name: 'นกหวีดเรียกม้าคู่ใจ', sellPrice: 0, desc: 'เป่านกหวีดเพื่อขึ้นขี่ม้าพาหนะคู่ใจ วิ่งเร็วขึ้น +65% (กด [R] ได้)' },
  pet_basket: { id: 'pet_basket', name: 'เบาะสัตว์เลี้ยงแสนรัก', sellPrice: 0, desc: 'วางในบ้านหรือฟาร์มเพื่อรับเลี้ยงน้องหมาหรือน้องแมวคอยเดินตาม' },

  // ผลิตภัณฑ์แปรรูปมูลค่าสูง (Artisan Products)
  mayonnaise: { id: 'mayonnaise', name: 'มายองเนสเข้มข้น', sellPrice: 100, energyRestore: 45, desc: 'มายองเนสสดจากไข่ไก่ รสชาติเปรี้ยวหวานกลมกล่อม' },
  strawberry_jam: { id: 'strawberry_jam', name: 'แยมสตรอเบอร์รี่หวานฉ่ำ', sellPrice: 190, energyRestore: 55, desc: 'แยมผลไม้โฮมเมดเข้มข้น หอมหวานกลิ่นผลไม้สด' },
  pickled_carrot: { id: 'pickled_carrot', name: 'ผักดองแครอทกรอบ', sellPrice: 85, energyRestore: 30, desc: 'แครอทดองน้ำส้มสายชูสูตรโบราณ กรุบกรอบอร่อย' },
  fine_wine: { id: 'fine_wine', name: 'ไวน์ผลไม้ชั้นเลิศ', sellPrice: 300, energyRestore: 80, desc: 'ไวน์หมักบ่มจนได้ที่ รสชาตินุ่มละมุนลิ้น เป็นของขวัญที่ผู้ใหญ่ชื่นชอบ' },
  craft_ale: { id: 'craft_ale', name: 'เบียร์สดข้าวสาลีคราฟต์', sellPrice: 180, energyRestore: 60, desc: 'เบียร์หมักสดจากข้าวสาลีชั้นดี ฟองนุ่มกลิ่นหอม' },
  aged_cheese: { id: 'aged_cheese', name: 'เชดดาร์ชีสบ่มพิเศษ', sellPrice: 220, energyRestore: 70, desc: 'ชีสแท้บ่มด้วยเครื่องอัด รสชาติเข้มข้น หอมมันกลมกล่อม' },

  // วัตถุดิบและไอเทมระดับตำนานจากมหาบอสทั้ง 6 (Mega Boss Legendary Artifacts)
  luminarch_crystal_heart: { id: 'luminarch_crystal_heart', name: 'หัวใจผลึกปริซึมลูมินาร์ค', sellPrice: 550, desc: 'หัวใจคริสตัลบริสุทธิ์จากโกเลมโบราณ ส่องประกายแสงรุ้ง 7 สี มีพลังงานเวทมนตร์ไร้ขีดจำกัด' },
  hydra_venom_gland: { id: 'hydra_venom_gland', name: 'ต่อมพิษพญาไฮดราโบราณ', sellPrice: 600, desc: 'ต่อมพิษเข้มข้นสูงสุดจากพญาไฮดราแห่งบึงมืด ใช้สกัดยาแก้สารพัดพิษและชุบคมดาบ' },
  hydra_scale: { id: 'hydra_scale', name: 'เกล็ดมังกรบึงพิษ', sellPrice: 75, desc: 'เกล็ดหนาสีเขียวมรกต ทนทานต่อกรดและความร้อน' },
  magma_dragon_horn: { id: 'magma_dragon_horn', name: 'เขามังกรอัคนีเพลิงอิกนิสทรอน', sellPrice: 700, desc: 'เขามังกรลาวาที่ยังคุกรุ่นด้วยเปลวเพลิงโลกันตร์ วัตถุดิบสร้างสุดยอดดาบเพลิง' },
  flame_heart: { id: 'flame_heart', name: 'แก่นเพลิงลาวาเดือด', sellPrice: 180, desc: 'ผลึกหินลาวาที่มีเปลวเพลิงลุกไหม้ชั่วนิรันดร์' },
  glacial_titan_core: { id: 'glacial_titan_core', name: 'แก่นเหมันต์ไททันน้ำแข็ง', sellPrice: 650, desc: 'ผลึกน้ำแข็งพันปีที่ไม่มีวันละลาย แผ่ไอความเย็นยะเยือกฟื้นฟูจิตใจ' },
  frost_crystal: { id: 'frost_crystal', name: 'ผลึกน้ำแข็งบริสุทธิ์', sellPrice: 85, desc: 'เกล็ดน้ำแข็งรูปดาวที่สกัดได้จากยอดเขาเหมันต์' },
  death_lord_soul: { id: 'death_lord_soul', name: 'ดวงวิญญาณมรณะลอร์ดมาลาคอร์', sellPrice: 700, desc: 'ดวงวิญญาณเรืองแสงสีม่วงทมิฬ กักเก็บพลังอำนาจแห่งความตายและความเป็นอมตะ' },
  cursed_relic: { id: 'cursed_relic', name: 'โบราณวัตถุต้องสาป', sellPrice: 130, desc: 'แผ่นศิลาจารึกอักขระโบราณของกษัตริย์ไร้นาม' },
  swamp_herb: { id: 'swamp_herb', name: 'บัวสมุนไพรหนองน้ำ', sellPrice: 40, energyRestore: 40, desc: 'ดอกบัวสมุนไพรหายาก ขึ้นในบึงพิษ ช่วยสลายพิษและเพิ่มพลังชีวิต' },
  frost_berry: { id: 'frost_berry', name: 'เบอร์รี่หิมะเยือกแข็ง', sellPrice: 45, energyRestore: 45, desc: 'ผลไม้สีฟ้าฉ่ำน้ำ เติบโตบนยอดเขาหิมะ รสชาติหวานเย็นสดชื่น' },

  // อาวุธระดับตำนานจากมหาบอส (Boss Legendary Weapons)
  luminarch_crystal_blade: { id: 'luminarch_crystal_blade', name: 'ดาบเลเซอร์ผลึกปริซึมลูมินาร์ค', sellPrice: 1000, desc: 'สุดยอดดาบคริสตัลโบราณ ฟันปล่อยลำแสงเลเซอร์ปริซึมทะลวง พลังโจมตี 44' },
  hydra_venom_bow: { id: 'hydra_venom_bow', name: 'คันธนูสามศรพิษพญาไฮดรา', sellPrice: 1050, desc: 'คันธนูมังกรบึงพิษ แผลงศรกรดพิษกระจาย 3 ดอกพร้อมกัน พลังโจมตี 18x3' },
  volcano_magma_axe: { id: 'volcano_magma_axe', name: 'ขวานเพลิงโลกันตร์ลาวาอิกนิสทรอน', sellPrice: 1200, desc: 'ขวานหินลาวาคู่ ระเบิดคลื่นเพลิงล้างผลาญกลุ่มศัตรู พลังโจมตี 56' },
  glacial_titan_hammer: { id: 'glacial_titan_hammer', name: 'ค้อนเหมันต์ไททันน้ำแข็งฟรอสต์แฟงก์', sellPrice: 1250, desc: 'ค้อนน้ำแข็งพันปี ทุบพื้นสร้างคลื่นหอกน้ำแข็งแช่แข็งศัตรู พลังโจมตี 62' },
  malakor_soul_scythe: { id: 'malakor_soul_scythe', name: 'เคียวมรณะสูบวิญญาณลอร์ดมาลาคอร์', sellPrice: 1400, desc: 'เคียวแห่งความตาย ปล่อยคลื่นกะโหลกวิญญาณมืด และดูดเลือด 8% คืนแก่ผู้ใช้ พลังโจมตี 64' },
  sylvan_bow: { id: 'sylvan_bow', name: 'คันธนูใบไม้พฤกษาพันปี (Ancient Sylvan Bow)', sellPrice: 1450, desc: 'คันธนูแห่งเทพพฤกษา แผลงศรใบไม้คมกริบ 4 ดอกรูปพัด ทะลวงศัตรู พลังโจมตี 19x4' },
  tempest_blade: { id: 'tempest_blade', name: 'ดาบอัสนีบาตคลื่นสายฟ้า (Tempest Lightning Blade)', sellPrice: 1600, desc: 'สุดยอดดาบสายฟ้าแห่งจ้าวพายุ ปลดปล่อยคลื่นสายฟ้าผ่าทะลวงศัตรู พลังโจมตี 72' },

  // อาหารเสบียงรบจากผลผลิตฟาร์ม (Combat Rations & Food Buffs)
  farmer_stew: { id: 'farmer_stew', name: 'สตูว์เนื้อผักรวมพลังใจชาวสวน', sellPrice: 280, energyRestore: 120, desc: 'สตูว์ร้อนๆ รสชาติเข้มข้น เพิ่มพลังโจมตีอาวุธทุกชนิด +35 นาน 3 นาที!' },
  vigor_juice: { id: 'vigor_juice', name: 'น้ำผลไม้วิเศษสายลมว่องไว', sellPrice: 250, energyRestore: 100, desc: 'น้ำสกัดผลไม้เข้มข้น เพิ่มความเร็วในการเคลื่อนที่ +50% นาน 3 นาที!' },
  herbal_defense_soup: { id: 'herbal_defense_soup', name: 'ซุปสมุนไพรเกราะพฤกษาคุ้มภัย', sellPrice: 320, energyRestore: 100, desc: 'ซุปเคี่ยวสมุนไพรหายาก สร้างโล่พฤกษาลดความเสียหายที่ได้รับลง 40% นาน 3 นาที!' },

  // แหวนและเครื่องประดับสถิตพลัง (Equippable Power Rings & Accessories)
  ring_glow: { id: 'ring_glow', name: 'แหวนเรืองแสงสุริยัน (Sun Glow Ring)', sellPrice: 450, desc: 'แหวนทองคำสลักอำพัน ส่องรัศมีแสงสว่างรอบตัวในถ้ำมืดและสุสานใต้ดิน (+80 รัศมีแสง)' },
  ring_magnet: { id: 'ring_magnet', name: 'แหวนแม่เหล็กดูดทรัพย์ (Magneto Ring)', sellPrice: 500, desc: 'แหวนแร่เหล็กโบราณ ปล่อยคลื่นแม่เหล็กดูดไอเทมบนพื้นเข้าตัวจากระยะไกลขึ้น 3 เท่า!' },
  ring_warrior: { id: 'ring_warrior', name: 'แหวนนักรบผู้กล้า (Warrior Bravery Ring)', sellPrice: 650, desc: 'แหวนเหล็กกล้าประดับทับทิม เพิ่มโอกาสโจมตีติดคริติคอล +18% และเพิ่มตัวคูณคริติคอล +0.25x' },
  ring_vampiric: { id: 'ring_vampiric', name: 'แหวนแวมไพร์สูบโลหิต (Vampiric Leech Ring)', sellPrice: 850, desc: 'แหวนโลหิตต้องสาป ฟื้นฟูพลังชีวิตผู้ใช้ 4% จากความเสียหายทุกครั้งที่ฟันโดนศัตรู' },
  ring_lucky: { id: 'ring_lucky', name: 'แหวนนำโชคจอมพราน (Fortune Hunter Ring)', sellPrice: 750, desc: 'แหวนมรกตนำโชค มอนสเตอร์ดรอปเหรียญทองเพิ่มขึ้น +35% และเพิ่มอัตราการดรอปไอเทมหายาก' },

  // รูนเวทมนตร์สลักอาวุธ (Elemental Runes)
  rune_fire: { id: 'rune_fire', name: 'รูนอัคคีพิโรธ (Fire Rune)', sellPrice: 250, desc: 'ศิลาเวทมนตร์อัคคี สลักลงอาวุธทำให้การโจมตีติดสถานะเผาไหม้ (Burn DoT)' },
  rune_frost: { id: 'rune_frost', name: 'รูนเหมันต์นิรันดร์ (Frost Rune)', sellPrice: 250, desc: 'ศิลาเวทมนตร์เหมันต์ สลักลงอาวุธทำให้ศัตรูถูกแช่แข็งสโลว์ความเร็วลง 50%' },
  rune_lightning: { id: 'rune_lightning', name: 'รูนอัสนีบาต (Lightning Rune)', sellPrice: 250, desc: 'ศิลาเวทมนตร์สายฟ้า สลักลงอาวุธทำให้เกิดประกายสายฟ้าชิ่งโดนศัตรูรอบข้าง' },
  rune_vampiric: { id: 'rune_vampiric', name: 'รูนกลืนวิญญาณ (Vampiric Rune)', sellPrice: 300, desc: 'ศิลาเวทมนตร์สูบวิญญาณ สลักลงอาวุธดูดพลังชีวิต 8% ของความเสียหายที่ทำได้' },

  // แก่นศิลาศักดิ์สิทธิ์ทั้ง 6 ธาตุ (The 6 Sacred Shards)
  sacred_shard_earth: { id: 'sacred_shard_earth', name: 'แก่นศิลาปฐพีศักดิ์สิทธิ์ (Sacred Earth Shard)', sellPrice: 400, desc: 'แก่นแท้แห่งธาตุดิน ได้รับจากการปราบราชินีสปอร์คาธูรอส' },
  sacred_shard_sun: { id: 'sacred_shard_sun', name: 'แก่นศิลาสุริยันศักดิ์สิทธิ์ (Sacred Sun Shard)', sellPrice: 400, desc: 'แก่นแท้แห่งแสงสว่าง ได้รับจากการปราบโกเลมลูมินาร์ค' },
  sacred_shard_water: { id: 'sacred_shard_water', name: 'แก่นศิลาวารีศักดิ์สิทธิ์ (Sacred Water Shard)', sellPrice: 400, desc: 'แก่นแท้แห่งสายน้ำ ได้รับจากการปราบพญาไฮดราคิส' },
  sacred_shard_fire: { id: 'sacred_shard_fire', name: 'แก่นศิลาเพลิงศักดิ์สิทธิ์ (Sacred Fire Shard)', sellPrice: 400, desc: 'แก่นแท้แห่งเพลิงโลกันตร์ ได้รับจากการปราบมังกรอิกนิสทรอน' },
  sacred_shard_frost: { id: 'sacred_shard_frost', name: 'แก่นศิลาเหมันต์ศักดิ์สิทธิ์ (Sacred Frost Shard)', sellPrice: 400, desc: 'แก่นแท้แห่งความเย็นเยือก ได้รับจากการปราบไททันฟรอสต์แฟงก์' },
  sacred_shard_shadow: { id: 'sacred_shard_shadow', name: 'แก่นศิลาทมิฬศักดิ์สิทธิ์ (Sacred Shadow Shard)', sellPrice: 400, desc: 'แก่นแท้แห่งมิติเงา ได้รับจากการปราบนครมรณะลอร์ดมาลาคอร์' },
  sacred_shard_nature: { id: 'sacred_shard_nature', name: 'แก่นศิลาพฤกษาศักดิ์สิทธิ์ (Sacred Nature Shard)', sellPrice: 500, desc: 'แก่นแท้แห่งพงไพร ได้รับจากการปราบเทพพฤกษาโบราณ ซิลวาเนีย' },
  sacred_shard_thunder: { id: 'sacred_shard_thunder', name: 'แก่นศิลาอัสนีศักดิ์สิทธิ์ (Sacred Thunder Shard)', sellPrice: 600, desc: 'แก่นแท้แห่งสายฟ้า ได้รับจากการปราบจ้าวพายุ ออสทริออน' },
  ancient_tree_heart: { id: 'ancient_tree_heart', name: 'หัวใจพฤกษาบรรพกาล', sellPrice: 800, desc: 'หัวใจไม้ศักดิ์สิทธิ์พันปี แผ่พลังชีวิตบริสุทธิ์ของผืนป่าโบราณ' },
  storm_core: { id: 'storm_core', name: 'แก่นอัสนีบาตคำราม', sellPrice: 900, desc: 'แก่นสายฟ้าทรงอานุภาพที่กักเก็บกระแสไฟฟ้าแรงสูงนับล้านโวลต์' },
  star_fruit: { id: 'star_fruit', name: 'ผลไม้ดวงดาราพฤกษา', sellPrice: 90, energyRestore: 60, desc: 'ผลไม้เรืองแสงสีทองรูปดาว หวานหอมฟื้นฟูพลังกายและจิตใจได้อย่างยอดเยี่ยม' },
  thunder_crystal: { id: 'thunder_crystal', name: 'ผลึกสายฟ้าอัสนีบาต', sellPrice: 110, desc: 'แร่ผลึกสีฟ้าครามที่สะสมประจุไฟฟ้าสถิตจากยอดเขาพายุ' },

  // วัตถุสิ่งปลูกสร้างตกแต่งฟาร์ม (Farm Placeable Items)
  wood_fence: { id: 'wood_fence', name: 'รั้วไม้กั้นคอก (Wood Fence)', sellPrice: 5, desc: 'รั้วไม้แปรรูป วางกั้นอาณาเขตบนฟาร์ม สัตว์และมอนสเตอร์ไม่สามารถเดินผ่านได้' },
  stone_fence: { id: 'stone_fence', name: 'รั้วหินแกรนิต (Stone Fence)', sellPrice: 8, desc: 'รั้วหินโบราณแข็งแกร่ง ใช้จัดระเบียบแปลงฟาร์มอย่างงดงาม' },
  stone_path: { id: 'stone_path', name: 'ทางเดินหินปูพื้น (Cobblestone Path)', sellPrice: 4, desc: 'ทางเดินหินธรรมชาติ ปูบนพื้นฟาร์มช่วยให้วิ่งเร็วขึ้น 15%' },
  wood_path: { id: 'wood_path', name: 'ทางเดินไม้กระดาน (Wood Plank Path)', sellPrice: 3, desc: 'ทางเดินไม้ชนบท ปูบนพื้นฟาร์มช่วยให้วิ่งเร็วขึ้น 10%' },
  farm_lantern: { id: 'farm_lantern', name: 'โคมไฟเสาไม้โบราณ (Farm Lantern)', sellPrice: 40, desc: 'โคมไฟส่องสว่าง ส่องประกายแสงอบอุ่นทั่วบริเวณในยามค่ำคืน' },
  windmill_kit: { id: 'windmill_kit', name: 'ชุดสร้างกังหันลม (Windmill Kit)', sellPrice: 500, desc: 'กังหันลมแปรรูป บดข้าวสาลีเป็นแป้งและอ้อยเป็นน้ำตาลได้อย่างรวดเร็ว' },
  silo_kit: { id: 'silo_kit', name: 'ชุดสร้างไซโลเก็บเสบียง (Silo Kit)', sellPrice: 600, desc: 'หอคอยเก็บหญ้าเลี้ยงสัตว์ ส่งอาหารให้สัตว์ในฟาร์มอัตโนมัติทุกเช้า' },
  fish_tank: { id: 'fish_tank', name: 'ตู้จัดแสดงปลา (Fish Tank)', sellPrice: 300, desc: 'ตู้ปลาแก้วสวยงาม วางในบ้านและนำปลามาใส่เพื่อชมว่ายน้ำเพลิดเพลิน' },
  spire_shard: { id: 'spire_shard', name: 'ผลึกหอคอยมิติ (Spire Shard)', sellPrice: 50, desc: 'ผลึกเรืองแสงลึกลับที่เก็บได้จากการพิชิตชั้นในหอคอยไร้จุดสิ้นสุด' },
  sugar: { id: 'sugar', name: 'น้ำตาลทรายบริสุทธิ์', sellPrice: 30, desc: 'น้ำตาลทรายขาวบริสุทธิ์ ได้จากการนำอ้อยมาบดที่กังหันลม' },

  // 6 ชุดเกราะและอุปกรณ์บอสระดับตำนาน (Boss Legendary Equipment)
  kathuros_spore_armor: { id: 'kathuros_spore_armor', name: 'เกราะสปอร์ราชันคาธูรอส (Spore Mail)', sellPrice: 2000, desc: '[ชุดเกราะบอส] พลังป้องกัน +50% เมื่อโดนโจมตีจะระเบิดหนามสปอร์สวนกลับศัตรู 45 ดาเมจ' },
  ignistron_flame_shield: { id: 'ignistron_flame_shield', name: 'โล่อัคคีพิโรธอิกนิสทรอน (Magma Shield)', sellPrice: 2200, desc: '[โล่บอส] เมื่อทำการ Perfect Parry สำเร็จ จะระเบิดคลื่นเพลิงลาวาพุ่งเผาศัตรู 110 ดาเมจ' },
  frostfang_frozen_plate: { id: 'frostfang_frozen_plate', name: 'เกราะเกล็ดหิมะฟรอสต์แฟงก์ (Glacial Plate)', sellPrice: 2200, desc: '[ชุดเกราะบอส] การยกโล่บล็อกลดความเสียหาย 80% (จากปกติ 65%) และสะท้อนไอเย็นแช่แข็งศัตรู' },
  astreon_storm_greaves: { id: 'astreon_storm_greaves', name: 'เกราะขาอัสนีบาตออสทริออน (Storm Greaves)', sellPrice: 2100, desc: '[อุปกรณ์บอส] ความเร็วเคลื่อนที่ +30% และเมื่อกลิ้งหลบ Dash จะฟาดสายฟ้าผ่าใส่ศัตรู 60 ดาเมจ' },
  malakor_void_cloak: { id: 'malakor_void_cloak', name: 'ผ้าคลุมมฤตยูลอร์ดมาลาคอร์ (Void Shroud)', sellPrice: 2500, desc: '[ชุดเกราะบอส] ขยายหน้าต่าง Perfect Parry เพิ่ม +80ms และดูดเลือด 6% จากความเสียหายที่ทำได้' },
  hydrakis_venom_pendant: { id: 'hydrakis_venom_pendant', name: 'จี้เขี้ยวพิษพญาไฮดรา (Venom Amulet)', sellPrice: 1900, desc: '[อุปกรณ์บอส] ป้องกันความเสียหายจากพิษและบึงมลทิน 100% พร้อมเคลือบพิษให้การโจมตี' },

  // 4 อาหารกูร์เมต์ปรุงรบขั้นสูง (Gourmet Combat Dishes)
  parry_master_broth: { id: 'parry_master_broth', name: 'ซุปสมาธิอัศวิน (Parry Master Broth)', sellPrice: 380, energyRestore: 120, hpRestore: 60, desc: '[อาหารบัฟรบ] ขยายหน้าต่าง Perfect Parry จาก 0.24 วิ เป็น 0.36 วิ นาน 3 นาที!' },
  ironhide_dragon_steak: { id: 'ironhide_dragon_steak', name: 'สเต๊กเกราะศิลา (Ironhide Steak)', sellPrice: 420, energyRestore: 140, hpRestore: 80, desc: '[อาหารบัฟรบ] ลดความเสียหายลงอีก 30% และป้องกันการเกิด Guard Break ได้ 1 ครั้ง' },
  stamina_surge_pie: { id: 'stamina_surge_pie', name: 'พายวายุคลั่ง (Stamina Surge Pie)', sellPrice: 390, energyRestore: 110, hpRestore: 50, desc: '[อาหารบัฟรบ] ฟื้นฟู Stamina รวดเร็วขึ้น 200% และกลิ้งหลบ Dash ได้ฟรีไม่เสียพลังงาน' },
  sacred_purification_tea: { id: 'sacred_purification_tea', name: 'ชาเทวะชำระมลทิน (Purification Tea)', sellPrice: 460, energyRestore: 150, hpRestore: 90, desc: '[อาหารบัฟรบ] ป้องกันความเสียหายจากไฟ/พิษ/สายฟ้าบนพื้น 100% และฟื้นเลือด +6 HP/วินาที' },
  titan_elixir: { id: 'titan_elixir', name: 'น้ำยาเทวะสยบศึก (Titan Elixir)', sellPrice: 480, energyRestore: 150, hpRestore: 120, desc: '[อาหารบัฟรบ] พลังโจมตี +45 ดาเมจ และเพิ่มอัตราคริติคอล +20% นาน 3 นาที!' },
  swiftfoot_tonic: { id: 'swiftfoot_tonic', name: 'ยาบำรุงสายลมคลั่ง (Swiftfoot Tonic)', sellPrice: 420, energyRestore: 130, hpRestore: 80, desc: '[อาหารบัฟรบ] ความเร็วเคลื่อนที่ +40% และกลิ้ง Dash ไม่จำกัด Stamina นาน 3 นาที!' },
  ironbark_brew: { id: 'ironbark_brew', name: 'โอสถปราการศิลา (Ironbark Brew)', sellPrice: 450, energyRestore: 140, hpRestore: 100, desc: '[อาหารบัฟรบ] ลดความเสียหายลง 35% และป้องกันการ์ดแตกได้ 2 ครั้ง นาน 3 นาที!' },

  // วัตถุดิบและสมบัติจากเกาะมหาสมบัติเขตร้อน (Tropical Island Relics & Expedition Items)
  banana: { id: 'banana', name: 'กล้วยหอมทอง (Golden Banana)', sellPrice: 140, energyRestore: 60, desc: 'กล้วยหอมทองคำสุกหวาน อุดมด้วยแร่ธาตุ ฟื้นฟู Stamina +60' },
  golden_melon: { id: 'golden_melon', name: 'เมลอนทองคำเกาะโจรสลัด', sellPrice: 420, energyRestore: 120, desc: 'ผลไม้สีทองอร่ามหวานฉ่ำ โตบนเกาะเขตร้อน ขายได้ราคาสูงถึง 420 G!' },
  starfruit: { id: 'starfruit', name: 'ผลไม้ดวงดาวแคริบเบียน', sellPrice: 550, energyRestore: 150, hpRestore: 100, desc: 'ผลไม้รูปดาวเรืองแสง รสเปรี้ยวอมหวาน ฟื้นพลังชีวิต +100 และพลังงาน +150' },
  banana_seed: { id: 'banana_seed', name: 'หน่อกล้วยทองเพาะชำ', sellPrice: 25, desc: 'หน่อพันธุ์กล้วยหอม ปลูกในดินเกาะโต 3 วัน' },
  golden_melon_seed: { id: 'golden_melon_seed', name: 'เมล็ดเมลอนทองคำเกาะโจรสลัด', sellPrice: 50, desc: 'เมล็ดพันธุ์ผลไม้ทองคำ ปลูกในแปลงเกาะโต 5 วัน' },
  starfruit_seed: { id: 'starfruit_seed', name: 'เมล็ดผลไม้ดาวแคริบเบียน', sellPrice: 70, desc: 'เมล็ดผลไม้ดวงดาว ปลูกในแปลงเกาะโต 6 วัน' },
  pirate_doubloon: { id: 'pirate_doubloon', name: 'เหรียญทองโบราณโจรสลัด (Ancient Doubloon)', sellPrice: 100, desc: 'เหรียญทองคำสลักลายหัวกะโหลก ใช้แลกไอเทมระดับสูงกับกัปตันบาร์นาบี้' },
  skeleton_key: { id: 'skeleton_key', name: 'กุญแจโครงกระดูกโจรสลัด (Skeleton Key)', sellPrice: 150, desc: 'กุญแจกระดูกอาถรรพ์ ใช้ไขเปิดหีบสมบัติโบราณบนซากเรืออับปาง' },
  seashell: { id: 'seashell', name: 'เปลือกหอยมุกสีรุ้ง (Pearl Seashell)', sellPrice: 45, desc: 'เปลือกหอยแวววาว เก็บได้ตามชายหาดเกาะเขตร้อน' },
  message_bottle: { id: 'message_bottle', name: 'ขวดแก้วลายแทงสมบัติ', sellPrice: 75, desc: 'ขวดแก้วลอยน้ำที่มีลายแทงซากเรืออับปางซ่อนอยู่ด้านใน' },
  crab_meat: { id: 'crab_meat', name: 'เนื้อปูยักษ์สด (Stoneback Crab Meat)', sellPrice: 85, desc: 'เนื้อปูทะเลสดแน่นหวาน นำไปทอดเป็นทอดมันปูยักษ์' },
  cutlass_saber: { id: 'cutlass_saber', name: 'ดาบโจรสลัดคัตลาสอาถรรพ์ (Corsair Cutlass)', sellPrice: 1200, desc: 'ดาบโค้งเหล็กกล้าแห่งแคริบเบียน ฟันคลื่นจันทร์เสี้ยววารี พลังโจมตี 62 ติดคริติคอล +20%!' },
  pirate_tricorn_hat: { id: 'pirate_tricorn_hat', name: 'หมวกกัปตันโจรสลัดสามมุม (Captain Tricorn)', sellPrice: 900, desc: '[หมวกแฟชั่น & บัฟ] สวมใส่เพิ่มโอกาสหลบหลีก +20% และเดินไวขึ้น +25%' },
  parrot_egg: { id: 'parrot_egg', name: 'ไข่นกแก้วมาคอว์โจรสลัด (Parrot Egg)', sellPrice: 1500, desc: 'ฟักเป็นนกแก้วคู่หูโจรสลัด บินตามเก็บของและจิกศัตรู' },
  island_warp_totem: { id: 'island_warp_totem', name: 'เสาวาร์ปเกาะเขตร้อน (Island Warp Totem)', sellPrice: 250, desc: 'กดใช้เพื่อเทเลพอร์ตข้ามมิติมายังเกาะเขตร้อนได้ทันทีจากทุกที่' },
  tropical_delight_drink: { id: 'tropical_delight_drink', name: 'ค็อกเทลเขตร้อนสูตรกัปตัน', sellPrice: 350, energyRestore: 160, hpRestore: 100, desc: 'เครื่องดื่มผลไม้เขตร้อนเย็นฉ่ำ ดื่มเพื่อวิ่งเร็วขึ้น +60% นาน 5 นาที!' },
  crab_cakes: { id: 'crab_cakes', name: 'ทอดมันปูยักษ์เกาะสมบัติ (Crab Cakes)', sellPrice: 380, energyRestore: 130, hpRestore: 70, desc: 'เนื้อปูคลุกเคล้าเครื่องเทศทอดกรอบ รสเลิศ' },
  tropical_smoothie: { id: 'tropical_smoothie', name: 'สมูทตี้ผลไม้รวมเขตร้อน (Tropical Smoothie)', sellPrice: 340, energyRestore: 120, hpRestore: 60, desc: 'สมูทตี้สับปะรด กล้วย มะพร้าว ฟื้นฟูพลังงานยอดเยี่ยม' },
  clownfish: { id: 'clownfish', name: 'ปลาการ์ตูนนีโม่', sellPrice: 85, desc: 'ปลาทะเลเขตร้อนลายส้มสลับขาว' },
  lionfish: { id: 'lionfish', name: 'ปลาสิงโตครีบเพลิง', sellPrice: 135, desc: 'ปลาทะเลครีบหนามแหลมคม ลวดลายงดงามดั่งเปลวไฟ' },
  manta_ray: { id: 'manta_ray', name: 'ปลากระเบนราหูยักษ์', sellPrice: 260, desc: 'กระเบนทะเลลึกตัวมหึมา ร่อนใต้เกลียวคลื่น' },
  hammerhead_shark: { id: 'hammerhead_shark', name: 'ฉลามหัวค้อนเกาะสมบัติ', sellPrice: 700, desc: 'ราชันแห่งท้องทะเลเขตร้อน ฉลามในตำนานที่เฝ้าซากเรืออับปาง' },
  magma_wyrm_scale: { id: 'magma_wyrm_scale', name: 'เกล็ดมังกรลาวายักษ์ (Magma Scale)', sellPrice: 650, desc: 'เกล็ดหนาทนความร้อนนับพันองศา ดร็อปจากคาร์ซาร็อค ใช้หลอมอาวุธที่แท่นหลอมภูเขาไฟ' },
  volcano_flame_sword: { id: 'volcano_flame_sword', name: 'ดาบเพลิงสุริยันอัคนี (Solar Magma Blade)', sellPrice: 1800, desc: 'ดาบโบราณใจกลางภูเขาไฟ พลังโจมตี 78 คลื่นลูกไฟลาวา คริติคอล +20%' },
  ring_of_fire_walker: { id: 'ring_of_fire_walker', name: 'แหวนผู้เดินบนลาวา (Firewalker Band)', sellPrice: 1400, desc: '[เครื่องประดับ] ป้องกันความเสียหายจากไฟและบ่อลาวา 100% พร้อมวิ่งไวขึ้น 15%' },
  volcano_cinder_forge_stone: { id: 'volcano_cinder_forge_stone', name: 'ศิลาหลอมอัคนีขั้นสูง', sellPrice: 600, desc: 'ใช้ผสานพลังเสริมออปชันขั้นสูงสุดที่แท่นหลอมภูเขาไฟ' }
};

export const WORLD_MONSTERS: Record<string, WorldMonsterData> = {
  shadow_wolf: {
    id: 'shadow_wolf',
    name: 'หมาป่าเงา (Shadow Wolf)',
    hp: 80,
    maxHp: 80,
    speed: 1.6,
    damage: 12,
    attackCooldown: 900,
    aggroDist: 180,
    drops: [{ item: 'shadow_pelt', chance: 1.0 }, { item: 'wolf_fang', chance: 1.0 }],
    gold: 12,
    xp: 15
  },
  goblin_scout: {
    id: 'goblin_scout',
    name: 'ก็อบลินโจรไพร (Goblin Scout)',
    hp: 65,
    maxHp: 65,
    speed: 1.3,
    damage: 10,
    attackCooldown: 1100,
    aggroDist: 210,
    drops: [{ item: 'iron_ore', chance: 1.0 }, { item: 'starflower_herb', chance: 0.6 }],
    gold: 10,
    xp: 14
  },
  demon_treant: {
    id: 'demon_treant',
    name: 'ต้นไม้ปีศาจกินคน (Demon Treant)',
    hp: 170,
    maxHp: 170,
    speed: 0.7,
    damage: 20,
    attackCooldown: 1400,
    aggroDist: 150,
    drops: [{ item: 'cursed_wood', chance: 0.85 }, { item: 'mana_gem', chance: 0.30 }],
    gold: 24,
    xp: 28
  },
  cave_bat: {
    id: 'cave_bat',
    name: 'ค้างคาวถ้ำดูดเลือด (Cave Bat)',
    hp: 45,
    maxHp: 45,
    speed: 2.1,
    damage: 8,
    attackCooldown: 700,
    aggroDist: 190,
    drops: [{ item: 'bat_wing', chance: 0.75 }, { item: 'ruby_gem', chance: 0.14 }],
    gold: 8,
    xp: 12
  },
  crystal_slime: {
    id: 'crystal_slime',
    name: 'สไลม์ผลึกคริสตัล (Crystal Slime)',
    hp: 95,
    maxHp: 95,
    speed: 1.1,
    damage: 14,
    attackCooldown: 1200,
    aggroDist: 160,
    drops: [{ item: 'crystal_core', chance: 0.70 }, { item: 'mana_gem', chance: 0.25 }, { item: 'diamond_crystal', chance: 0.08 }],
    gold: 16,
    xp: 20
  },
  swamp_croc: {
    id: 'swamp_croc',
    name: 'จระเข้หนองน้ำพิษ (Gloom Marsh Croc)',
    hp: 120,
    maxHp: 120,
    speed: 1.1,
    damage: 16,
    attackCooldown: 1000,
    aggroDist: 170,
    drops: [{ item: 'hydra_scale', chance: 1.0 }, { item: 'swamp_herb', chance: 0.8 }],
    gold: 20,
    xp: 25
  },
  crystal_spider: {
    id: 'crystal_spider',
    name: 'แมงมุมผลึกปริซึม (Prismatic Crystal Spider)',
    hp: 85,
    maxHp: 85,
    speed: 1.7,
    damage: 14,
    attackCooldown: 800,
    aggroDist: 200,
    drops: [{ item: 'crystal_core', chance: 0.75 }, { item: 'diamond_crystal', chance: 0.12 }],
    gold: 18,
    xp: 22
  },
  magma_elemental: {
    id: 'magma_elemental',
    name: 'อสูรธาตุเพลิงลาวา (Magma Elemental)',
    hp: 150,
    maxHp: 150,
    speed: 0.9,
    damage: 20,
    attackCooldown: 1300,
    aggroDist: 180,
    drops: [{ item: 'flame_heart', chance: 0.35 }, { item: 'ruby_gem', chance: 0.25 }],
    gold: 25,
    xp: 32
  },
  frost_wolf: {
    id: 'frost_wolf',
    name: 'หมาป่าหิมะเยือกแข็ง (Frostpeak Snow Wolf)',
    hp: 110,
    maxHp: 110,
    speed: 1.8,
    damage: 17,
    attackCooldown: 900,
    aggroDist: 210,
    drops: [{ item: 'frost_crystal', chance: 1.0 }, { item: 'wolf_fang', chance: 1.0 }, { item: 'frost_berry', chance: 0.6 }],
    gold: 22,
    xp: 28
  },
  skeleton_warrior: {
    id: 'skeleton_warrior',
    name: 'นักรบโครงกระดูกโบราณ (Ancient Skeleton Warrior)',
    hp: 130,
    maxHp: 130,
    speed: 1.2,
    damage: 19,
    attackCooldown: 1100,
    aggroDist: 180,
    drops: [{ item: 'iron_ore', chance: 0.75 }, { item: 'cursed_relic', chance: 0.35 }],
    gold: 24,
    xp: 30
  },
  spire_demon: {
    id: 'spire_demon',
    name: 'อสูรผลึกมิติ (Spire Crystal Fiend)',
    hp: 150,
    maxHp: 150,
    speed: 1.6,
    damage: 22,
    attackCooldown: 900,
    aggroDist: 220,
    drops: [{ item: 'spire_shard', chance: 0.95 }, { item: 'crystal_core', chance: 0.4 }],
    gold: 30,
    xp: 38
  },
  spire_colossus: {
    id: 'spire_colossus',
    name: 'ผู้พิทักษ์หอคอยมิติ (Spire Colossus Guardian)',
    hp: 380,
    maxHp: 380,
    speed: 1.1,
    damage: 32,
    attackCooldown: 1200,
    aggroDist: 260,
    drops: [{ item: 'spire_shard', chance: 0.85 }, { item: 'diamond_crystal', chance: 0.20 }],
    gold: 65,
    xp: 70
  },
  island_crab: {
    id: 'island_crab',
    name: 'ปูยักษ์เกราะหิน (Stoneback Crab)',
    hp: 140,
    maxHp: 140,
    speed: 1.1,
    damage: 16,
    attackCooldown: 1000,
    aggroDist: 170,
    drops: [{ item: 'crab_meat', chance: 1.0 }, { item: 'seashell', chance: 0.75 }, { item: 'pirate_doubloon', chance: 0.3 }],
    gold: 25,
    xp: 28
  },
  cursed_pirate_skeleton: {
    id: 'cursed_pirate_skeleton',
    name: 'โจรสลัดโครงกระดูกต้องสาป (Cursed Pirate Skeleton)',
    hp: 210,
    maxHp: 210,
    speed: 1.5,
    damage: 26,
    attackCooldown: 850,
    aggroDist: 220,
    drops: [{ item: 'pirate_doubloon', chance: 0.55 }, { item: 'skeleton_key', chance: 0.20 }, { item: 'gold_ore', chance: 0.30 }],
    gold: 45,
    xp: 50
  },
  magma_sprite: {
    id: 'magma_sprite',
    name: 'ภูตลูกไฟลาวา (Magma Sprite)',
    hp: 120,
    maxHp: 120,
    speed: 1.8,
    damage: 20,
    attackCooldown: 700,
    aggroDist: 240,
    drops: [{ item: 'cinder_shard', chance: 0.30 }, { item: 'coal', chance: 0.45 }],
    gold: 25,
    xp: 35
  },
  magma_duggy: {
    id: 'magma_duggy',
    name: 'หนอนลาวาหนามหิน (Magma Duggy)',
    hp: 190,
    maxHp: 190,
    speed: 1.2,
    damage: 28,
    attackCooldown: 850,
    aggroDist: 200,
    drops: [{ item: 'cinder_shard', chance: 0.35 }, { item: 'iron_ore', chance: 0.45 }],
    gold: 35,
    xp: 48
  },
  lava_lurker: {
    id: 'lava_lurker',
    name: 'ปีศาจลาวาดำ (Lava Lurker)',
    hp: 280,
    maxHp: 280,
    speed: 1.0,
    damage: 36,
    attackCooldown: 1000,
    aggroDist: 220,
    drops: [{ item: 'cinder_shard', chance: 0.50 }, { item: 'magma_wyrm_scale', chance: 0.08 }, { item: 'gold_ore', chance: 0.30 }],
    gold: 65,
    xp: 75
  }
};

export const BOSS_KATHUROS: BossData = {
  id: 'boss_kathuros',
  name: 'ราชินีสปอร์ปีศาจ คาธูรอส',
  title: 'เจ้านรกแห่งวิหารโบราณ (Queen of Blight Kathuros)',
  hp: 3200,
  maxHp: 3200,
  speed: 1.0,
  damage: 24,
  attackCooldown: 1200,
  aggroDist: 380,
  gold: 150,
  xp: 450,
  drops: [
    { item: 'demon_heart', chance: 1.0, count: 1 },
    { item: 'crown_of_despair', chance: 1.0, count: 1 },
    { item: 'ruby_gem', chance: 1.0, count: 2 }
  ]
};

export const BOSS_LUMINARCH: BossData = {
  id: 'boss_luminarch',
  name: 'โกเลมผลึกคริสตัลโบราณ ลูมินาร์ค',
  title: 'ผู้พิทักษ์หุบเหวปริซึม (Ancient Crystal Golem Luminarch)',
  hp: 5800,
  maxHp: 5800,
  speed: 0.85,
  damage: 30,
  attackCooldown: 1400,
  aggroDist: 380,
  gold: 240,
  xp: 650,
  drops: [
    { item: 'luminarch_crystal_heart', chance: 1.0, count: 1 },
    { item: 'diamond_crystal', chance: 1.0, count: 1 },
    { item: 'gold_ore', chance: 1.0, count: 3 }
  ]
};

export const BOSS_HYDRAKIS: BossData = {
  id: 'boss_hydrakis',
  name: 'พญาไฮดราหนองน้ำพิษ ไฮดราคิส',
  title: 'มัจจุราชสามเศียรแห่งบึงมืด (Hydrakis the Venom Marsh Hydra)',
  hp: 6800,
  maxHp: 6800,
  speed: 1.05,
  damage: 34,
  attackCooldown: 1100,
  aggroDist: 380,
  gold: 300,
  xp: 750,
  drops: [
    { item: 'hydra_venom_gland', chance: 1.0, count: 1 },
    { item: 'hydra_scale', chance: 1.0, count: 3 },
    { item: 'swamp_herb', chance: 1.0, count: 3 }
  ]
};

export const BOSS_IGNISTRON: BossData = {
  id: 'boss_ignistron',
  name: 'ราชันย์มังกรลาวาเพลิงอัคนี อิกนิสทรอน',
  title: 'เจ้าอสูรเพลิงโลกันตร์ (Ignistron the Molten Flame Drake)',
  hp: 9200,
  maxHp: 9200,
  speed: 1.15,
  damage: 38,
  attackCooldown: 1000,
  aggroDist: 400,
  gold: 380,
  xp: 900,
  drops: [
    { item: 'magma_dragon_horn', chance: 1.0, count: 1 },
    { item: 'flame_heart', chance: 1.0, count: 2 },
    { item: 'ruby_gem', chance: 1.0, count: 3 }
  ]
};

export const BOSS_FROSTFANG: BossData = {
  id: 'boss_frostfang',
  name: 'จอมอสูรไททันน้ำแข็ง ฟรอสต์แฟงก์',
  title: 'เจ้าพายุเหมันต์นิรันดร์ (Frostfang the Glacial Titan)',
  hp: 10000,
  maxHp: 10000,
  speed: 0.95,
  damage: 40,
  attackCooldown: 1200,
  aggroDist: 380,
  gold: 420,
  xp: 950,
  drops: [
    { item: 'glacial_titan_core', chance: 1.0, count: 1 },
    { item: 'frost_crystal', chance: 1.0, count: 3 },
    { item: 'diamond_crystal', chance: 1.0, count: 1 }
  ]
};

export const BOSS_MALAKOR: BossData = {
  id: 'boss_malakor',
  name: 'ลอร์ดมรณะกระดูกอสูร มาลาคอร์',
  title: 'ราชาไร้นามแห่งสุสานต้องสาป (Lord Malakor the Undead Overlord)',
  hp: 12500,
  maxHp: 12500,
  speed: 1.0,
  damage: 44,
  attackCooldown: 1100,
  aggroDist: 380,
  gold: 520,
  xp: 1200,
  drops: [
    { item: 'death_lord_soul', chance: 1.0, count: 1 },
    { item: 'cursed_relic', chance: 1.0, count: 2 },
    { item: 'crown_of_despair', chance: 1.0, count: 1 }
  ]
};

export const BOSS_SYLVANUS: BossData = {
  id: 'boss_sylvanus',
  name: 'เทพพฤกษาบรรพกาล ซิลวาเนีย',
  title: 'เทวีผู้พิทักษ์ไพรสณฑ์โบราณ (Sylvanus Ancient Forest Sovereign)',
  hp: 15000,
  maxHp: 15000,
  speed: 0.95,
  damage: 48,
  attackCooldown: 1000,
  aggroDist: 420,
  gold: 650,
  xp: 1400,
  drops: [
    { item: 'ancient_tree_heart', chance: 1.0, count: 1 },
    { item: 'sacred_shard_nature', chance: 1.0, count: 1 },
    { item: 'star_fruit', chance: 1.0, count: 2 }
  ]
};

export const BOSS_ASTREON: BossData = {
  id: 'boss_astreon',
  name: 'จ้าวแห่งพายุสายฟ้า ออสทริออน',
  title: 'ราชันย์แห่งสายฟ้าและวายุคลั่ง (Astreon Sovereign of Tempest)',
  hp: 18500,
  maxHp: 18500,
  speed: 1.45,
  damage: 54,
  attackCooldown: 850,
  aggroDist: 450,
  gold: 800,
  xp: 1800,
  drops: [
    { item: 'storm_core', chance: 1.0, count: 1 },
    { item: 'sacred_shard_thunder', chance: 1.0, count: 1 },
    { item: 'thunder_crystal', chance: 1.0, count: 3 }
  ]
};

export const BOSS_KARZARAK: BossData = {
  id: 'boss_karzarak',
  name: 'คาร์ซาร็อค มังกรลาวายักษ์โบราณ',
  title: 'จ้าวแห่งปล่องภูเขาไฟเกาะสมบัติ (Karzarak the Ancient Magma Wyrm)',
  hp: 22000,
  maxHp: 22000,
  speed: 1.25,
  damage: 58,
  attackCooldown: 900,
  aggroDist: 480,
  gold: 950,
  xp: 2200,
  drops: [
    { item: 'magma_wyrm_scale', chance: 1.0, count: 2 },
    { item: 'volcano_flame_sword', chance: 1.0, count: 1 },
    { item: 'ring_of_fire_walker', chance: 1.0, count: 1 },
    { item: 'cinder_shard', chance: 1.0, count: 8 },
    { item: 'pirate_doubloon', chance: 1.0, count: 6 }
  ]
};

export const BOSS_REGISTRY: Record<string, BossData> = {
  boss_kathuros: BOSS_KATHUROS,
  boss_luminarch: BOSS_LUMINARCH,
  boss_hydrakis: BOSS_HYDRAKIS,
  boss_ignistron: BOSS_IGNISTRON,
  boss_frostfang: BOSS_FROSTFANG,
  boss_malakor: BOSS_MALAKOR,
  boss_sylvanus: BOSS_SYLVANUS,
  boss_astreon: BOSS_ASTREON,
  boss_karzarak: BOSS_KARZARAK
};

export interface VolcanoForgeRecipe {
  id: string;
  name: string;
  desc: string;
  costCinderShards: number;
  materials?: Record<string, number>;
  resultItem?: string;
  resultCount?: number;
  type: 'weapon' | 'accessory' | 'enchant' | 'currency';
}

export const VOLCANO_FORGE_RECIPES: Record<string, VolcanoForgeRecipe> = {
  forge_solar_blade: {
    id: 'forge_solar_blade',
    name: 'ดาบเพลิงสุริยันอัคนี (Solar Magma Blade)',
    desc: 'หลอมดาบเพลิงศักดิ์สิทธิ์ใจกลางภูเขาไฟ พลังโจมตี 78 คลื่นลูกไฟลาวา คริติคอล +20%',
    costCinderShards: 25,
    materials: { magma_wyrm_scale: 4, gold_ore: 10 },
    resultItem: 'volcano_flame_sword',
    resultCount: 1,
    type: 'weapon'
  },
  forge_fire_ring: {
    id: 'forge_fire_ring',
    name: 'แหวนผู้เดินบนลาวา (Firewalker Band)',
    desc: 'เครื่องประดับโบราณ ป้องกันความเสียหายจากไฟและลาวา 100% พร้อมวิ่งไวขึ้น 15%',
    costCinderShards: 18,
    materials: { magma_wyrm_scale: 2, ruby_gem: 5 },
    resultItem: 'ring_of_fire_walker',
    resultCount: 1,
    type: 'accessory'
  },
  forge_enchant_weapon: {
    id: 'forge_enchant_weapon',
    name: 'สลักรูนเถ้าภูเขาไฟเสริมอาวุธ (+12 DMG, +5% Crit)',
    desc: 'อาบพลังเถ้าภูเขาไฟให้อาวุธที่สวมใส่ เพิ่มพลังโจมตี +12 และโอกาสคริติคอล +5% (สะสมสูงสุด 3 ระดับ)',
    costCinderShards: 18,
    materials: { gold_ore: 5, ruby_gem: 2 },
    type: 'enchant'
  },
  forge_cinder_to_doubloons: {
    id: 'forge_cinder_to_doubloons',
    name: 'หลอมเศษเถ้าเป็นเหรียญทองโจรสลัด (3 เหรียญ)',
    desc: 'นำเศษผลึกเพลิง 8 ชิ้น หลอมประทับตราเป็นเหรียญทองโจรสลัดโบราณ 3 เหรียญ',
    costCinderShards: 8,
    resultItem: 'pirate_doubloon',
    resultCount: 3,
    type: 'currency'
  }
};

export const QUESTS: Record<string, QuestData> = {
  q1: {
    id: 'q1',
    title: 'บทที่ 1: รุ่งอรุณสีเลือด & มรดกของปู่อาเธอร์',
    desc: 'คืนที่คุณย้ายมารับช่วงต่อฟาร์มของปู่อาเธอร์ จันทราสีเลือดก็ปรากฏเหนือฟ้าพร้อมหมอกสปอร์ประหลาด! ปู่เคยฝากคำเตือนถึง "ผนึกเหนือ" ไว้กับนายกเทศมนตรีกิลเบิร์ต จงช่วยปกป้องไร่โดยกำจัดแมลงปีศาจ 3 ตัว รวบรวมสปอร์กลายพันธุ์ 2 ชิ้น แล้วไปพบนายกฯ กิลเบิร์ตที่คฤหาสน์หมู่บ้านศิลาสุขาวดี',
    giver: 'gilbert',
    targetType: 'collect',
    targetNpc: 'gilbert',
    reqBugs: 3,
    reqSpores: 2,
    rewardDesc: '200 G, ยาฟื้นพลังชีวิต x3, 100 XP',
    goldReward: 200,
    xpReward: 100,
    itemsReward: [
      { id: 'health_potion', count: 3, name: 'ยาฟื้นพลังชีวิตชั้นเลิศ' }
    ]
  },
  q2: {
    id: 'q2',
    title: 'บทที่ 2: น้ำตาแห่งพฤกษา & บันทึกที่หายไป',
    desc: 'ตัวอย่างสปอร์จากไร่เผยความจริงน่าตกใจ—นี่คือ "เชื้อวิบัติโลหิต" ชนิดเดียวกับที่พรากพ่อแม่นักพฤกษศาสตร์ของหมอยาสาวลิเลียนไปเมื่อสิบปีก่อน! จงนำ สปอร์กลายพันธุ์ 3 ชิ้น และ สมุนไพรดวงดาว 2 ดอก จากป่ามาส่งให้ลิเลียนที่คลินิกหมู่บ้าน เพื่อสกัดเซรุ่มและอ่านรหัสความทรงจำที่ซ่อนอยู่ในสปอร์',
    giver: 'lilian',
    targetType: 'collect',
    targetNpc: 'lilian',
    rewardDesc: '350 G, เซรุ่มต้านสปอร์พิษ x2, ดาบเหล็กกล้า, 180 XP',
    goldReward: 350,
    xpReward: 180,
    itemsReward: [
      { id: 'antidote_serum', count: 2, name: 'เซรุ่มต้านสปอร์พิษ' },
      { id: 'iron_sword', count: 1, name: 'ดาบเหล็กกล้านักผจญภัย' }
    ]
  },
  q3: {
    id: 'q3',
    title: 'บทที่ 3: คำสาบาน ณ ปราการเหนือ',
    desc: 'เซรุ่มเปิดเผยว่าสัตว์ป่าถูกควบคุมด้วยคลื่นเสียงใต้พิภพจากทิศเหนือ! ผู้กองวาเลเรียยืนหยัดตรึงแนวรบปราการเหนือเพียงลำพังเพื่อปกป้องชาวบ้านไม่ให้ซ้ำรอยกองทัพเหล็กที่ล่มสลาย จงช่วยกำจัดหมาป่าเงา 3 ตัวในป่าทึบ และขุดแร่ทับทิมเวทมนตร์ 2 ก้อน ส่งให้ผู้กองวาเลเรียเพื่อนำความหวังกลับมา',
    giver: 'valeria',
    targetType: 'hunt_mine',
    targetNpc: 'valeria',
    reqWolves: 3,
    reqRubies: 2,
    rewardDesc: '500 G, ปืนล่าสัตว์โบราณ, 250 XP',
    goldReward: 500,
    xpReward: 250,
    itemsReward: [
      { id: 'rifle', count: 1, name: 'ปืนล่าสัตว์โบราณ' }
    ]
  },
  q4: {
    id: 'q4',
    title: 'บทที่ 4: เสียงกระซิบใต้พิภพ & ผนึกแรกที่แตกสลาย',
    desc: 'ผู้เฒ่าปราชญ์เอลดรินยอมเปิดเผยความลับ—ในอดีตเขาและปู่อาเธอร์เคยร่วมกันสร้าง "ผนึกแปดธาตุ" กักขังหายนะไว้ใต้หุบเขา แต่บัดนี้ผนึกแรกร้าวฉานและบ่มเพาะรังไหมยักษ์อยู่ในถ้ำผลึกใต้พิภพ! จงนำอีเต๋อขุด ผลึกมานาสีคราม 2 ชิ้น และกำจัดอสูรในถ้ำ 3 ตัว เพื่อตามรอยมือมืดที่ทำลายผนึก',
    giver: 'eldrin',
    targetType: 'hunt_mine',
    targetNpc: 'eldrin',
    rewardDesc: '800 G, เซรุ่มต้านสปอร์พิษ x3, 400 XP',
    goldReward: 800,
    xpReward: 400,
    itemsReward: [
      { id: 'antidote_serum', count: 3, name: 'เซรุ่มต้านสปอร์พิษ' }
    ]
  },
  q5: {
    id: 'q5',
    title: 'บทที่ 5: มงกุฎแห่งความสิ้นหวัง (Queen Kathuros)',
    desc: 'รังไหมนำไปสู่ลานบูชาวิหารโบราณทางเหนือสุด ที่นั่น "ราชินีสปอร์ปีศาจ คาธูรอส" ผู้ถูกจองจำกำลังคลุ้มคลั่ง! จงข้ามสะพานปราการเหนือไปสยบราชินีและนำความสงบสุขคืนมา... ทว่าจงระวัง เพราะเสียงหัวใจสุดท้ายของนางอาจก้องบอกชื่อของผู้บงการตัวจริง!',
    giver: 'gilbert',
    targetType: 'boss',
    targetBoss: 'boss_kathuros',
    rewardDesc: '2,500 G, ดาบศักดิ์สิทธิ์เอ็กซ์คาลิเบอร์, 1,200 XP + ปลดล็อกคัตซีนความลับ',
    goldReward: 2500,
    xpReward: 1200,
    itemsReward: [
      { id: 'excalibur_sword', count: 1, name: 'ดาบศักดิ์สิทธิ์เอ็กซ์คาลิเบอร์' }
    ]
  },
  q6: {
    id: 'q6',
    title: 'บทที่ 6: หัวใจปริซึมที่ถูกกักขัง (Crystal Abyss)',
    desc: 'ภาพนิมิตจากมงกุฎของคาธูรอสเผยมือโครงกระดูกปริศนาที่ปลุกผู้พิทักษ์ทั้ง 4 ธาตุให้บ้าคลั่ง! เอลดรินสารภาพว่าเขาซ่อน "แก่นศิลาสุริยัน" ไว้ในร่าง "โกเลมผลึกโบราณ ลูมินาร์ค" ใต้ถ้ำผลึกลึก (Crystal Abyss Floor -2) จงลงสู่รอยแยกผลึก สยบโกเลมที่ถูกครอบงำ และชิงศิลาสุริยันกลับมา!',
    giver: 'eldrin',
    targetType: 'boss',
    targetBoss: 'boss_luminarch',
    rewardDesc: '3,000 G, เพชรผลึกประกายรุ้ง x3, 1,500 XP',
    goldReward: 3000,
    xpReward: 1500,
    itemsReward: [
      { id: 'diamond_crystal', count: 3, name: 'เพชรผลึกประกายรุ้ง' }
    ]
  },
  q7: {
    id: 'q7',
    title: 'บทที่ 7: น้ำตาพ่อแม่ที่หนองน้ำมืด (Hydrakis)',
    desc: 'พิษสีเขียวมรกตเริ่มไหลซึมเข้าสู่แหล่งน้ำของหมู่บ้าน! ลิเลียนพบรอยตราบันทึกสุดท้ายของพ่อแม่เธอ—พวกเขาไม่ได้หายตัวไป แต่สละชีวิตปิดผนึก "พญาไฮดราสามเศียร ไฮดราคิส" ไว้ในหนองน้ำมืด! จงเคียงข้างลิเลียน บุกบึงพิษทางตะวันตกเฉียงใต้เพื่อปลดปล่อยวิญญาณและชำระล้างสายน้ำแห่งศิลาสุขาวดี!',
    giver: 'lilian',
    targetType: 'boss',
    targetBoss: 'boss_hydrakis',
    rewardDesc: '3,500 G, ยาฟื้นพลังชีวิตชั้นเลิศ x5, 1,800 XP',
    goldReward: 3500,
    xpReward: 1800,
    itemsReward: [
      { id: 'health_potion', count: 5, name: 'ยาฟื้นพลังชีวิตชั้นเลิศ' }
    ]
  },
  q8: {
    id: 'q8',
    title: 'บทที่ 8: เปลวไฟแห่งความแค้น ณ ปล่องภูเขาไฟ (Ignistron)',
    desc: 'ฟ้าเหนือหุบเขาเปลี่ยนเป็นสีเพลิง! เถ้าถ่านจากปากปล่องภูเขาไฟอิคนิสเริ่มเผาป่า... ผู้กองวาเลเรียจ้องเปลวเพลิงด้วยดวงตาแดงก่ำ—มันคือไฟแบบเดียวกับที่เผาบ้านเกิดของเธอเมื่อครั้งยังเยาว์! จงร่วมสู้เคียงบ่าเคียงไหล่ สยบ "ราชันย์มังกรลาวา อิกนิสทรอน" ณ ปล่องภูเขาไฟทางตะวันตกเฉียงเหนือ!',
    giver: 'valeria',
    targetType: 'boss',
    targetBoss: 'boss_ignistron',
    rewardDesc: '4,000 G, อัญมณีทับทิมโลกันตร์ x5, 2,000 XP',
    goldReward: 4000,
    xpReward: 2000,
    itemsReward: [
      { id: 'ruby_gem', count: 5, name: 'อัญมณีทับทิมโลกันตร์' }
    ]
  },
  q9: {
    id: 'q9',
    title: 'บทที่ 9: เหมันต์นิรันดร์แห่งยอดเขาบรรพชน (Frostfang)',
    desc: 'พายุหิมะวิปริตพัดกระหน่ำจนเตาหลอมของช่างคาเอลแทบดับมอด! คาเอลเล่าถึงคำสาปที่แช่แข็งหมู่บ้านช่างเหล็กบรรพบุรุษของเขาบนยอดเขาฟรอสต์พีค เมื่อ "จอมอสูรไททันน้ำแข็ง ฟรอสต์แฟงก์" ตื่นขึ้น จงปีนฝ่าพายุหิมะทางตะวันออกเฉียงเหนือ ละลายคำสาปน้ำแข็งพันปีและชิงแก่นเหมันต์กลับมา!',
    giver: 'kael',
    targetType: 'boss',
    targetBoss: 'boss_frostfang',
    rewardDesc: '4,500 G, ผลึกน้ำแข็งบริสุทธิ์ x5, 2,500 XP',
    goldReward: 4500,
    xpReward: 2500,
    itemsReward: [
      { id: 'frost_crystal', count: 5, name: 'ผลึกน้ำแข็งบริสุทธิ์' }
    ]
  },
  q10: {
    id: 'q10',
    title: 'บทที่ 10: กษัตริย์ไร้นามผู้ทรยศ (Lord Malakor)',
    desc: 'ความจริงอันปวดร้าวถูกคลี่คลาย! จอมบงการที่ทำลายผนึกและปลุกอสูรทุกตนคือ "ลอร์ดมาลาคอร์"—อดีตสหายร่วมสาบานผู้หักหลังปู่อาเธอร์และขโมยพลังความมืดจากสุสานใต้พิภพ! จงก้าวเข้าสู่ The Nether Crypt ทางตะวันออกเฉียงใต้ เพื่อสะสางคำสาบานนับร้อยปีแทนปู่ของเจ้า!',
    giver: 'gilbert',
    targetType: 'boss',
    targetBoss: 'boss_malakor',
    rewardDesc: '10,000 G, เคียวมรณะสูบวิญญาณ, 5,000 XP + ปลดล็อกบทความจริง',
    goldReward: 10000,
    xpReward: 5000,
    itemsReward: [
      { id: 'malakor_soul_scythe', count: 1, name: 'เคียวมรณะสูบวิญญาณลอร์ดมาลาคอร์' }
    ]
  },
  q11: {
    id: 'q11',
    title: 'บทที่ 11: พฤกษาวิปโยคแห่งไพรสณฑ์บรรพกาล (Sylvanus)',
    desc: 'แม้มาลาคอร์จะพ่ายแพ้ แต่รากลึกของป่าศักดิ์สิทธิ์ทางตะวันออกของป่าทมิฬยังถูกพิษจากคำสาปหลงเหลือ! ปราชญ์เอลดรินขอให้เจ้าบุกสู่ "Ancient Sacred Canopy" เพื่อปลุกสติ "เทพพฤกษาบรรพกาล ซิลวาเนีย" ด้วยคมดาบและความเมตตา พร้อมรับศิลาพฤกษาชิ้นที่ 7!',
    giver: 'eldrin',
    targetType: 'boss',
    targetBoss: 'boss_sylvanus',
    rewardDesc: '5,500 G, ผลไม้ดวงดาราพฤกษา x4, 3,200 XP',
    goldReward: 5500,
    xpReward: 3200,
    itemsReward: [
      { id: 'star_fruit', count: 4, name: 'ผลไม้ดวงดาราพฤกษา' }
    ]
  },
  q12: {
    id: 'q12',
    title: 'บทที่ 12: บัลลังก์สายฟ้าเหนือเมฆา (Astreon)',
    desc: 'สายฟ้าฟาดสนั่นเหนือยอดเขาหิมะฟรอสต์พีค! ศิลาธาตุชิ้นสุดท้าย—แก่นศิลาอัสนี—อยู่ในการครอบครองของ "จ้าวแห่งพายุสายฟ้า ออสทริออน" ผู้ไม่ยอมรับผู้ใดนอกจากผู้กล้าที่พิสูจน์หัวใจได้ จงไต่ขึ้นสู่ Tempest Lightning Plateau เหนือยอดเขาหิมะเพื่อชิงศิลาชิ้นที่ 8!',
    giver: 'valeria',
    targetType: 'boss',
    targetBoss: 'boss_astreon',
    rewardDesc: '7,000 G, ผลึกสายฟ้าอัสนีบาต x5, 4,000 XP',
    goldReward: 7000,
    xpReward: 4000,
    itemsReward: [
      { id: 'thunder_crystal', count: 5, name: 'ผลึกสายฟ้าอัสนีบาต' }
    ]
  },
  q_shrine: {
    id: 'q_shrine',
    title: 'บทสรุปตำนาน: พันธสัญญาแห่ง 8 ศิลาเทวะ (Sacred Shrine)',
    desc: 'บัดนี้แก่นศิลาศักดิ์สิทธิ์ทั้ง 8 ธาตุ (ปฐพี, สุริยัน, วารี, อัคคี, เหมันต์, ทมิฬ, พฤกษา, อัสนี) พร้อมเพรียงแล้ว! จงนำศิลาทั้งหมดไปประดิษฐาน ณ "แท่นบูชาวิหารศักดิ์สิทธิ์" เหนือลานวิหารป่าโบราณ (x:25, y:2) เพื่อทำตามเจตนารมณ์สุดท้ายของปู่อาเธอร์ และปลดปล่อยหุบเขาสุขาวดีสู่ยุคทองชั่วนิรันดร์!',
    giver: 'eldrin',
    targetType: 'purify',
    targetNpc: 'eldrin',
    rewardDesc: 'ฉายามหาจักรพรรดิฯ, ปลดล็อก Master Mode, พรแห่งเทพถาวร (+25% ความเร็ว & ผักโตเร็วขึ้น 1 วัน), 5,000 G, 5,000 XP',
    goldReward: 5000,
    xpReward: 5000,
    itemsReward: []
  }
};

export const NPC_STORY: Record<string, StoryNPCData> = {
  gilbert: {
    id: 'gilbert',
    name: 'นายกเทศมนตรี กิลเบิร์ต',
    role: 'ผู้นำหมู่บ้านศิลาสุขาวดี & สหายเก่าของปู่อาเธอร์',
    portraitType: 'gilbert',
    dialogues: {
      intro: 'ยินดีต้อนรับหลานชายของอาเธอร์... ข้าคือกิลเบิร์ต คืนนี้ฟ้าแดงฉานเหมือนคืนที่ปู่ของเจ้าพูดไว้ไม่มีผิด! "เมื่อใดที่ฝุ่นสีเลือดโปรยจากสันเขาเหนือ ผนึกจะเริ่มร้าว" ตอนนี้แมลงในไร่กลายร่างเป็นอสูรแล้ว ช่วยกำจัดแมลง 3 ตัวและเก็บสปอร์มาพิสูจน์ 2 ชิ้นที!',
      q1_progress: 'สปอร์สีเลือดนั่นไม่ใช่มลพิษธรรมดา... รีบกำจัดแมลงและนำตัวอย่างมาให้ข้าเร็วเข้า ชาวบ้านกำลังหวาดกลัว!',
      q1_reward: 'สวรรค์ทรงโปรด... กลิ่นอายเวทมนตร์โบราณในสปอร์นี้ชัดเจนมาก! รีบนำไปให้ หมอยาสาวลิเลียน ที่คลินิกวิจัยด่วน มันเกี่ยวพันกับเรื่องราวเมื่อ 200 ปีก่อนแน่!',
      q5_intro: 'ความจริงกระจ่างแล้วหลานเอ๋ย... "ราชินีสปอร์ปีศาจ คาธูรอส" กำลังตื่นขึ้นเหนือวิหารป่าโบราณ! จงสวมอาวุธที่คาเอลหลอมและพกเซรุ่มของลิเลียนไปพิสูจน์เจตนารมณ์ของปู่อาเธอร์!',
      q5_victory: 'ฟ้ากลับมาสว่างแล้ว! แต่เหตุใดข้ารู้สึกเหมือนเงาดำบางอย่างเพิ่งหลุดออกจากมงกุฎของนางไปทางทิศทั้งสี่... จงพักให้เต็มที่แล้วไปปรึกษาเอลดรินเรื่องบันทึกโบราณเถิด!',
      q10_intro: 'หลานเอ๋ย... ข้าปิดบังเรื่องนี้มานานเกินไปแล้ว เอลดรินเพิ่งยืนยัน—เงาที่อยู่เบื้องหลังทั้งหมดคือ "ลอร์ดมาลาคอร์" อดีตพี่น้องร่วมสาบานที่ทรยศปู่ของเจ้าและถูกจองจำไว้ใต้สุสานตะวันออกเฉียงใต้! หากไม่ยุติความแค้นนี้ หุบเขาจะไม่มีวันรอด!',
      q10_progress: 'มาลาคอร์รู้ทันทุกวิชาดาบของสายตระกูลเจ้า จงใช้ทุกสิ่งทุกอย่างที่เรียนรู้จากชาวเมือง—ทั้งยาของลิเลียน เกราะของคาเอล และเพลงดาบของวาเลเรีย!',
      grand_finale_victory: 'น้ำตาแห่งความปิติ... หากอาเธอร์ยังอยู่ ท่านคงภูมิใจในตัวเจ้าที่สุด! มาลาคอร์สงบลงแล้ว บัดนี้ถึงเวลาสานต่อศิลาธาตุที่เหลือกับปราชญ์เอลดรินเพื่อปลดผนึกวิหารเทวะชั่วนิรันดร์!'
    }
  },
  lilian: {
    id: 'lilian',
    name: 'หมอยาสาว ลิเลียน',
    role: 'แพทย์สมุนไพร & ทายาทนักพฤกษศาสตร์โบราณ',
    portraitType: 'lilian',
    dialogues: {
      intro: 'สวัสดีจ้ะ! ข้าคือลิเลียน... สปอร์สีแดงจากไร่ของเจ้านั้น ข้าจำมันได้แม่น—พ่อแม่ของข้าเคยอุทิศชีวิตวิจัย "เชื้อโลหิตโบราณ" ก่อนจะหายสาบสูญในป่าลึก! หากได้ สปอร์ 3 ชิ้น และ สมุนไพรดวงดาว 2 ดอก ข้าจะสกัดเซรุ่มแก้พิษได้แน่!',
      q2_progress: 'สมุนไพรดวงดาวจะเรืองแสงเบาๆ ริมทางเดินป่าทึบ จงเก็บด้วยความเบามือแล้วรีบนำกลับมาให้ข้านะจ๊ะ!',
      q2_complete: 'สำเร็จแล้ว!! กลิ่นหอมเย็นของสมุนไพรดวงดาวทำลายพิษได้จริงด้วย... นี่คือ "เซรุ่มต้านสปอร์พิษ" และในหลอดแก้วนี้ยังมีละอองความทรงจำที่ชี้ไปถึงปราการเหนือ รีบไปแจ้งผู้กองวาเลเรียเถิด!',
      q7_intro: 'ท่านผู้กล้า... ข้าพบบันทึกหน้าสุดท้ายของพ่อแม่ที่ลอยมากับกระแสน้ำ! พวกท่านไม่ได้หนีไปไหน... แต่สละชีวิตตรึง "พญาไฮดรา ไฮดราคิส" ไว้ในหนองน้ำมืดเพื่อไม่ให้พิษไหลลงหมู่บ้าน บัดนี้ผนึกคลายลงแล้ว ช่วยข้าส่งดวงวิญญาณของพวกท่านสู่สุคติด้วยเถอะนะ!',
      q7_progress: 'บึงมืดมีไอพิษกัดกร่อนรุนแรง ดื่มเซรุ่มที่ข้าปรุงไว้เสมอ และอย่าลืมอาหารสมุนไพรเกราะพฤกษานะจ๊ะ',
      q7_complete: 'น้ำในลำธารกลับมาใสสะอาดดั่งแก้วเจียระไนแล้ว... ข้าสัมผัสได้ว่าสายลมจากบึงมืดพัดมาแผ่วเบาเหมือนอ้อมกอดสุดท้ายของพ่อแม่ ขอบคุณเจ้ามากจริงๆ จ้ะ...',
      ready_craft: 'ขอบคุณที่นำความหวังกลับมาให้คลินิกนะจ๊ะ! ต้องการให้ข้าช่วยปรุงยาหรือตรวจอาการไหม?'
    }
  },
  bob: {
    id: 'bob',
    name: 'บ็อบ เจ้าของโรงเตี๊ยมรวงทอง',
    role: 'เถ้าแก่โรงเตี๊ยม, อดีตพรานพเนจร & ข่าวกรอง',
    portraitType: 'bob',
    dialogues: {
      intro: 'ฮ่าฮ่า! เจ้าหนุ่ม/สาวหน้าใหม่ผู้สืบทอดฟาร์มอาเธอร์สินะ! ข้าบ็อบ ปู่ของเจ้าเคยมานั่งจิบเบียร์เล่าเรื่องสัตว์ประหลาดให้ข้าฟังบ่อยๆ พักเหนื่อยเมื่อไหร่แวะมาที่โรงเตี๊ยมนี้ได้เสมอ!',
      rumors: 'สายข่าวข้าเล่าว่าใต้ถ้ำคริสตัลทางตะวันออกเฉียงเหนือมีเสาหินผลึกประหลาดเรืองแสงขึ้นกลางดึก และริมทะเลอ่าวซากเรือโจรสลัดแบล็กฮาวด์ยังมีเงามังกรหลับใหลอยู่ใต้ปล่องภูเขาไฟอีกด้วยนะ!',
      bounty_hint: 'เฮ้เกลอ! อยากวัดฝีมือหรือหาทองสร้างตำนานไหม? ไปดูที่ "กระดานประกาศจับมหาบอส" ข้างผนังโรงเตี๊ยมสิ ค่าหัวแต่ละตัวคุ้มค่าเสี่ยงตายแน่นอน!'
    }
  },
  valeria: {
    id: 'valeria',
    name: 'ผู้กองวาเลเรีย',
    role: 'อดีตอัศวินกองพันเหล็ก & ผู้พิทักษ์ปราการเหนือ',
    portraitType: 'valeria',
    dialogues: {
      intro: 'หยุดก่อนชาวสวน—ด้านนอกปราการเหนือนี้ไม่ปลอดภัยอีกต่อไป! สหายร่วมรบในกองพันของข้าเคยสละชีพตรึงแนวนี้ไว้... หากเจ้าคิดจะก้าวออกไปช่วยจริงๆ จงพิสูจน์ฝีมือด้วยเขี้ยวหมาป่าเงาและแร่ทับทิมเวทมนตร์!',
      q3_progress: 'อย่าประมาทหมาป่าเงาในป่าทึบ มันเคลื่อนไหวเร็วและหลบในเงาไม้ จับจังหวะกลิ้งหลบและปัดป้องให้ดี!',
      q3_complete: 'ยอดเยี่ยม... สายตาของเจ้าแน่วแน่ไม่แพ้ปู่อาเธอร์ในวันวานจริงๆ รับปืนล่าสัตว์โบราณนี้ไป แล้วไปพบปราชญ์เอลดรินเรื่องรอยแยกใต้ถ้ำผลึกเถิด!',
      q8_intro: 'มองบนท้องฟ้าทางตะวันตกเฉียงเหนือสิ... เถ้าถ่านสีส้มนั่น ข้าจำไม่เคยลืม! "มังกรเพลิงอิกนิสทรอน" กำลังตื่นขึ้นในปล่องภูเขาไฟ ข้าเสียบ้านเกิดให้เพลิงนรกนั่นมาแล้วครั้งหนึ่ง... ครั้งนี้เราจะไม่ยอมให้มันเผาศิลาสุขาวดีอีก!',
      q8_progress: 'เมื่อมันคำรามและปรากฏวงสีแดงบนพื้น รีบกลิ้ง Dash ออกห่างทันที อย่าฝืนรับอุกกาบาตตรงๆ!',
      q8_complete: 'เปลวเพลิงดับลงแล้ว... ฝันร้ายที่หลอกหลอนข้ามาทั้งชีวิตสลายไปในคมดาบของเราในวันนี้ ขอบคุณที่ยืนอยู่ข้างข้า... บัดนี้จงนำเรื่องนี้ไปบอกช่างคาเอลที่ภูเขาหิมะเถิด!',
      q12_intro: 'หน่วยลาดตระเวนแจ้งข่าวด่วน! แม้มาลาคอร์จะพ่ายไป แต่สายฟ้าเหนือยอดเขาฟรอสต์พีคกำลังฉีกก้อนเมฆ! "จ้าวพายุออสทริออน" กำลังทดสอบเจตจำนงของผู้ถือครองศิลา จงไต่สู่ที่ราบสูงอัสนีบาตเพื่อชิงแก่นศิลาอัสนีชิ้นสุดท้ายกลับมา!',
      q12_progress: 'อย่าเข้าใกล้เสาล่อฟ้าที่เชื่อมสายไฟฟ้าบนพื้น และเตรียมซุปความเร็วสายลมไว้ให้พร้อม!',
      q12_complete: 'อัสนีบาตยอมสยบแทบเท้าเจ้าแล้ว! บัดนี้ศิลาศักดิ์สิทธิ์ครบทั้ง 8 ธาตุ จงไปรวมพลังที่แท่นบูชาวิหารโบราณกับปราชญ์เอลดรินเพื่อจบทุกคำสาปเถิด!'
    }
  },
  kael: {
    id: 'kael',
    name: 'ช่างตีเหล็ก คาเอล',
    role: 'ทายาทช่างตีเหล็กบรรพชนเหมันต์',
    portraitType: 'kael',
    dialogues: {
      intro: 'เสียงค้อนกับเหล็กกล้าไม่เคยโกหกใคร! ปู่อาเธอร์เคยนำแร่ดาวตกมาให้ข้าตีเป็นศัสตราวุธศักดิ์สิทธิ์... หากเจ้าขุดแร่ดิบหรือเศษชิ้นส่วนอสูรมาได้ จงนำมาหลอมเป็นคมเขี้ยวไว้ปกป้องแผ่นดิน!',
      q9_intro: 'ดูค้อนของข้าสิ... แม้แต่ไฟเตาหลอมยังสั่นไหวเพราะไอหนาวจากยอดเขาฟรอสต์พีค! บ้านเกิดของตระกูลช่างเหล็กข้าถูกแช่แข็งอยู่ใต้พายุหิมะเมื่อร้อยปีก่อน เพราะ "ฟรอสต์แฟงก์" จงใช้อาวุธเพลิงทะลวงเกราะน้ำแข็งของมัน และนำแก่นเหมันต์กลับมาปลดปล่อยแผ่นดินเกิดข้าที!',
      q9_progress: 'พายุหิมะทำให้การเคลื่อนไหวช้าลง พกยาฟื้นพลังหรือดาบธาตุเพลิงไปด้วยนะสหาย!',
      q9_complete: 'ค้อนบรรพชนกลับมาลุกโชนด้วยความอบอุ่นอีกครั้ง! ข้าติดหนี้บุญคุณเจ้าทั้งชีวิต... ทว่าภัยที่แท้จริงรออยู่เบื้องหน้า รีบนำความคืบหน้าไปบอกนายกฯ กิลเบิร์ตเพื่อบุกสุสานใต้พิภพเถิด!',
      forge_ready: 'อยากให้ข้าตีดาบเทพ คันธนูพิษ หรือสลักรูนวิเศษชิ้นไหน เลือกจากพิมพ์เขียวของข้าได้เลย!'
    }
  },
  eldrin: {
    id: 'eldrin',
    name: 'ผู้เฒ่าปราชญ์ เอลดริน',
    role: 'ผู้พิทักษ์ผนึกโบราณลำดับที่หนึ่ง',
    portraitType: 'eldrin',
    dialogues: {
      intro: 'โฮ่โฮ่... แหวนและจอบของปู่อาเธอร์ยังเปล่งออร่าแห่งแสงดาวอยู่บนตัวเจ้าอย่างงดงาม ทว่าใต้ผืนดินนี้มี "ผนึกทั้งแปด" ที่เชื่อมโยงชะตากรรมของหุบเขาเอาไว้ จงเดินตามเส้นทางแห่งแสงและอย่าหลงเชื่อเงาแห่งความเป็นอมตะ...',
      lore: 'บันทึกโบราณจารึกว่า กษัตริย์ไร้นามผู้ครอบครองมงกุฎดำเคยเป็นหนึ่งเดียวกับพวกเรา ก่อนความโลภจะฉีกผนึกทั้งแปดเป็นเสี่ยงๆ...',
      q4_progress: 'ในถ้ำผลึกมีทั้งแร่ทองคำและผลึกมานาสีคราม จงใช้ "อีเต๋อขุดแร่ (Pickaxe)" สกัดผลึกเหล่านั้นอย่างอดทน อย่าใจร้อน!',
      q4_complete: 'ผลึกมานาเหล่านี้เผยคลื่นเสียงเวทมนตร์ชัดเจนแล้ว... ทางเหนือสุดสู่ "ราชินีสปอร์คาธูรอส" เปิดออกแล้ว ทว่าจำไว้—นางเป็นเพียงเหยื่อคนแรกของแผนการอันชั่วร้าย จงไปแจ้งกิลเบิร์ต!',
      q6_intro: 'เป็นดั่งที่ข้าหวั่นเกรง... เงาจากมงกุฎของคาธูรอสแล่นลงสู่รอยแยกลึกใต้ถ้ำผลึกแล้ว! โกเลมโบราณ "ลูมินาร์ค" ที่ข้าฝาก "แก่นศิลาสุริยัน" ให้เฝ้ารักษาไว้กำลังคลุ้มคลั่ง จงลงรอยแยก Abyss Rift แล้วปลดปล่อยมันที!',
      q6_progress: 'ลูมินาร์คจะชาร์จลำแสงปริซึมเป็นเส้นตรง ดูวงเตือนแล้วหลบออกด้านข้างจากนั้นฟันสวนทันที!',
      q6_complete: 'แสงสุริยันบริสุทธิ์กลับมาอยู่ในกำมือของแสงสว่างแล้ว... ทว่าสายน้ำแห่งหมู่บ้านเริ่มเป็นสีมรกต จงรีบไปช่วยหมอยาลิเลียนในบทที่ 7!',
      q11_intro: 'แม้ร่างของมาลาคอร์จะสลาย แต่รากแห่งพงไพรโบราณทางตะวันออกของป่าทมิฬยังร่ำไห้ด้วยพิษความมืด! "เทพพฤกษา ซิลวาเนีย" ไม่อาจแยกมิตรหรือศัตรูได้อีกต่อไป จงบุกป่า Ancient Sacred Canopy และปลุกนางด้วยแสงแห่งชัยชนะเพื่อชิงแก่นศิลาพฤกษา!',
      q11_progress: 'เมื่อซิลวาเนียสร้างดอกไม้ตูมสีทอง จงรีบฟันทำลายทันที มิฉะนั้นมันจะดูดพลังรักษาตัวนางจนเต็ม!',
      q11_complete: 'ป่าโบราณกลับมาร้องเพลงแห่งสายลมอีกครั้ง... เหลือเพียงศิลาอัสนีชิ้นสุดท้ายกับผู้กองวาเลเรีย จากนั้นจงนำทั้ง 8 ศิลาไปยังแท่นบูชาวิหารศักดิ์สิทธิ์ (ทางเหนือของป่าทมิฬ)!',
      victory: 'ศิลาทั้งแปดธาตุส่องประกายสอดประสานกันเหนือหุบเขาดั่งวันวาน... บัดนี้เจ้าไม่ได้เป็นแค่ผู้สืบทอดฟาร์มของอาเธอร์ แต่คือตำนานผู้พิทักษ์แห่งศิลาสุขาวดีชั่วนิรันดร์!'
    }
  },
  luna: {
    id: 'luna',
    name: 'ลูน่า สาวน้อยร้านดอกไม้',
    role: 'นักจัดดอกไม้แห่งความหวัง (Florist)',
    portraitType: 'luna',
    dialogues: {
      intro: 'สวัสดีจ้ะ! ถึงแม้วันนี้ฟ้าจะครึ้มไปด้วยหมอกสปอร์ แต่ตราบใดที่เรายังปลูกเมล็ดพันธุ์ลงดิน ดอกไม้ก็ยังพร้อมผลิบานเสมอ! หากฟาร์มเจ้าปลูกทานตะวันหรือสตรอเบอร์รี่ได้เมื่อไหร่ เอามาอวดข้าบ้างนะ!',
      flower_talk: 'ท่านปู่อาเธอร์เคยเล่าให้ข้าฟังว่า "คนที่รักแผ่นดินและเมล็ดพันธุ์ จะมีหัวใจที่เข้มแข็งพอจะต้านทานพายุได้ทุกลูก" ข้าเชื่อว่าเจ้าก็เป็นแบบนั้นเหมือนกันจ้ะ!',
      dating: 'ตั้งแต่ได้คบกับเจ้า กลิ่นดอกไม้ในหมู่บ้านก็หอมหวานขึ้นทุกเช้าเลยนะ... สัญญานะว่าจะพาข้าไปดูพระอาทิตย์ตกบนเกาะเขตร้อนด้วยกัน ♥',
      married: 'อรุณสวัสดิ์นะที่รัก! ข้าเก็บดอกไม้ริมรั้วมาปักแจกันให้แล้ว และช่วยดูแลรดน้ำในฟาร์มเรียบร้อย กลับบ้านปลอดภัยเสมอนะ!'
    }
  }
};

export const FORGE_RECIPES: Record<string, ForgeRecipe> = {
  iron_sword: {
    id: 'iron_sword',
    name: 'ดาบเหล็กกล้านักผจญภัย',
    desc: 'ดาบเหล็กฟันระยะประชิด พลังโจมตี 28',
    cost: 350,
    materials: { iron_ore: 5, wolf_fang: 3 }
  },
  rifle: {
    id: 'rifle',
    name: 'ปืนล่าสัตว์โบราณ',
    desc: 'ปืนไรเฟิลยิงระยะไกล พลังโจมตี 42',
    cost: 850,
    materials: { iron_ore: 10, cursed_wood: 5 }
  },
  antidote_serum: {
    id: 'antidote_serum',
    name: 'เซรุ่มต้านสปอร์พิษ (Antidote Serum)',
    desc: 'ฟื้นฟู HP +80 และพลังงาน +50 ช่วยชำระล้างพิษสปอร์',
    cost: 80,
    materials: { blight_spore: 3, starflower_herb: 2 }
  },
  excalibur_sword: {
    id: 'excalibur_sword',
    name: 'ดาบศักดิ์สิทธิ์เอ็กซ์คาลิเบอร์',
    desc: 'ดาบศักดิ์สิทธิ์ ฟันคลื่นแสงทะลวงศัตรู พลังโจมตี 38',
    cost: 1200,
    materials: { demon_heart: 2, ruby_gem: 5, mana_gem: 5 }
  },
  dragon_rifle: {
    id: 'dragon_rifle',
    name: 'ปืนมังกรเพลิง (Dragonfire Cannon)',
    desc: 'ปืนมังกรยิงระเบิดเพลิง พลังโจมตี 48',
    cost: 1400,
    materials: { demon_heart: 2, cursed_wood: 6, ruby_gem: 5 }
  },
  volcano_sword: {
    id: 'volcano_sword',
    name: 'ดาบเพลิงลาวาภูเขาไฟ (Volcano Magma Blade)',
    desc: 'ดาบเพลิงหลอมจากแก่นภูเขาไฟ ฟันคลื่นเพลิงลาวา พลังโจมตี 48',
    cost: 1800,
    materials: { cinder_shard: 10, dragon_tooth: 2, ruby_gem: 5 }
  },
  luminarch_crystal_blade: {
    id: 'luminarch_crystal_blade',
    name: 'ดาบเลเซอร์ผลึกปริซึมลูมินาร์ค (Prismatic Laser Blade)',
    desc: 'สุดยอดดาบคริสตัลโบราณ ปลดปล่อยเลเซอร์ปริซึมทะลวง พลังโจมตี 44',
    cost: 1800,
    materials: { luminarch_crystal_heart: 2, diamond_crystal: 5, gold_ore: 8 }
  },
  hydra_venom_bow: {
    id: 'hydra_venom_bow',
    name: 'คันธนูสามศรพิษพญาไฮดรา (Hydra Venom Bow)',
    desc: 'คันธนูบึงพิษ แผลงศรกรดพิษกระจาย 3 ดอกพร้อมกัน พลังโจมตี 18x3',
    cost: 2000,
    materials: { hydra_venom_gland: 2, hydra_scale: 8, swamp_herb: 6 }
  },
  volcano_magma_axe: {
    id: 'volcano_magma_axe',
    name: 'ขวานเพลิงโลกันตร์ลาวาอิกนิสทรอน (Molten Magma Axe)',
    desc: 'ขวานหินลาวาคู่ ปลดปล่อยระเบิดเพลิงล้างผลาญ พลังโจมตี 56',
    cost: 2500,
    materials: { magma_dragon_horn: 2, flame_heart: 5, ruby_gem: 6 }
  },
  glacial_titan_hammer: {
    id: 'glacial_titan_hammer',
    name: 'ค้อนเหมันต์ไททันน้ำแข็งฟรอสต์แฟงก์ (Glacial Titan Hammer)',
    desc: 'ค้อนน้ำแข็งพันปี ทุบคลื่นหอกน้ำแข็งแช่แข็ง พลังโจมตี 62',
    cost: 2800,
    materials: { glacial_titan_core: 2, frost_crystal: 8, diamond_crystal: 5 }
  },
  malakor_soul_scythe: {
    id: 'malakor_soul_scythe',
    name: 'เคียวมรณะสูบวิญญาณลอร์ดมาลาคอร์ (Malakor Soul Scythe)',
    desc: 'เคียวแห่งความตาย ปล่อยคลื่นกะโหลกมืด และดูดเลือด 8% คืนแก่ผู้ใช้ พลังโจมตี 64',
    cost: 3500,
    materials: { death_lord_soul: 2, cursed_relic: 6, crown_of_despair: 2 }
  },
  sylvan_bow: {
    id: 'sylvan_bow',
    name: 'คันธนูใบไม้พฤกษาพันปี (Ancient Sylvan Bow)',
    desc: 'คันธนูแห่งเทพพฤกษา แผลงศรใบไม้คมกริบ 4 ดอกรูปพัด ทะลวงศัตรู พลังโจมตี 19x4',
    cost: 4000,
    materials: { ancient_tree_heart: 2, cursed_wood: 8, star_fruit: 6 }
  },
  tempest_blade: {
    id: 'tempest_blade',
    name: 'ดาบอัสนีบาตคลื่นสายฟ้า (Tempest Lightning Blade)',
    desc: 'สุดยอดดาบสายฟ้าแห่งจ้าวพายุ ปล่อยลำแสงสายฟ้าผ่าทะลุทะลวง พลังโจมตี 72',
    cost: 4800,
    materials: { storm_core: 2, thunder_crystal: 10, gold_ore: 10 }
  },
  kathuros_spore_armor: {
    id: 'kathuros_spore_armor',
    name: 'เกราะสปอร์ราชันคาธูรอส (Spore Mail)',
    desc: '[ชุดเกราะบอส] พลังป้องกัน +50% เมื่อโดนโจมตีจะระเบิดหนามสปอร์สวนกลับศัตรู 45 ดาเมจ',
    cost: 2000,
    materials: { demon_heart: 2, iron_ore: 10, ruby_gem: 4 }
  },
  ignistron_flame_shield: {
    id: 'ignistron_flame_shield',
    name: 'โล่อัคคีพิโรธอิกนิสทรอน (Magma Shield)',
    desc: '[โล่บอส] เมื่อทำการ Perfect Parry สำเร็จ จะระเบิดคลื่นเพลิงลาวาพุ่งเผาศัตรู 110 ดาเมจ',
    cost: 2400,
    materials: { magma_dragon_horn: 2, flame_heart: 4, iron_ore: 12 }
  },
  frostfang_frozen_plate: {
    id: 'frostfang_frozen_plate',
    name: 'เกราะเกล็ดหิมะฟรอสต์แฟงก์ (Glacial Plate)',
    desc: '[ชุดเกราะบอส] การยกโล่บล็อกลดความเสียหาย 80% (จากปกติ 65%) และสะท้อนไอเย็นแช่แข็งศัตรู',
    cost: 2500,
    materials: { glacial_titan_core: 2, frost_crystal: 8, diamond_crystal: 4 }
  },
  astreon_storm_greaves: {
    id: 'astreon_storm_greaves',
    name: 'เกราะขาอัสนีบาตออสทริออน (Storm Greaves)',
    desc: '[อุปกรณ์บอส] ความเร็วเคลื่อนที่ +30% และเมื่อกลิ้งหลบ Dash จะฟาดสายฟ้าผ่าใส่ศัตรู 60 ดาเมจ',
    cost: 2800,
    materials: { storm_core: 2, thunder_crystal: 8, gold_ore: 10 }
  },
  malakor_void_cloak: {
    id: 'malakor_void_cloak',
    name: 'ผ้าคลุมมฤตยูลอร์ดมาลาคอร์ (Void Shroud)',
    desc: '[ชุดเกราะบอส] ขยายหน้าต่าง Perfect Parry เพิ่ม +80ms และดูดเลือด 6% จากความเสียหายที่ทำได้',
    cost: 3500,
    materials: { death_lord_soul: 2, cursed_relic: 6, crown_of_despair: 2 }
  },
  hydrakis_venom_pendant: {
    id: 'hydrakis_venom_pendant',
    name: 'จี้เขี้ยวพิษพญาไฮดรา (Venom Amulet)',
    desc: '[อุปกรณ์บอส] ป้องกันความเสียหายจากพิษและบึงมลทิน 100% พร้อมเคลือบพิษให้การโจมตี',
    cost: 2200,
    materials: { hydra_venom_gland: 2, hydra_scale: 8, swamp_herb: 8 }
  },
  health_potion: {
    id: 'health_potion',
    name: 'ยาฟื้นพลังชีวิตชั้นเลิศ',
    desc: 'ฟื้นฟู HP +60 และพลังงาน +30',
    cost: 75,
    materials: { starflower_herb: 3 }
  },
  ring_glow: {
    id: 'ring_glow',
    name: 'แหวนเรืองแสงสุริยัน (Sun Glow Ring)',
    desc: 'ส่องรัศมีแสงสว่างรอบตัวในถ้ำมืดและสุสานใต้ดิน (+80 รัศมีแสง)',
    cost: 800,
    materials: { gold_ore: 6, ruby_gem: 2 }
  },
  ring_magnet: {
    id: 'ring_magnet',
    name: 'แหวนแม่เหล็กดูดทรัพย์ (Magneto Ring)',
    desc: 'ดูดไอเทมที่ตกบนพื้นเข้าหาตัวจากระยะไกลขึ้น 3 เท่า!',
    cost: 900,
    materials: { iron_ore: 8, crystal_core: 5 }
  },
  ring_warrior: {
    id: 'ring_warrior',
    name: 'แหวนนักรบผู้กล้า (Warrior Bravery Ring)',
    desc: 'เพิ่มโอกาสติดคริติคอล +18% และเพิ่มตัวคูณคริติคอล +0.25x',
    cost: 1400,
    materials: { iron_ore: 10, ruby_gem: 4, wolf_fang: 5 }
  },
  ring_vampiric: {
    id: 'ring_vampiric',
    name: 'แหวนแวมไพร์สูบโลหิต (Vampiric Leech Ring)',
    desc: 'ดูดเลือด 4% จากความเสียหายที่ทำได้ คืนเป็นพลังชีวิต',
    cost: 1600,
    materials: { cursed_wood: 8, bat_wing: 10, blight_spore: 6 }
  },
  ring_lucky: {
    id: 'ring_lucky',
    name: 'แหวนนำโชคจอมพราน (Fortune Hunter Ring)',
    desc: 'มอนสเตอร์ดรอปทองเพิ่มขึ้น +35% และเพิ่มโอกาสได้ไอเทมหายาก',
    cost: 1500,
    materials: { gold_ore: 8, diamond_crystal: 3 }
  },

  // สลักรูนเวทมนตร์ (Elemental Runes)
  rune_fire: {
    id: 'rune_fire',
    name: 'รูนอัคคีพิโรธ (Fire Rune)',
    desc: 'สลักรูนเพลิงลงอาวุธ โจมตีติดสถานะเผาไหม้ (Burn DoT 3 ครั้ง)',
    cost: 900,
    materials: { ruby_gem: 4, cinder_shard: 6 }
  },
  rune_frost: {
    id: 'rune_frost',
    name: 'รูนเหมันต์นิรันดร์ (Frost Rune)',
    desc: 'สลักรูนน้ำแข็งลงอาวุธ แช่แข็งสโลว์ความเร็วศัตรูลง 50%',
    cost: 900,
    materials: { frost_crystal: 5, diamond_crystal: 2 }
  },
  rune_lightning: {
    id: 'rune_lightning',
    name: 'รูนอัสนีบาต (Lightning Rune)',
    desc: 'สลักรูนสายฟ้าลงอาวุธ สร้างประกายสายฟ้าชิ่งศัตรูรอบข้าง',
    cost: 900,
    materials: { mana_gem: 5, gold_ore: 6 }
  },
  rune_vampiric: {
    id: 'rune_vampiric',
    name: 'รูนกลืนวิญญาณ (Vampiric Rune)',
    desc: 'สลักรูนสูบวิญญาณลงอาวุธ ฟื้นฟู HP คืน 8% ของความเสียหาย',
    cost: 1200,
    materials: { demon_heart: 2, wolf_fang: 6 }
  }
};

// ========================================================
// NPC GIFTS & FRIENDSHIP PREFERENCES
// ========================================================
export const NPC_GIFTS: Record<string, {
  loved: string[];
  liked: string[];
  disliked: string[];
  lovedQuote: string;
  likedQuote: string;
  dislikedQuote: string;
}> = {
  gilbert: {
    loved: ['fine_wine', 'cheese', 'aged_cheese', 'pizza'],
    liked: ['bread', 'wheat', 'corn', 'diamond_crystal'],
    disliked: ['blight_spore', 'beetle_shell', 'stone'],
    lovedQuote: 'โอ้โห! ของขวัญชั้นยอดแบบนี้หาได้ยากยิ่งนัก ขอบใจเจ้ามากสหายชาวสวน!',
    likedQuote: 'ขอบใจนะ! ข้าจะนำสิ่งนี้ไปแบ่งปันกับชาวเมือง',
    dislikedQuote: 'เอ่อ... ข้าคิดว่าของสิ่งนี้น่าจะเหมาะกับผู้อื่นมากกว่านะ'
  },
  lilian: {
    loved: ['starflower_herb', 'strawberry', 'strawberry_jam', 'antidote_serum', 'bouquet', 'mermaids_amulet'],
    liked: ['tomato', 'carrot', 'mana_gem', 'milk', 'pineapple'],
    disliked: ['blight_spore', 'demon_wing', 'bat_wing'],
    lovedQuote: 'ว้าว! สมุนไพรและของขวัญที่แสนอ่อนโยนนี้... ข้าชอบมากที่สุดเลยจ้ะ ขอบคุณนะ!',
    likedQuote: 'ขอบคุณมากจ้ะ สิ่งนี้มีประโยชน์ต่อการวิจัยยาของข้ามากเลย',
    dislikedQuote: 'อุ๊ย! กลิ่นฉุนของเศษชิ้นส่วนพวกนี้ทำให้ข้าเวียนหัวจ้ะ...'
  },
  valeria: {
    loved: ['iron_sword', 'ruby_gem', 'fine_wine', 'grilled_fish', 'volcano_sword', 'bouquet', 'mermaids_amulet'],
    liked: ['iron_ore', 'gold_ore', 'spicy_fish_soup', 'bacon', 'cinder_shard'],
    disliked: ['blight_spore', 'wool', 'egg'],
    lovedQuote: 'ยอดเยี่ยมมาก! ของขวัญที่ตราตรึงและคู่ควรกับใจข้า... ข้าสัญญาว่าจะอยู่เคียงข้างเจ้าเสมอ!',
    likedQuote: 'ขอบใจนะสหาย! เสบียงและแร่เหล่านี้จำเป็นสำหรับแนวรบมาก',
    dislikedQuote: 'ข้าเป็นทหารปกป้องเมือง ของหยุมหยิมพวกนี้ข้าคงไม่ได้ใช้หรอก'
  },
  kael: {
    loved: ['gold_ore', 'diamond_crystal', 'star_core', 'craft_ale', 'volcano_sword', 'bouquet', 'mermaids_amulet'],
    liked: ['iron_ore', 'copper_ore', 'coal', 'stone', 'cinder_shard'],
    disliked: ['strawberry', 'flower', 'cake'],
    lovedQuote: 'ฮ่าฮ่าฮ่า! ช่างงดงามและเลอค่ายิ่งนัก! เจ้าช่างรู้ใจข้าที่สุดในโลกเลย!',
    likedQuote: 'แร่เนื้อดี ข้าจะนำไปหลอมอาวุธคมกริบ ขอบใจเจ้ามาก!',
    dislikedQuote: 'อะไรเนี่ย? ของหวานเลอะเทอะ เดี๋ยวเตาหลอมข้าก็ดับพอดี!'
  },
  luna: {
    loved: ['sunflower', 'strawberry', 'bouquet', 'mermaids_amulet', 'strawberry_jam'],
    liked: ['starflower_herb', 'bread', 'pineapple', 'milk', 'coconut'],
    disliked: ['stone', 'blight_spore', 'bat_wing'],
    lovedQuote: 'โอ้พระเจ้า! ดอกไม้และความรักนี้ช่างงดงามเหลือเกิน... ใจฉันเต้นแรงจัง ขอบคุณมากนะจ๊ะ!',
    likedQuote: 'ขอบคุณมากนะจ๊ะ สิ่งนี้น่ารักและสดชื่นมากเลย!',
    dislikedQuote: 'อ๊ะ... ของแบบนี้น่ากลัวจัง ฉันไม่ค่อยชอบเลยจ้ะ'
  },
  bob: {
    loved: ['grilled_fish', 'spicy_fish_soup', 'craft_ale', 'fine_wine'],
    liked: ['tilapia', 'catfish', 'carp', 'cheese', 'bread'],
    disliked: ['stone', 'beetle_shell', 'bat_wing'],
    lovedQuote: 'สุดยอดไปเลยเกลอ! ทั้งกับแกล้มทั้งเครื่องดื่มรสเด็ด วันนี้ข้าขอเลี้ยงโต๊ะเจ้า!',
    likedQuote: 'ขอบใจมากเพื่อนรัก วัตถุดิบสดๆ แบบนี้โรงเตี๊ยมข้าต้องการอยู่พอดี!',
    dislikedQuote: 'เฮ้ๆ อย่าเอาของอันตรายหรือเศษหินมาวางบนโต๊ะอาหารสิเพื่อน!'
  },
  eldrin: {
    loved: ['mana_gem', 'diamond_crystal', 'star_core', 'ancient_glowfish'],
    liked: ['ruby_gem', 'starflower_herb', 'antidote_serum'],
    disliked: ['stone', 'wood', 'bacon'],
    lovedQuote: 'โฮ่โฮ่... พลังงานเวทมนตร์อันบริสุทธิ์เปล่งประกาย สัมผัสถึงความลับแห่งจักรวาล!',
    likedQuote: 'จิตวิญญาณแห่งผืนป่าตอบรับของขวัญชิ้นนี้ ขอบใจเจ้ามากผู้มีปัญญา',
    dislikedQuote: 'สิ่งของทางโลกียะเหล่านี้ ไม่อาจเทียบเคียงแก่นแท้แห่งเวทมนตร์ได้'
  }
};

// ========================================================
// MUSEUM COMPENDIUM & COLLECTION ITEMS
// ========================================================
export const COMPENDIUM_CATEGORIES = {
  crops: {
    name: 'พืชผลการเกษตร',
    items: ['wheat', 'carrot', 'corn', 'tomato', 'strawberry', 'pumpkin', 'sunflower', 'rice', 'cabbage', 'chili', 'sugarcane']
  },
  fish: {
    name: 'สิ่งมีชีวิตในน้ำ',
    items: ['carp', 'tilapia', 'catfish', 'golden_salmon', 'ancient_glowfish']
  },
  minerals: {
    name: 'แร่ธาตุและอัญมณี',
    items: ['stone', 'copper_ore', 'iron_ore', 'gold_ore', 'ruby_gem', 'mana_gem', 'diamond_crystal', 'star_core']
  },
  artisan: {
    name: 'สินค้าแปรรูป & ครัว',
    items: ['mayonnaise', 'aged_cheese', 'strawberry_jam', 'pickled_carrot', 'fine_wine', 'craft_ale', 'bread', 'pizza', 'grilled_fish', 'spicy_fish_soup']
  }
};

// ========================================================
// ACHIEVEMENTS & MILESTONES
// ========================================================
export const ACHIEVEMENTS_DATA = [
  { id: 'first_harvest', name: 'ก้าวแรกชาวสวน', desc: 'เก็บเกี่ยวผลผลิตจากแปลงผักแปลงแรก', icon: '★', rewardGold: 100 },
  { id: 'master_farmer', name: 'ราชาแห่งทุ่งรวงทอง', desc: 'เก็บเกี่ยวผลผลิตสะสมครบ 50 ครั้ง', icon: '★', rewardGold: 500 },
  { id: 'mine_explorer_5', name: 'ผู้กล้าถ้ำลึก (ชั้น 5)', desc: 'พิชิตและปลดล็อกลิฟต์เหมืองชั้นที่ 5', icon: '★', rewardGold: 300 },
  { id: 'mine_explorer_10', name: 'นักดำดิ่งผลึกคราม (ชั้น 10)', desc: 'พิชิตและปลดล็อกลิฟต์เหมืองชั้นที่ 10', icon: '★', rewardGold: 600 },
  { id: 'mine_explorer_20', name: 'ผู้พิชิตแก่นดวงดาว (ชั้น 20)', desc: 'เดินทางถึงเหมืองชั้นลึกสุดชั้นที่ 20', icon: '★', rewardGold: 1500 },
  { id: 'pet_lover', name: 'เพื่อนแท้สี่ขา', desc: 'มีสัตว์เลี้ยงคู่หู (น้องหมาหรือน้องแมว) คอยเดินตาม', icon: '★', rewardGold: 200 },
  { id: 'horse_rider', name: 'อาชาไนยแห่งหุบเขา', desc: 'ขึ้นขี่ม้าพาหนะคู่ใจ', icon: '★', rewardGold: 300 },
  { id: 'artisan_master', name: 'ช่างแปรรูปมือฉมัง', desc: 'แปรรูปสินค้าสำเร็จ (ไวน์, แยม, มายองเนส, ชีส) ครบ 10 ชิ้น', icon: '★', rewardGold: 400 },
  { id: 'town_favorite', name: 'ขวัญใจชาวเมือง', desc: 'ผูกมิตรกับชาวเมืองจนมีหัวใจ 3 ดวงขึ้นไป', icon: '★', rewardGold: 500 },
  { id: 'boss_slayer', name: 'วีรบุรุษผู้กอบกู้', desc: 'ปราบราชาปีศาจคาธูรอสในวิหารโบราณ', icon: '★', rewardGold: 2000 }
];

// ========================================================
// ARTISAN CONVERSION RECIPES
// ========================================================
export const ARTISAN_CONVERSIONS: Record<string, {
  machineType: 'mayo_machine' | 'cheese_press' | 'preserves_jar' | 'wine_keg';
  inputItem: string;
  outputItem: string;
  outputName: string;
  durationMs: number;
}> = {
  egg_to_mayo: {
    machineType: 'mayo_machine',
    inputItem: 'egg',
    outputItem: 'mayonnaise',
    outputName: 'มายองเนสเข้มข้น',
    durationMs: 8000
  },
  milk_to_cheese: {
    machineType: 'cheese_press',
    inputItem: 'milk',
    outputItem: 'aged_cheese',
    outputName: 'เชดดาร์ชีสบ่มพิเศษ',
    durationMs: 10000
  },
  strawberry_to_jam: {
    machineType: 'preserves_jar',
    inputItem: 'strawberry',
    outputItem: 'strawberry_jam',
    outputName: 'แยมสตรอเบอร์รี่หวานฉ่ำ',
    durationMs: 9000
  },
  carrot_to_pickle: {
    machineType: 'preserves_jar',
    inputItem: 'carrot',
    outputItem: 'pickled_carrot',
    outputName: 'ผักดองแครอทกรอบ',
    durationMs: 7000
  },
  fruit_to_wine: {
    machineType: 'wine_keg',
    inputItem: 'strawberry',
    outputItem: 'fine_wine',
    outputName: 'ไวน์ผลไม้ชั้นเลิศ',
    durationMs: 14000
  },
  wheat_to_ale: {
    machineType: 'wine_keg',
    inputItem: 'wheat',
    outputItem: 'craft_ale',
    outputName: 'เบียร์สดข้าวสาลีคราฟต์',
    durationMs: 11000
  },
  pineapple_to_wine: {
    machineType: 'wine_keg',
    inputItem: 'pineapple',
    outputItem: 'fine_wine',
    outputName: 'ไวน์สับปะรดทองคำพรีเมียม',
    durationMs: 15000
  },
  coconut_to_jam: {
    machineType: 'preserves_jar',
    inputItem: 'coconut',
    outputItem: 'strawberry_jam',
    outputName: 'แยมมะพร้าวเนื้อนุ่ม',
    durationMs: 9000
  }
};

// ========================================================
// SKILL MASTERY PERKS (TREE [K])
// ========================================================
export interface SkillMasteryPerk {
  id: string;
  branch: 'farming' | 'mining' | 'fishing' | 'combat' | 'artisan';
  branchName: string;
  name: string;
  desc: string;
  icon: string;
  cost: number;
}

export const SKILL_MASTERIES: Record<string, SkillMasteryPerk> = {
  double_harvest: {
    id: 'double_harvest',
    branch: 'farming',
    branchName: 'กสิกรรมขั้นเทพ (Farming Mastery)',
    name: 'ผลผลิตทวีคูณ (Double Harvest)',
    desc: 'มีโอกาส 25% ที่จะเก็บเกี่ยวพืชผลได้จำนวน 2 เท่าในทุกแปลง',
    icon: '',
    cost: 1
  },
  golden_touch: {
    id: 'golden_touch',
    branch: 'farming',
    branchName: 'กสิกรรมขั้นเทพ (Farming Mastery)',
    name: 'หัตถ์ทองคำ (Golden Touch)',
    desc: 'เพิ่มโอกาสได้พืชผลระดับดาวทองและอิริเดียมขึ้นเป็น 2 เท่า',
    icon: '',
    cost: 1
  },
  gemologist: {
    id: 'gemologist',
    branch: 'mining',
    branchName: 'ปรมาจารย์เหมือง (Mining Mastery)',
    name: 'ผู้เชี่ยวชาญอัญมณี (Gemologist)',
    desc: 'แร่และอัญมณีทุกชนิดขายได้ราคาสูงขึ้น 35%',
    icon: '',
    cost: 1
  },
  geode_cracker: {
    id: 'geode_cracker',
    branch: 'mining',
    branchName: 'ปรมาจารย์เหมือง (Mining Mastery)',
    name: 'สัญชาตญาณสายแร่ (Vein Seeker)',
    desc: 'โอกาสขุดพบแร่ทองคำ ทับทิม และผลึกมานาเพิ่มขึ้น 50%',
    icon: '',
    cost: 1
  },
  master_angler: {
    id: 'master_angler',
    branch: 'fishing',
    branchName: 'จ้าวแห่งสายน้ำ (Fishing Mastery)',
    name: 'สายเบ็ดเซียน (Master Angler)',
    desc: 'แถบตกปลากว้างขึ้น 35% และปลาดิ้นช้าลงอย่างมาก',
    icon: '',
    cost: 1
  },
  treasure_hunter: {
    id: 'treasure_hunter',
    branch: 'fishing',
    branchName: 'จ้าวแห่งสายน้ำ (Fishing Mastery)',
    name: 'นักล่าสมบัติบาดาล (Treasure Hunter)',
    desc: 'มีโอกาสพบหีบสมบัติใต้ทะเลขณะตกปลาเพิ่มขึ้น 2 เท่า',
    icon: '',
    cost: 1
  },
  vampiric_vitality: {
    id: 'vampiric_vitality',
    branch: 'combat',
    branchName: 'วีรชนผู้กล้า (Combat Mastery)',
    name: 'สูบพลังชีวิต (Vampirism)',
    desc: 'ฟื้นฟู HP 8 หน่วยทันทีทุกครั้งที่กำจัดมอนสเตอร์หรือศัตรูสำเร็จ',
    icon: '',
    cost: 1
  },
  critical_edge: {
    id: 'critical_edge',
    branch: 'combat',
    branchName: 'วีรชนผู้กล้า (Combat Mastery)',
    name: 'คมดาบสังหาร (Critical Edge)',
    desc: 'มีโอกาส 20% โจมตีติดคริติคอล สร้างความเสียหาย 2.5 เท่า!',
    icon: '',
    cost: 1
  },
  artisan_expert: {
    id: 'artisan_expert',
    branch: 'artisan',
    branchName: 'ช่างหัตถศิลป์ (Artisan Mastery)',
    name: 'ปรมาจารย์แปรรูป (Artisan Expert)',
    desc: 'สินค้าแปรรูปทั้งหมด (ไวน์, แยม, ชีส, มายองเนส) ขายได้ราคาเพิ่ม 40%',
    icon: '',
    cost: 1
  },
  gourmet_chef: {
    id: 'gourmet_chef',
    branch: 'artisan',
    branchName: 'ช่างหัตถศิลป์ (Artisan Mastery)',
    name: 'ยอดกุ๊กเทวดา (Gourmet Chef)',
    desc: 'อาหารปรุงเองทุกจานฟื้นฟูพลังงานและ HP เพิ่มขึ้น 50%',
    icon: '',
    cost: 1
  }
};

// ========================================================
// SEASONAL FESTIVALS CALENDAR
// ========================================================
export interface FestivalData {
  id: string;
  seasonIndex: number;
  day: number;
  name: string;
  timeText: string;
  desc: string;
  location: string;
}

export const FESTIVALS: Record<string, FestivalData> = {
  spring_egg_hunt: {
    id: 'spring_egg_hunt',
    seasonIndex: 0,
    day: 13,
    name: 'เทศกาลล่าไข่อีสเตอร์ (Egg Hunt Festival)',
    timeText: '09:00 - 14:00 น.',
    desc: 'วิ่งแข่งเก็บไข่อีสเตอร์สีสันสดใสที่ซ่อนอยู่ตามมุมต่างๆ ในหมู่บ้าน ชนะรับถ้วยรางวัลและ 1,000 G!',
    location: 'village'
  },
  summer_fishing_derby: {
    id: 'summer_fishing_derby',
    seasonIndex: 1,
    day: 11,
    name: 'เทศกาลแข่งตกปลาฤดูร้อน (Fishing Derby)',
    timeText: '09:00 - 15:00 น.',
    desc: 'แข่งขันตกปลาที่ชายหาดและท่าเรือ นับแต้มปลาที่ตกได้ ชนะรับเบ็ดตกปลาอิริเดียม!',
    location: 'village'
  },
  fall_harvest_fair: {
    id: 'fall_harvest_fair',
    seasonIndex: 2,
    day: 16,
    name: 'งานประกวดผลผลิตกรังด์ปรีซ์ (Fall Harvest Fair)',
    timeText: '10:00 - 16:00 น.',
    desc: 'นำสุดยอดผลผลิตและสินค้าแปรรูป 9 รายการมาจัดแสดงโชว์ ชนะรับเหรียญดวงดาวแลกของรางวัลหายาก!',
    location: 'village'
  },
  winter_star_night: {
    id: 'winter_star_night',
    seasonIndex: 3,
    day: 25,
    name: 'เทศกาลราตรีดวงดาวฉลองปีใหม่ (Feast of the Winter Star)',
    timeText: '18:00 - 22:00 น.',
    desc: 'รวมตัวรอบต้นคริสต์มาสยักษ์ แลกของขวัญลับกับชาวเมือง และรับคำอวยพรแห่งดวงดาวเพิ่มความสนิทเต็มหัวใจ!',
    location: 'village'
  }
};

// ========================================================
// TAVERN BOUNTY BOARD (กระดานประกาศจับมหาบอสแห่งโรงเตี๊ยมรวงทอง)
// ========================================================
export const BOUNTY_BOARD: Record<string, BountyData> = {
  bounty_kathuros: {
    id: 'bounty_kathuros',
    bossId: 'boss_kathuros',
    title: 'ประกาศจับระดับ S: ราชินีสปอร์ปีศาจ คาธูรอส',
    name: 'ราชินีสปอร์ปีศาจ คาธูรอส (Queen Kathuros)',
    location: 'วิหารโบราณเหนือสุด (Ancient Forest Sanctuary)',
    scene: 'forest',
    desc: 'อสูรโบราณผู้ปล่อยละอองสปอร์สีเลือดกลายพันธุ์แมลงและพืชผล สถิตอยู่ ณ ลานบูชาข้ามสะพานเหนือ',
    weakness: 'แพ้การโจมตีระยะไกล, ให้ระวังวงระเบิดสปอร์หมุนวนและฝูงมินเนี่ยนแมลง',
    rewardGold: 250,
    rewardXp: 300,
    rewardItem: 'demon_heart',
    rewardItemName: 'หัวใจปีศาจโบราณ'
  },
  bounty_luminarch: {
    id: 'bounty_luminarch',
    bossId: 'boss_luminarch',
    title: 'ประกาศจับระดับ SS: โกเลมผลึกโบราณ ลูมินาร์ค',
    name: 'โกเลมผลึกโบราณ ลูมินาร์ค (Prismatic Golem Luminarch)',
    location: 'ถ้ำผลึกลึกชั้นใต้พิภพ (The Crystal Abyss Floor -2)',
    scene: 'cave_depths',
    desc: 'ผู้พิทักษ์แก่นแท้แห่งธาตุผลึก ก่อตัวขึ้นจากพลังงานมานามหาศาล ยิงลำแสงเลเซอร์ปริซึม 7 สี',
    weakness: 'เคลื่อนที่ช้า หลบลำแสงเลเซอร์ชาร์จแล้วฟันสวนด้วยดาบศักดิ์สิทธิ์หรืออาวุธหนัก',
    rewardGold: 380,
    rewardXp: 450,
    rewardItem: 'luminarch_crystal_heart',
    rewardItemName: 'หัวใจผลึกปริซึมลูมินาร์ค'
  },
  bounty_hydrakis: {
    id: 'bounty_hydrakis',
    bossId: 'boss_hydrakis',
    title: 'ประกาศจับระดับ SS: มัจจุราชสามเศียร ไฮดราคิส',
    name: 'มัจจุราชสามเศียรแห่งบึงมืด ไฮดราคิส (Hydrakis the Venom Hydra)',
    location: 'หนองน้ำมืดแดนพิษ (The Gloom Venom Bog)',
    scene: 'swamp',
    desc: 'อสรพิษยักษ์สามเศียรพ่นลูกบอลกรดพิษและสร้างบ่อกรดกัดกร่อนทั่วบริเวณบึงมืด',
    weakness: 'ต้องพกเซรุ่มต้านพิษและซุปเกราะสมุนไพร หลีกเลี่ยงการเหยียบแอ่งกรดเขียว',
    rewardGold: 450,
    rewardXp: 550,
    rewardItem: 'hydra_venom_gland',
    rewardItemName: 'ต่อมพิษพญาไฮดราโบราณ'
  },
  bounty_ignistron: {
    id: 'bounty_ignistron',
    bossId: 'boss_ignistron',
    title: 'ประกาศจับระดับ SSS: ราชันย์มังกรลาวา อิกนิสทรอน',
    name: 'ราชันย์มังกรลาวาเพลิงอัคนี อิกนิสทรอน (Ignistron the Molten Drake)',
    location: 'ปากปล่องภูเขาไฟเพลิงโลกันตร์ (Mount Ignis Molten Caldera)',
    scene: 'volcano',
    desc: 'มังกรเพลิงยักษ์หลับใหลใต้ธารลาวา เมื่อพิโรธจะเรียกระเบิดอุกกาบาตเพลิงถล่มพื้นดิน',
    weakness: 'ดื่มน้ำผลไม้วิเศษสายลมเพื่อวิ่งหลบวงเตือนอุกกาบาต แล้วรัวยิงปืนล่าสัตว์จากระยะปลอดภัย',
    rewardGold: 550,
    rewardXp: 700,
    rewardItem: 'magma_dragon_horn',
    rewardItemName: 'เขามังกรอัคนีเพลิงอิกนิสทรอน'
  },
  bounty_frostfang: {
    id: 'bounty_frostfang',
    bossId: 'boss_frostfang',
    title: 'ประกาศจับระดับ SSS: จอมอสูรไททันน้ำแข็ง ฟรอสต์แฟงก์',
    name: 'จอมอสูรไททันน้ำแข็ง ฟรอสต์แฟงก์ (Frostfang the Glacial Titan)',
    location: 'ยอดเขาหิมะเยือกแข็งพันปี (Frostpeak Blizzard Summit)',
    scene: 'frost_peak',
    desc: 'ยักษ์น้ำแข็งศิลาผู้บัญชาการพายุหิมะ มีเกราะผลึกน้ำแข็งสะท้อนการโจมตีและทุบพื้นเป็นหนามน้ำแข็ง',
    weakness: 'ใช้อาวุธธาตุเพลิง (เช่น ดาบเพลิงลาวา หรือขวานอิกนิสทรอน) เพื่อทำดาเมจทะลวงเกราะน้ำแข็ง',
    rewardGold: 650,
    rewardXp: 800,
    rewardItem: 'glacial_titan_core',
    rewardItemName: 'แก่นเหมันต์ไททันน้ำแข็ง'
  },
  bounty_malakor: {
    id: 'bounty_malakor',
    bossId: 'boss_malakor',
    title: 'ประกาศจับระดับ MYTHIC: ลอร์ดมรณะกระดูกอสูร มาลาคอร์',
    name: 'ลอร์ดมรณะกระดูกอสูร มาลาคอร์ (Lord Malakor the Undead Overlord)',
    location: 'สุสานใต้พิภพต้องสาป (The Nether Crypt Tomb of Kings)',
    scene: 'crypt',
    desc: 'จอมบงการผู้อยู่เบื้องหลังคำสาปสปอร์มรณะ ควบคุมวิญญาณคนตายและปลดปล่อยคลื่นพลังแห่งความมืด',
    weakness: 'เตรียมสตูว์เนื้อผักและซุปเกราะสมุนไพรเต็มอัตรา สลับการฟันประชิดและการยิงระยะไกลอย่างต่อเนื่อง',
    rewardGold: 800,
    rewardXp: 1000,
    rewardItem: 'death_lord_soul',
    rewardItemName: 'ดวงวิญญาณมรณะลอร์ดมาลาคอร์'
  },
  bounty_sylvanus: {
    id: 'bounty_sylvanus',
    bossId: 'boss_sylvanus',
    title: 'ประกาศจับระดับ ANCIENT: เทพพฤกษาบรรพกาล ซิลวาเนีย',
    name: 'เทพพฤกษาบรรพกาล ซิลวาเนีย (Sylvanus Ancient Deity)',
    location: 'ป่าพฤกษาศักดิ์สิทธิ์โบราณลึกสุด (Ancient Sacred Canopy)',
    scene: 'ancient_canopy',
    desc: 'พฤกษาเทวีโบราณผู้พิทักษ์ป่าลึก ปลดปล่อยดงหนามพิโรธ ระเบิดกลีบดอกไม้สังหาร และยิงลำแสงสุริยันทำลายล้าง',
    weakness: 'กลิ้งแดชหลบลำแสงสุริยัน ทำลายดอกไม้ตูมฮีลที่งอกขึ้นมาเพื่อขัดขวางการฟื้นฟูเลือด',
    rewardGold: 950,
    rewardXp: 1200,
    rewardItem: 'ancient_tree_heart',
    rewardItemName: 'หัวใจพฤกษาบรรพกาล'
  },
  bounty_astreon: {
    id: 'bounty_astreon',
    bossId: 'boss_astreon',
    title: 'ประกาศจับระดับ GODLIKE: จ้าวแห่งพายุสายฟ้า ออสทริออน',
    name: 'จ้าวแห่งพายุสายฟ้า ออสทริออน (Astreon Tempest Sovereign)',
    location: 'ที่ราบสูงอัสนีบาตและยอดเขาพายุ (Tempest Lightning Plateau)',
    scene: 'tempest_plateau',
    desc: 'ราชันย์แห่งสายฟ้า เคลื่อนที่ด้วยความเร็วแสง ขึงตาข่ายเสาสายฟ้าช็อตตรึง และเรียกอสุนีบาตผ่าลงมาอย่างต่อเนื่อง',
    weakness: 'สังเกตวงเตือนสายฟ้าผ่าสีทองบนพื้น ห้ามเดินเฉียดเสาล่อฟ้าที่เชื่อมกระแสไฟฟ้า',
    rewardGold: 1200,
    rewardXp: 1500,
    rewardItem: 'storm_core',
    rewardItemName: 'แก่นอัสนีบาตคำราม'
  }
};


export interface HeartEventChoice {
  text: string;
  response: string;
  friendshipBonus: number;
}

export interface HeartEventData {
  id: string;
  npcId: string;
  requiredHearts: number;
  title: string;
  story: string;
  choices: HeartEventChoice[];
  rewardDesc: string;
  rewardType: 'hp' | 'damage' | 'energy' | 'recipe' | 'gold';
  rewardValue: number;
}

export const NPC_HEART_EVENTS: Record<string, HeartEventData> = {
  lilian_2: {
    id: 'lilian_2',
    npcId: 'lilian',
    requiredHearts: 2,
    title: 'ชาสมุนไพรสูตรลับของลิเลียน (Heart 2)',
    story: 'ลิเลียนกำลังต้มชากลิ่นหอมฟุ้งในคลินิก เธอหันมายิ้มอย่างอบอุ่น: "เจ้ามาพอดีเลย! ข้ากำลังทดลองสูตรชาสมุนไพรบำรุงชีพจรอยู่พอดี อยากให้เจ้าช่วยลองชิมหน่อย จะได้ไหม?"',
    choices: [
      { text: '"ยินดีอย่างยิ่ง กลิ่นหอมอบอุ่นมาก!"', response: 'ลิเลียนยิ้มแก้มแดง: "รสหวานชุ่มคอใช่ไหมล่ะ? ชานี้จะช่วยให้ร่างกายของเจ้าแข็งแกร่งขึ้นนะ!"', friendshipBonus: 50 },
      { text: '"จะปลอดภัยแน่ใช่ไหมเนี่ย...?"', response: 'ลิเลียนหัวเราะเบาๆ: "แหม ข้าเป็นหมอยานะ ไม่วางยาพิษเพื่อนหรอกน่า! ดื่มแล้วสดชื่นแน่นอน"', friendshipBonus: 25 }
    ],
    rewardDesc: 'Max HP ถาวร +10!',
    rewardType: 'hp',
    rewardValue: 10
  },
  lilian_4: {
    id: 'lilian_4',
    npcId: 'lilian',
    requiredHearts: 4,
    title: 'คำสัญญาใต้ต้นสมุนไพรโบราณ (Heart 4)',
    story: 'ลิเลียนพาคุณเดินไปที่ทุ่งดอกไม้นอกคลินิก ลมพัดเส้นผมของเธอพลิ้วไหว: "ตั้งแต่เจ้ามาที่หุบเขาแห่งนี้... ทั้งคลินิกและหัวใจของข้าก็ไม่เคยเงียบเหงาอีกเลย ขอบคุณที่คอยอยู่เคียงข้างข้านะ"',
    choices: [
      { text: '"ข้าสัญญาว่าจะคอยปกป้องเจ้าเสมอ"', response: 'ลิเลียนก้มหน้าเขินอายอย่างมีความสุข: "ข้าเชื่อมั่นในตัวเจ้าเสมอ... เจ้าคือคนพิเศษของข้า"', friendshipBonus: 80 },
      { text: '"เราเป็นคู่หูที่ยอดเยี่ยมที่สุดในหุบเขา!"', response: 'ลิเลียนยิ้มสดใส: "ใช่แล้ว! พลังแห่งความร่วมมือของเราไม่มีใครเทียบได้!"', friendshipBonus: 40 }
    ],
    rewardDesc: 'Max HP ถาวร +15!',
    rewardType: 'hp',
    rewardValue: 15
  },
  valeria_2: {
    id: 'valeria_2',
    npcId: 'valeria',
    requiredHearts: 2,
    title: 'บทเรียนเพลงดาบแห่งปราการเหนือ (Heart 2)',
    story: 'ผู้กองวาเลเรียกำลังฝึกซ้อมดาบอย่างดุดันที่ลานหิน เธอปักดาบลงดินแล้วหันมามองคุณด้วยสายตามุ่งมั่น: "เจ้ามีแววตานักรบที่ยอดเยี่ยมมาก มาประลองดาบกับข้าสักยกเถอะ! ข้าจะชี้แนะเคล็ดวิชาจับดาบให้"',
    choices: [
      { text: '"น้อมรับคำชี้แนะ พร้อมเสมอครับผู้กอง!"', response: 'วาเลเรียพยักหน้าอย่างชื่นชม: "ยอดเยี่ยม! สมาธิมั่นคง ดาบมีพลัง! จำความรู้สึกนี้ไว้"', friendshipBonus: 50 },
      { text: '"ออมมือให้ข้าด้วยนะ"', response: 'วาเลเรียหัวเราะหึๆ: "ในสนามรบไม่มีใครออมมือหรอก แต่สำหรับเจ้า... ข้าจะค่อยๆ สอน"', friendshipBonus: 30 }
    ],
    rewardDesc: 'พลังโจมตีพื้นฐานถาวร +5!',
    rewardType: 'damage',
    rewardValue: 5
  },
  valeria_4: {
    id: 'valeria_4',
    npcId: 'valeria',
    requiredHearts: 4,
    title: 'ตราเกียรติยศแห่งอัศวินคู่กาย (Heart 4)',
    story: 'วาเลเรียเรียกคุณไปที่หอสังเกตการณ์ยามเย็น เธอปลดเข็มกลัดตราสิงโตเหล็กออกจากเกราะแล้วยื่นให้คุณ: "มีเพียงคนที่ข้าไว้วางใจจะฝากแผ่นหลังให้ได้เท่านั้นที่จะได้สิ่งนี้... เจ้าคือสหายที่สำคัญที่สุดของข้า"',
    choices: [
      { text: '"ข้าจะติดตรานี้ไว้ใกล้หัวใจเสมอ"', response: 'วาเลเรียมองตาคุณลึกซึ้ง: "ข้ารู้ว่าเจ้าจะไม่ทำให้ข้าผิดหวัง... ร่วมสู้ไปด้วยกันนะ"', friendshipBonus: 80 },
      { text: '"เป็นเกียรติอย่างยิ่งครับผู้กอง"', response: 'วาเลเรียยิ้มมุมปาก: "ไม่ต้องเป็นทางการนักก็ได้ เมื่ออยู่กับข้าสองคน เจ้าคือคนพิเศษ"', friendshipBonus: 50 }
    ],
    rewardDesc: 'พลังโจมตีพื้นฐานถาวร +10!',
    rewardType: 'damage',
    rewardValue: 10
  },
  bob_2: {
    id: 'bob_2',
    npcId: 'bob',
    requiredHearts: 2,
    title: 'สูตรเครื่องดื่มแห่งความสุขของบ็อบ (Heart 2)',
    story: 'บ็อบกำลังเช็ดแก้วอยู่ที่เคาน์เตอร์โรงเตี๊ยม พลางฮัมเพลงอย่างสบายอารมณ์: "เฮ้สหาย! วันนี้ข้าหมักเบียร์สูตรข้าวสาลีพิเศษได้สำเร็จ รสชาตินุ่มละมุนมาก มานั่งตรงนี้แล้วยกแก้วฉลองกันสักหน่อยสิ!"',
    choices: [
      { text: '"หมดแก้วเพื่อมิตรภาพของเรา!"', response: 'บ็อบตบโต๊ะดังลั่นด้วยความสะใจ: "ฮ่าๆๆ! ดื่มแบบนี้สิถึงจะเรียกว่ายอดสหาย! เอาเบียร์สูตรพิเศษไปติดตัวเลย"', friendshipBonus: 50 },
      { text: '"ขอจิบช้าๆ ลิ้มรสชาติดีกว่า"', response: 'บ็อบยิ้มกว้าง: "คนมีรสนิยม! เจ้าเข้าใจศาสตร์แห่งการหมักอย่างแท้จริง"', friendshipBonus: 35 }
    ],
    rewardDesc: 'Max Energy ถาวร +15!',
    rewardType: 'energy',
    rewardValue: 15
  },
  bob_4: {
    id: 'bob_4',
    npcId: 'bob',
    requiredHearts: 4,
    title: 'เรื่องเล่าใต้แสงดาวของบ็อบ (Heart 4)',
    story: 'โรงเตี๊ยมปิดแล้ว บ็อบนั่งผิงไฟกับคุณ: "ข้าเคยเดินทางไปมาครึ่งโลก แต่ไม่มีที่ไหนทำให้ข้ารู้สึกอบอุ่นเหมือนที่นี่เลย... และข้าดีใจจริงๆ ที่ได้รู้จักเจ้า เจ้าทำให้โรงเตี๊ยมนี้มีชีวิตชีวา"',
    choices: [
      { text: '"ข้าก็ดีใจที่มีบ็อบคอยต้อนรับเสมอ"', response: 'บ็อบตบบ่าคุณเบาๆ อย่างจริงใจ: "ประตูโรงเตี๊ยมของข้าเปิดรับเจ้าเสมอ ไม่ว่าจะเกิดอะไรขึ้น"', friendshipBonus: 80 },
      { text: '"โรงเตี๊ยมของบ็อบคือที่พักใจที่ดีที่สุด"', response: 'บ็อบยิ้มอบอุ่น: "ได้ยินแบบนี้ข้าก็หายเหนื่อยแล้ว ขอบใจมากนะเพื่อนรัก"', friendshipBonus: 50 }
    ],
    rewardDesc: 'Max Energy ถาวร +25 และทองคำ 1,000 G!',
    rewardType: 'energy',
    rewardValue: 25
  },
  eldrin_2: {
    id: 'eldrin_2',
    npcId: 'eldrin',
    requiredHearts: 2,
    title: 'ปราชญ์ชี้ทางแห่งดวงดาว (Heart 2)',
    story: 'ผู้เฒ่าเอลดรินยืนมองลูกแก้วเวทมนตร์ในคฤหาสน์ เขาหันมาสบตาคุณด้วยแววตาเปี่ยมปัญญา: "ดวงชะตาของเจ้าส่องประกายสว่างไสวเหนือหุบเขา... ข้าสัมผัสได้ถึงพลังเวทโบราณที่หลับใหลอยู่ในกายเจ้า เจ้าพร้อมจะให้ข้าช่วยปลุกมันหรือไม่?"',
    choices: [
      { text: '"ข้าพร้อมรับฟังคำชี้แนะจากท่านปราชญ์ครับ"', response: 'เอลดรินวางมือบนศีรษะคุณ แสงสีทองส่องประกาย: "จงเปิดจิตรับพลังแห่งศิลาโบราณ... พลังเวทของเจ้าตื่นขึ้นแล้ว"', friendshipBonus: 50 },
      { text: '"พลังเวทนั้นจะนำความสงบสุขมาสู่ฟาร์มได้ใช่ไหม?"', response: 'เอลดรินยิ้มอย่างเมตตา: "แน่นอน พลังที่ขับเคลื่อนด้วยเจตนาอันบริสุทธิ์ย่อมสร้างสรรค์สิ่งงดงาม"', friendshipBonus: 40 }
    ],
    rewardDesc: 'Max Energy ถาวร +20!',
    rewardType: 'energy',
    rewardValue: 20
  },
  eldrin_4: {
    id: 'eldrin_4',
    npcId: 'eldrin',
    requiredHearts: 4,
    title: 'กุญแจสู่มิติผลึกนิรันดร์ (Heart 4)',
    story: 'เอลดรินมอบม้วนคัมภีร์หนังแกะโบราณให้คุณ: "นี่คือแผนที่นำทางสู่ หอคอยผลึกมิติไร้จุดสิ้นสุด (The Infinite Spire)... ปู่ของเจ้าเคยขึ้นไปจนถึงยอดเพื่อค้นหาความหมายของแสงดาว มีเพียงผู้กล้าที่ข้าไว้วางใจสูงสุดเท่านั้นที่จะก้าวเข้าไปได้"',
    choices: [
      { text: '"ข้าจะพิชิตหอคอยนี้และนำเกียรติยศมาสู่หุบเขา!"', response: 'เอลดรินพยักหน้าด้วยความภาคภูมิใจ: "ดวงดาวนำทางเจ้าเสมอ ขอให้พลังแห่งศิลาคุ้มครอง"', friendshipBonus: 80 },
      { text: '"ขอบพระคุณท่านผู้เฒ่าที่เชื่อมั่นในตัวข้า"', response: 'เอลดรินยิ้มอบอุ่น: "เจ้าคือความหวังที่แท้จริงของพวกเราทุกคน"', friendshipBonus: 60 }
    ],
    rewardDesc: 'ปลดล็อกทางเข้าหอคอยผลึก และ Max Energy ถาวร +30!',
    rewardType: 'energy',
    rewardValue: 30
  },
  gilbert_2: {
    id: 'gilbert_2',
    npcId: 'gilbert',
    requiredHearts: 2,
    title: 'กล่องไม้เก่าของปู่อาเธอร์ (Heart 2)',
    story: 'ยามบ่ายในคฤหาสน์ กิลเบิร์ตหยิบกล่องไม้เก่าที่มีตราแสงดาวสลักอยู่มาวางบนโต๊ะ: "อาเธอร์ฝากสิ่งนี้ไว้กับข้าก่อนเสีย เขาบอกว่าหากหลานของเขาไม่ทอดทิ้งผืนดินนี้แม้ในยามมืดมิด... จงมอบทุนก้นถุงและเมล็ดจิตวิญญาณนักสู้ของปู่ให้"',
    choices: [
      { text: '"ปู่สอนเสมอว่าดินดีต้องแลกด้วยเหงื่อและใจ"', response: 'กิลเบิร์ตเช็ดหัวตาเบาๆ: "คำพูดเหมือนอาเธอร์ราวกับแกะ... เขายิ้มอยู่บนฟ้าแน่นอน"', friendshipBonus: 55 },
      { text: '"ข้าจะไม่ทำให้เมืองนี้ผิดหวังครับนายกฯ"', response: 'กิลเบิร์ตยิ้มอบอุ่น: "ความตั้งใจของเจ้ามั่นคงดั่งภูผาแล้ว"', friendshipBonus: 40 }
    ],
    rewardDesc: 'ทุนส่งเสริมฟาร์ม +400 G และ Max Energy ถาวร +15!',
    rewardType: 'energy',
    rewardValue: 15
  },
  gilbert_4: {
    id: 'gilbert_4',
    npcId: 'gilbert',
    requiredHearts: 4,
    title: 'คำมั่นสัญญาก่อตั้งหมู่บ้าน (Heart 4)',
    story: 'กิลเบิร์ตพาคุณยืนชมวิวหมู่บ้านจากระเบียง: "200 ปีก่อน บรรพบุรุษของพวกเราและปู่ของเจ้าสาบานว่า แม้ความมืดจากสุสานใต้พิภพจะกลับมาอีกกี่ครั้ง ศิลาสุขาวดีจะไม่มีวันล่มสลายตราบใดที่มีมิตรภาพ... วันนี้ข้าขอแต่งตั้งเจ้าเป็นสมาชิกกิตติมศักดิ์ตลอดกาล"',
    choices: [
      { text: '"บ้านหลังนี้คือครอบครัวของข้าแล้ว"', response: 'กิลเบิร์ตประทับตราประจำเมือง: "ตั้งแต่นี้ไป ทุกประตูในศิลาสุขาวดีพร้อมต้อนรับเจ้าเสมอ"', friendshipBonus: 85 },
      { text: '"ข้าจะปกป้องหุบเขาด้วยชีวิต"', response: 'กิลเบิร์ตพยักหน้าอย่างซาบซึ้ง: "ขอให้พรแห่งแผ่นดินสถิตกับเจ้า"', friendshipBonus: 60 }
    ],
    rewardDesc: 'Max HP ถาวร +20!',
    rewardType: 'hp',
    rewardValue: 20
  },
  kael_2: {
    id: 'kael_2',
    npcId: 'kael',
    requiredHearts: 2,
    title: 'รอยแผลจากเตาหลอมโบราณ (Heart 2)',
    story: 'คาเอลกำลังตีเหล็กร้อนแดงจนเหงื่อชุ่มกาย เขาหยุดค้อนลงแล้วมองมือที่เต็มไปด้วยรอยแผล: "สมัยเด็ก ข้าเคยคิดจะหนีจากเสียงค้อนอันเหน็ดเหนื่อยนี้ แต่ปู่ของเจ้าบอกว่าไฟที่ร้อนที่สุดต่างหากที่หลอมดาบที่ไม่วันหักได้... มาลองตีเหล็กร่วมกับข้าสักทีไหม?"',
    choices: [
      { text: '"ส่งค้อนมาเลย ข้าพร้อมช่วยตีเหล็ก!"', response: 'คาเอลหัวเราะก้องโรงตีเหล็ก: "ฮ่าๆ! จังหวะตีหนักแน่นดีมาก กล้ามเนื้อและคมดาบเจ้าแกร่งขึ้นทันตา!"', friendshipBonus: 55 },
      { text: '"ศิลปะของเจ้าคือหัวใจของแนวหน้าเลยล่ะ"', response: 'คาเอลยิ้มภูมิใจ: "คำพูดของเจ้าร้อนแรงยิ่งกว่าถ่านหินเสียอีก!"', friendshipBonus: 40 }
    ],
    rewardDesc: 'พลังโจมตีพื้นฐานถาวร +6!',
    rewardType: 'damage',
    rewardValue: 6
  },
  kael_4: {
    id: 'kael_4',
    npcId: 'kael',
    requiredHearts: 4,
    title: 'ศัสตราวุธที่ไม่มีวันแตกสลาย (Heart 4)',
    story: 'ยามค่ำในโรงตีเหล็ก คาเอลหยิบหินลับมีดเรืองแสงสีทองมามอบให้คุณ: "หินก้อนนี้หลอมจากเถ้าภูเขาไฟและหยาดเหงื่อสิบปีของข้า อาวุธในมือเจ้าจะคมกริบไร้เทียมทานตราบเท่าที่ใจของเจ้าไม่ยอมแพ้"',
    choices: [
      { text: '"ตราบใดที่มีคาเอลอยู่ ข้าไม่กลัวอสูรตัวไหนทั้งนั้น"', response: 'คาเอลตบไหล่คุณเสียงดังปัง: "พูดได้ดี! ไปลุยด้วยกันให้สุดทาง!"', friendshipBonus: 80 },
      { text: '"ข้าจะเก็บรักษามันไว้อย่างดีที่สุด"', response: 'คาเอลพยักหน้าขรึม: "จงใช้มันเพื่อผู้บริสุทธิ์ในหุบเขา"', friendshipBonus: 60 }
    ],
    rewardDesc: 'พลังโจมตีพื้นฐานถาวร +12!',
    rewardType: 'damage',
    rewardValue: 12
  },
  luna_2: {
    id: 'luna_2',
    npcId: 'luna',
    requiredHearts: 2,
    title: 'ดอกทานตะวันกลางสายฝน (Heart 2)',
    story: 'ลูน่ากำลังประคองต้นกล้าดอกไม้เล็กๆ ไว้ใต้ร่มอย่างทะนุถนอม เธอยิ้มสดใสเมื่อเห็นคุณเดินเข้ามา: "แม้ฟ้าจะครึ้มจากพายุหรือละอองสปอร์ แต่ดอกไม้ที่เจ้ารดน้ำอย่างใส่ใจก็เบ่งบานได้เสมอ... ข้าชงชากลีบกุหลาบอุ่นๆ ไว้ให้ ดื่มด้วยกันนะจ๊ะ"',
    choices: [
      { text: '"รอยยิ้มของเจ้าสว่างกว่าทานตะวันทั้งทุ่งอีกนะ"', response: 'ลูน่าหน้าแดงจัดรีบก้มหลบใต้ร่ม: "พะ... พูดอะไรเนี่ยจ๊ะ! ใจฉันเต้นไม่เป็นจังหวะเลย..."', friendshipBonus: 65 },
      { text: '"กลิ่นชาหอมมากเลย ขอบคุณนะลูน่า"', response: 'ลูน่ายิ้มละมุน: "ดีใจจังที่เจ้าชอบ ข้าจะปลูกดอกไม้งามๆ ไว้เต็มหมู่บ้านเลย"', friendshipBonus: 45 }
    ],
    rewardDesc: 'Max Energy ถาวร +20!',
    rewardType: 'energy',
    rewardValue: 20
  },
  luna_4: {
    id: 'luna_4',
    npcId: 'luna',
    requiredHearts: 4,
    title: 'คำอธิษฐานใต้แสงหิ่งห้อย (Heart 4)',
    story: 'ยามพลบค่ำ หิ่งห้อยนับสิบบินวนรอบสวนดอกไม้ ลูน่าจ้องมองแสงสีทองพลางกระซิบเบาๆ: "ตอนหมู่บ้านวิกฤต ข้ากลัวว่าวันพรุ่งนี้จะไม่เหลือดอกไม้ให้ผลิบานอีก... แต่เพราะมีเจ้าอยู่ตรงนี้ ข้าจึงกล้าฝันถึงวันพรุ่งนี้อีกครั้ง"',
    choices: [
      { text: '"ข้าจะปกป้องทุ่งดอกไม้และรอยยิ้มของเจ้าตลอดไป"', response: 'ลูน่ากุมมือคุณแน่นพร้อมรอยยิ้มอ่อนโยน: "แค่มีเจ้าอยู่เคียงข้าง ทุกฤดูก็คือฤดูใบไม้ผลิของข้า..."', friendshipBonus: 90 },
      { text: '"เราจะปลูกดอกไม้แห่งสันติสุขให้เต็มหุบเขาด้วยกัน!"', response: 'ลูน่าพยักหน้าทั้งน้ำตาแห่งความสุข: "อื้ม! สัญญาเลยนะ!"', friendshipBonus: 65 }
    ],
    rewardDesc: 'Max HP ถาวร +15 & Max Energy ถาวร +15!',
    rewardType: 'hp',
    rewardValue: 15
  }
};

// ========================================================
// STORY CUTSCENES & WORLD LORE CHRONICLES
// ========================================================
export interface StoryCutsceneData {
  id: string;
  chapterBadge: string;
  title: string;
  subtitle: string;
  accentColor: string;
  paragraphs: string[];
  quote?: string;
}

export const STORY_CUTSCENES: Record<string, StoryCutsceneData> = {
  prologue: {
    id: 'prologue',
    chapterBadge: 'บทนำแห่งชะตากรรม (PROLOGUE)',
    title: 'จดหมายฉบับสุดท้ายจากปู่อาเธอร์',
    subtitle: 'หุบเขาแห่งศิลาสุขาวดี — คืนจันทราสีเลือด',
    accentColor: '#facc15',
    paragraphs: [
      'ถึงหลานรัก... หากเจ้ากำลังอ่านจดหมายฉบับนี้อยู่ แปลว่าเจ้าได้เดินทางมาถึงฟาร์มเก่าแก่สุดชายขอบหมู่บ้านศิลาสุขาวดีแล้ว ผืนดินแห่งนี้เคยรุ่งเรืองและสงบสุข แต่ภายใต้รากไม้โบราณกลับซ่อนความลับที่ปู่ปิดผนึกไว้ตลอดชีวิต',
      'เมื่อสองร้อยปีก่อน ข้าและปราชญ์เอลดรินร่วมมือกับสหายผู้หนึ่งสร้าง "ผนึกแปดศิลาธาตุ" กักขังความโกลาหลไว้ใต้แผ่นดิน ทว่าคืนนี้ดวงจันทร์กลับทอแสงสีเลือด... และละอองสปอร์ต้องสาปเริ่มปลุกแมลงในไร่ให้กลายพันธุ์',
      'จงเริ่มต้นจากสองมือของชาวสวน พรวนดิน หว่านเมล็ดพันธุ์ และผูกมิตรกับชาวหมู่บ้าน — กิลเบิร์ต ลิเลียน วาเลเรีย คาเอล บ็อบ และลูน่า — เพราะความจริงทั้งหมดถูกซ่อนไว้ในความทรงจำของพวกเขา'
    ],
    quote: '"เมล็ดพันธุ์ที่ปลูกด้วยความหวัง ย่อมแกร่งกล้ากว่าคำสาปใดในใต้หล้า — ปู่อาเธอร์"'
  },
  ch5_twist: {
    id: 'ch5_twist',
    chapterBadge: 'จุดเปลี่ยนแห่งตำนาน (CHAPTER 5 TWIST)',
    title: 'เสียงสะท้อนจากมงกุฎต้องสาป',
    subtitle: 'เมื่อราชินีคาธูรอสสิ้นฤทธิ์ ความมืดที่แท้จริงจึงเปิดเผยตัว',
    accentColor: '#f43f5e',
    paragraphs: [
      'ทันทีที่ดาบของเจ้าฟาดฟัน "ราชินีสปอร์ปีศาจ คาธูรอส" จนร่างสลายเป็นละอองแสงสีแดง... แทนที่จะสงบลง มงกุฎทองคำที่ร่วงตกพื้นกลับเปล่งเสียงหัวเราะเย็นเยียบจากห้วงลึกใต้พิภพ!',
      'ภาพนิมิตปรากฏต่อสายตาเจ้า: มือโครงกระดูกสวมผ้าคลุมทมิฬกำลังบีบทำลายผนึกแก้วใสสี่ดวงพร้อมกัน เสียงกระซิบก้องขึ้นในโสตประสาท — "คาธูรอสเป็นเพียงเหยื่อล่อ... จงดูเถิด เมื่อสี่มหาวิบัติธาตุตื่นขึ้น ทั้งผลึก พิษ เพลิง และเหมันต์ จงพิสูจน์ว่าเจ้าคู่ควรจะพบข้า ณ สุสาน!"',
      'แรงสั่นสะเทือนสะเทือนไปถึงถ้ำผลึกลึก หนองน้ำมืด ปากปล่องภูเขาไฟ และยอดเขาหิมะ ชาวบ้านศิลาสุขาวดีทุกคนกำลังต้องการพลังของเจ้ามากกว่าที่เคย!'
    ],
    quote: '"จอมบงการตัวจริงเพิ่งลืมตาตื่นจากบัลลังก์กระดูก..."'
  },
  ch10_reveal: {
    id: 'ch10_reveal',
    chapterBadge: 'ความจริงอันดำมืด (CHAPTER 10 REVELATION)',
    title: 'คำสาบานที่แตกหักของสหายผู้ทรยศ',
    subtitle: 'อวสานแห่งลอร์ดมาลาคอร์ และปฐมบทสุดท้ายของ 8 ศิลาเทวะ',
    accentColor: '#a855f7',
    paragraphs: [
      'ภายใต้ชุดเกราะกระดูกของ "ลอร์ดมาลาคอร์" เจ้าพบเข็มกลัดรูปดาวครึ่งซีก — แบบเดียวกับครึ่งที่ปู่อาเธอร์สวมติดอกจวบจนวาระสุดท้าย... ที่แท้มาลาคอร์คือ "ผู้พิทักษ์ผนึกคนที่สาม" อดีตสหายร่วมสาบานที่ยอมแลกวิญญาณกับความมืดเพื่อหลีกหนีความตาย!',
      'ในห้วงลมหายใจสุดท้าย ดวงตาม่วงทมิฬของเขาค่อยๆ อ่อนแสงลง: "อาเธอร์... เจ้ายังเชื่อมั่นในสายเลือดชาวสวนเสมอสินะ... ทว่าความบ้าคลั่งที่ข้าปลุกไว้ยังหลงเหลือในป่าบรรพกาลซิลวาเนีย และที่ราบสูงสายฟ้าออสทริออน..."',
      'เหลืออีกเพียงสองมหาเทพธาตุเท่านั้น หากเจ้ารวบรวม "แก่นศิลาศักดิ์สิทธิ์ทั้ง 8 ธาตุ" กลับคืนสู่แท่นบูชาวิหารเหนือป่าโบราณได้ คำสาปสองร้อยปีจะถูกชำระล้างอย่างสมบูรณ์!'
    ],
    quote: '"ความแค้นถูกชำระด้วยดาบ ความรักถูกสานต่อด้วยผืนดิน..."'
  },
  archive_lore: {
    id: 'archive_lore',
    chapterBadge: 'บันทึกประวัติศาสตร์ (ANCIENT ARCHIVES)',
    title: 'พงศาวดารแห่งวิบัติ 200 ปีก่อน',
    subtitle: 'บันทึกลับในห้องสมุดคฤหาสน์หมู่บ้านศิลาสุขาวดี',
    accentColor: '#38bdf8',
    paragraphs: [
      'หน้ากระดาษเก่าแก่กรอบเหลืองจารึกเหตุการณ์เมื่อ 200 ปีก่อน: "ในยุคที่หุบเขาถูกปกคลุมด้วยสปอร์สีเลือด ผู้กล้าสามสหาย — อาเธอร์ เอลดริน และคีรอน (มาลาคอร์) — ได้ผนึกจอมอสูรไว้หลังวิหารเหนือ"',
      'ทว่าหน้าสุดท้ายถูกฉีกขาด เหลือเพียงหมายเหตุด้วยลายมือสั่นเครือ: "คีรอนแอบลงไปใต้สุสานหลวง... หากวันใดผนึกพัง จงนำแก่นศิลาทั้งแปดธาตุกลับสู่แท่นบูชาวิหาร พร้อมเซรุ่มจากดอกสมุนไพรดวงดาวเท่านั้นที่จะรักษาชีวิตชาวเมืองไว้ได้!"'
    ],
    quote: '"ประวัติศาสตร์ที่ถูกลืม มักย้อนกลับมาทวงคำตอบจากคนรุ่นหลัง"'
  },
  pirate_lore: {
    id: 'pirate_lore',
    chapterBadge: 'ลายแทงเกาะสมบัติ (BLACKHOUND LOG)',
    title: 'ปูมเรือของกัปตันแบล็กฮาวด์ & มังกรคาร์ซาร็อค',
    subtitle: 'บันทึกจากขวดแก้วลอยน้ำริมหาดแคริบเบียน',
    accentColor: '#f59e0b',
    paragraphs: [
      '"เรือแบล็กฮาวด์ถูกพายุไฟซัดเกยตื้นที่หาดตะวันตก หลังลูกเรือค้นพบปล่องภูเขาไฟลึกลับบนเกาะเขตร้อน... ใต้ชั้นลาวาชั้นที่ 10 มังกรดึกดำบรรพ์คาร์ซาร็อคนอนหลับใหลอยู่บนแท่นหลอมโบราณ!"',
      '"ใครก็ตามที่หา Skeleton Key จากกัปตันบาร์นาบี้พบ หรือกล้าลงไปดับลมหายใจของมังกรลาวาคาร์ซาร็อคได้ ผู้นั้นจะได้ครอบครองดาบสุริยันและสมบัติทองคำโจรสลัดที่สูญหาย!"'
    ],
    quote: '"ทะเลสีครามซ่อนทั้งผลไม้วิเศษและมังกรหลับใหลไว้ใต้คลื่นเดียวกัน"'
  }
};

export interface StoryLoreEntry {
  id: string;
  title: string;
  category: string;
  text: string;
  cutsceneId?: string;
}

export const STORY_LORE_ENTRIES: StoryLoreEntry[] = [
  {
    id: 'lore_prologue',
    title: 'จดหมายฉบับสุดท้ายของปู่อาเธอร์',
    category: 'มรดกตระกูล',
    text: 'ปู่อาเธอร์เคยเป็นผู้พิทักษ์ผนึก 8 ศิลาธาตุร่วมกับเอลดริน ก่อนส่งต่อฟาร์มและเข็มทิศแห่งแสงดาวให้คุณสานต่อเจตนารมณ์',
    cutsceneId: 'prologue'
  },
  {
    id: 'lore_archives',
    title: 'พงศาวดารวิบัติ 200 ปี (ห้องสมุดคฤหาสน์)',
    category: 'ประวัติศาสตร์',
    text: 'บันทึกจากคฤหาสน์กิลเบิร์ตยืนยันว่าเมื่อ 200 ปีก่อน สปอร์สีเลือดเคยระบาดหนัก และชื่อเดิมของลอร์ดมาลาคอร์คือ "คีรอน" หนึ่งในผู้กล้าทั้งสาม',
    cutsceneId: 'archive_lore'
  },
  {
    id: 'lore_lilian_parents',
    title: 'สมุดภาคสนามของพ่อแม่ลิเลียน',
    category: 'ความทรงจำชาวเมือง',
    text: 'นักพฤกษศาสตร์ทั้งสองไม่เคยทอดทิ้งหมู่บ้าน พวกเขาสละชีวิตตรึงพิษของพญาไฮดราคิสไว้ใต้บึงมืดจนวินาทีสุดท้าย',
    cutsceneId: ''
  },
  {
    id: 'lore_kathuros_crown',
    title: 'เสียงสะท้อนจากมงกุฎคาธูรอส',
    category: 'เบาะแสมหาศึก',
    text: 'คาธูรอสเป็นเพียงผู้รับเคราะห์จากคำสาป มงกุฎกระดูกของมาลาคอร์ต่างหากที่ฉีกผนึกทั้งสี่ธาตุในถ้ำ บึง ภูเขาไฟ และยอดเขาหิมะ',
    cutsceneId: 'ch5_twist'
  },
  {
    id: 'lore_malakor_oath',
    title: 'เข็มกลัดดาวครึ่งซีกของมาลาคอร์',
    category: 'ความจริงสุดท้าย',
    text: 'คีรอน (ลอร์ดมาลาคอร์) หักหลังสหายด้วยความกลัวความตาย ทิ้งคำสั่งเสียถึงเทพพฤกษาซิลวาเนียและจ้าวพายุออสทริออนไว้เป็นบททดสอบสุดท้าย',
    cutsceneId: 'ch10_reveal'
  },
  {
    id: 'lore_blackhound',
    title: 'ลายแทงเรือแบล็กฮาวด์ & มังกรคาร์ซาร็อค',
    category: 'ตำนานเกาะเขตร้อน',
    text: 'ใต้ปล่องภูเขาไฟเกาะสมบัติมีมังกรลาวาคาร์ซาร็อคเฝ้าแท่นหลอมภูเขาไฟโบราณและขุมทรัพย์โจรสลัดอยู่บนชั้นที่ 10',
    cutsceneId: 'pirate_lore'
  }
];

// ========================================================
// PIRATE EXPEDITION SHOP ITEMS (ร้านค้าเหรียญทองโบราณ กัปตันบาร์นาบี้)
// ========================================================
export interface PirateShopItem {
  id: string;
  name: string;
  priceDoubloons: number;
  type: string;
  desc: string;
  itemType: string;
}

export const PIRATE_SHOP_ITEMS: Record<string, PirateShopItem> = {
  cutlass_saber: {
    id: 'cutlass_saber',
    name: 'ดาบโจรสลัดคัตลาสอาถรรพ์ (Corsair Cutlass)',
    priceDoubloons: 40,
    type: 'weapon',
    itemType: 'weapon',
    desc: 'ดาบโค้งเหล็กกล้าแห่งแคริบเบียน ฟันคลื่นจันทร์เสี้ยววารี พลังโจมตี 62 ติดคริติคอล +20%!'
  },
  pirate_tricorn_hat: {
    id: 'pirate_tricorn_hat',
    name: 'หมวกกัปตันโจรสลัดสามมุม (Captain Tricorn)',
    priceDoubloons: 25,
    type: 'hat',
    itemType: 'armor',
    desc: 'หมวกโจรสลัดขนนกสีแดง สวมใส่เพิ่มโอกาสหลบหลีก +20% และเดินไวขึ้น +25%'
  },
  island_warp_totem: {
    id: 'island_warp_totem',
    name: 'เสาวาร์ปเกาะเขตร้อน x3 (Island Warp Totem)',
    priceDoubloons: 6,
    type: 'consumable',
    itemType: 'material',
    desc: 'เสาอาถรรพ์ ใช้เทเลพอร์ตข้ามมิติมายังเกาะเขตร้อนได้ทันทีจากทุกที่'
  },
  golden_melon_seed: {
    id: 'golden_melon_seed',
    name: 'เมล็ดเมลอนทองคำเกาะโจรสลัด x5',
    priceDoubloons: 6,
    type: 'seed',
    itemType: 'seed',
    desc: 'เมล็ดพืชหายาก ปลูกบนเกาะโต 5 วัน ได้ผลเมลอนทองคำขายได้ราคา 420 G!'
  },
  starfruit_seed: {
    id: 'starfruit_seed',
    name: 'เมล็ดผลไม้ดวงดาวแคริบเบียน x5',
    priceDoubloons: 10,
    type: 'seed',
    itemType: 'seed',
    desc: 'เมล็ดผลไม้รูปดาวเรืองแสง ปลูกบนเกาะโต 6 วัน ขายได้ราคาสูง 550 G!'
  },
  skeleton_key: {
    id: 'skeleton_key',
    name: 'กุญแจโครงกระดูกโจรสลัด (Skeleton Key)',
    priceDoubloons: 4,
    type: 'key',
    itemType: 'material',
    desc: 'กุญแจกระดูกอาถรรพ์ ใช้ไขเปิดหีบสมบัติโจรสลัดโบราณบนซากเรืออับปาง'
  },
  tropical_delight_drink: {
    id: 'tropical_delight_drink',
    name: 'ค็อกเทลเขตร้อนสูตรกัปตัน x3',
    priceDoubloons: 3,
    type: 'food',
    itemType: 'material',
    desc: 'เครื่องดื่มผลไม้เขตร้อนเย็นฉ่ำ ดื่มเพื่อวิ่งเร็วขึ้น +60% นาน 5 นาที!'
  }
};

// ========================================================
// CENTRALIZED ITEM SOURCE DIRECTORY (แหล่งที่มาของไอเทมทั้งหมด)
// ========================================================
export type ItemFinderCategory =
  | 'mineral'
  | 'monster'
  | 'boss'
  | 'forage'
  | 'crop'
  | 'fish'
  | 'artisan'
  | 'shop';

export interface ItemSourceMeta {
  name?: string;
  category: ItemFinderCategory;
  source: string;
}

export const ITEM_SOURCES: Record<string, ItemSourceMeta> = {
  // --- แร่ธาตุ & อัญมณี (Mining & Caves) ---
  wood: { name: 'ท่อนไม้', category: 'forage', source: 'ใช้ขวานตัดต้นไม้ในฟาร์ม/ป่า หรือต้นปาล์มบนเกาะสมบัติ (ซื้อร้านช่างตีเหล็กคาเอล 5 ท่อน 75G ได้)' },
  stone: { name: 'ก้อนหินเนื้อแน่น', category: 'mineral', source: 'ใช้จอบอีเต๋อขุดก้อนหินในเหมืองป่าลึก (มีโอกาสได้ x2 35%) หรือกะเทาะหินปริศนา' },
  coal: { name: 'ถ่านหิน (Coal)', category: 'mineral', source: 'สุ่มดรอป 16% เมื่อขุดก้อนหินในเหมือง หรือดรอป 45% จากภูตลูกไฟลาวาในถ้ำภูเขาไฟเกาะสมบัติ' },
  copper_ore: { name: 'แร่ทองแดงบริสุทธิ์', category: 'mineral', source: 'สุ่มดรอป 25% จากการขุดหินในเหมืองชั้น 1+ หรือซื้อจากช่างตีเหล็กคาเอล (2 ก้อน 70G)' },
  iron_ore: { name: 'แร่เหล็กดิบ', category: 'mineral', source: 'ขุดแร่ทับทิมในเหมืองชั้น 10+ (65%), ดรอปจากก็อบลินในป่า (100%), นักรบโครงกระดูกในสุสาน (75%), หนอนลาวา (45%) หรือซื้อร้านตีเหล็กคาเอล (60G)' },
  gold_ore: { name: 'แร่ทองคำดิบ', category: 'mineral', source: 'ขุดสายแร่ทองในเหมืองชั้น 5+ และก้นบึ้งถ้ำ (Cave Depths), ดันเจี้ยนภูเขาไฟ (25%), โจรสลัดโครงกระดูก (30%) หรือหีบสมบัติ' },
  mana_gem: { name: 'ผลึกมานาสีคราม', category: 'mineral', source: 'ขุดสายแร่มานาสีฟ้าในเหมืองป่าลึก, ดรอปจากต้นไม้ปีศาจในป่า (30%) / สไลม์คริสตัล (25%) หรือหีบสมบัติถ้ำ' },
  ruby_gem: { name: 'อัญมณีทับทิมเวทมนตร์', category: 'mineral', source: 'ขุดแร่ทับทิมในป่าเงามืด / เหมืองชั้น 10+ / วิหารไฟลาวา, ดรอปจากค้างคาว (14%) / อสูรไฟ (25%) หรือกะเทาะหินปริศนา' },
  diamond_crystal: { name: 'เพชรคริสตัลโบราณ', category: 'mineral', source: 'ขุดสายแร่เพชรในเหมืองชั้น 15+ และ Cave Depths, ดรอปจากสไลม์/แมงมุมผลึก (8-12%), ร้าน Void Shop ซุล (750G) หรือร้านหอคอย (8 ผลึก)' },
  thunder_crystal: { name: 'ผลึกสายฟ้าอัสนีบาต', category: 'mineral', source: 'ขุดผลึกสายฟ้าบนที่ราบสูงแห่งพายุ (Tempest Plateau ทางเหนือของยอดเขาหิมะ) หรือดรอปจากบอสออสทริออน (x3)' },
  cinder_shard: { name: 'เศษผลึกเพลิง (Cinder Shard)', category: 'mineral', source: 'ขุดแร่ผลึกเพลิงในดันเจี้ยนภูเขาไฟเกาะสมบัติ, ดรอปจากมอนสเตอร์ภูเขาไฟ (30-50%) หรือบอสคาร์ซาร็อค (x8)' },
  star_core: { name: 'แก่นผลึกดวงดาว', category: 'mineral', source: 'ขุดอุกกาบาตดวงดาว หรือเปิดหีบสมบัติหลักในเหมืองชั้น 5, 10, 15, 20 (หีบชั้นละ 1 ชิ้น)' },
  star_shard: { name: 'เศษอุกกาบาตดวงดาว (Star Shard)', category: 'mineral', source: 'ขุดก้อนอุกกาบาตดวงดาว หรือสุ่ม 6% จากการกะเทาะหินผลึกปิดผนึกปริศนา (Mystery Geode)' },
  mystery_geode: { name: 'หินผลึกปิดผนึกปริศนา (Mystery Geode)', category: 'mineral', source: 'ขุดอุกกาบาต หรือซื้อจากร้านค้าลึกลับ Void Shop ของซุล (350 G) -> กดคลิกใช้ในกระเป๋าเพื่อสุ่มแร่หายาก' },
  ancient_relic: { name: 'โบราณวัตถุแห่งอารยธรรมสาบสูญ', category: 'mineral', source: 'สุ่มแจ็กพอต (2%) จากการกะเทาะหินผลึกปิดผนึกปริศนา (Mystery Geode) ในกระเป๋า' },
  spire_shard: { name: 'ผลึกหอคอยมิติ (Spire Shard)', category: 'boss', source: 'ดรอป 85-100% จากศัตรูและบอสในหอคอยมิติไร้จุดสิ้นสุด (Infinite Spire)' },

  // --- ของป่า & เกาะมหาสมบัติ (Foraging & Exploration) ---
  wild_berries: { name: 'เบอร์รี่ป่า (Wild Berries)', category: 'forage', source: 'เก็บจากพุ่มไม้เบอร์รี่สีชมพูในฟาร์ม หมู่บ้าน และป่าเงามืด (เกิดใหม่ทุกเช้าวันใหม่)' },
  starflower_herb: { name: 'สมุนไพรดวงดาว', category: 'forage', source: 'เก็บดอกไม้เรืองแสงในป่าเงามืด หนองน้ำมรณะ หรือยอดเขาหิมะ (เกิดใหม่ทุกวัน) หรือดรอปจากก็อบลินในป่า (60%)' },
  swamp_herb: { name: 'บัวสมุนไพรหนองน้ำ', category: 'forage', source: 'ดรอป 80% จากจระเข้หนองน้ำพิษ (Swamp Croc) ในหนองน้ำมรณะฝั่งตะวันตกของหมู่บ้าน และบอสพญาไฮดรา (x3)' },
  frost_berry: { name: 'เบอร์รี่หิมะเยือกแข็ง', category: 'forage', source: 'ดรอป 60% จากหมาป่าหิมะเยือกแข็ง (Frost Wolf) บนยอดเขาหิมะ Frost Peak (ทางเหนือของป่าเงามืด)' },
  star_fruit: { name: 'ผลไม้ดวงดาราพฤกษา', category: 'forage', source: 'เก็บจากพุ่มไม้ดาวเรืองแสงในป่าพฤกษาบรรพกาล (Ancient Canopy ทางตะวันออกของป่าเงามืด) หรือบอสซิลวาเนีย (x2)' },
  mushroom_purple: { name: 'เห็ดม่วงเรืองแสง', category: 'forage', source: 'เก็บจากกล่องเพาะเห็ดในถ้ำฟาร์ม (Farm Cave - เลือกอัปเกรดเป็นห้องเพาะเห็ดวิจัย)' },
  mushroom_red: { name: 'เห็ดแดงจุดขาว', category: 'forage', source: 'เก็บจากกล่องเพาะเห็ดในถ้ำฟาร์ม (Farm Cave - เลือกอัปเกรดเป็นห้องเพาะเห็ดวิจัย)' },
  mushroom_chanterelle: { name: 'เห็ดแชนเทอเรลล์สีทอง', category: 'forage', source: 'เก็บจากกล่องเพาะเห็ดในถ้ำฟาร์ม (Farm Cave - เลือกอัปเกรดเป็นห้องเพาะเห็ดวิจัย)' },
  apple: { name: 'แอปเปิ้ลป่าสด', category: 'forage', source: 'เก็บบนพื้นในถ้ำฟาร์ม (Farm Cave - เลือกอัปเกรดเป็นถ้ำค้างคาวผลไม้)' },
  orange: { name: 'ส้มสดหวานฉ่ำ', category: 'forage', source: 'เก็บบนพื้นในถ้ำฟาร์ม (Farm Cave - เลือกอัปเกรดเป็นถ้ำค้างคาวผลไม้)' },
  plum: { name: 'ลูกพลัมป่า', category: 'forage', source: 'เก็บบนพื้นในถ้ำฟาร์ม (Farm Cave - เลือกอัปเกรดเป็นถ้ำค้างคาวผลไม้)' },
  seashell: { name: 'เปลือกหอยมุกสีรุ้ง', category: 'forage', source: 'เก็บบนชายหาดของเกาะมหาสมบัติเขตร้อน (เกิดใหม่ทุกวัน) หรือดรอป 75% จากปูยักษ์เกราะหิน' },
  message_bottle: { name: 'ขวดแก้วลายแทงสมบัติ', category: 'forage', source: 'เก็บขวดแก้วที่เกยตื้นบนชายหาดเกาะมหาสมบัติเขตร้อน' },
  pineapple: { name: 'สับปะรดทองคำ', category: 'forage', source: 'เก็บฟรีบนเกาะมหาสมบัติเขตร้อน (เกิดใหม่ทุกวัน) หรือซื้อหน่อสับปะรด (50G) ที่ร้านค้าหมู่บ้านมาปลูก' },
  coconut: { name: 'มะพร้าวน้ำหอม', category: 'forage', source: 'เก็บฟรีและตัดจากต้นปาล์มบนเกาะมหาสมบัติเขตร้อน หรือซื้อลูกมะพร้าว (60G) ที่ร้านค้าหมู่บ้านมาปลูก' },
  banana: { name: 'กล้วยหอมทอง (Golden Banana)', category: 'forage', source: 'เก็บฟรีบนเกาะมหาสมบัติเขตร้อน หรือซื้อหน่อกล้วยทอง (55G) ที่ร้านค้าหมู่บ้านมาปลูก' },
  golden_melon: { name: 'เมลอนทองคำเกาะโจรสลัด', category: 'crop', source: 'แลกเมล็ดด้วย 6 เหรียญโจรสลัดที่ร้านกัปตันบาร์นาบี้ (หรือเปิดหีบโจรสลัด) แล้วปลูกในเกาะสมบัติ/เรือนกระจก (5 วัน)' },
  starfruit: { name: 'ผลไม้ดวงดาวแคริบเบียน', category: 'crop', source: 'แลกเมล็ดด้วย 10 เหรียญโจรสลัดที่ร้านกัปตันบาร์นาบี้บนเกาะสมบัติ แล้วปลูกในเกาะสมบัติ/เรือนกระจก (6 วัน)' },
  cosmic_fruit: { name: 'ผลไม้ดวงดาวจักรวาล (Cosmic Star Fruit)', category: 'crop', source: 'ซื้อเมล็ดพันธุ์ดาราจักร (650 G) ที่ร้าน Void Shop ของซุล แล้วปลูกในฟาร์มหรือเรือนกระจก (5 วัน)' },
  sapling: { name: 'ต้นกล้าไม้โอ๊ค', category: 'forage', source: 'ดรอปเมื่อตัดต้นไม้ใหญ่ในฟาร์มหรือป่าเงามืดด้วยขวาน' },

  // --- ดรอปจากมอนสเตอร์ & แมลงปีศาจ (Monster Drops) ---
  blight_spore: { name: 'สปอร์กลายพันธุ์ (Blight Spore)', category: 'monster', source: 'ดรอปจากแมลงปีศาจที่บุกฟาร์มยามค่ำคืนทุกตัว (ด้วงทมิฬ / ต่อปีศาจ / หนอนพิษ)' },
  beetle_shell: { name: 'กระดองด้วงปีศาจ', category: 'monster', source: 'กำจัด "ด้วงปีศาจทมิฬ" ที่บุกแปลงผักในฟาร์มช่วงกลางคืน' },
  demon_wing: { name: 'ปีกต่อปีศาจ', category: 'monster', source: 'กำจัด "ต่อปีศาจเหล็กในพิษ" ที่บุกคอกสัตว์ในฟาร์มช่วงกลางคืน' },
  monster_essence: { name: 'น้ำมันปีศาจ', category: 'monster', source: 'กำจัด "หนอนพิษดูดกลืนพืช" ที่บุกแปลงผักในฟาร์มช่วงกลางคืน' },
  shadow_pelt: { name: 'หนังหมาป่าเงา', category: 'monster', source: 'ดรอป 100% จากหมาป่าเงา (Shadow Wolf) ในป่าเงามืด (Shadow Woods) และสุสานโบราณ' },
  wolf_fang: { name: 'เขี้ยวหมาป่าอาถรรพ์', category: 'monster', source: 'ดรอป 100% จากหมาป่าเงา (ป่าเงามืด / สุสาน) และหมาป่าหิมะ (ยอดเขา Frost Peak)' },
  cursed_wood: { name: 'ไม้โบราณต้องสาป', category: 'monster', source: 'ดรอป 85% จากต้นไม้ปีศาจ (Demon Treant) ในป่าเงามืด / ป่าบรรพกาล หรือซื้อที่ร้านตีเหล็กคาเอล (85 G)' },
  bat_wing: { name: 'ปีกค้างคาวถ้ำ', category: 'monster', source: 'ดรอป 75% จากค้างคาวถ้ำ (Cave Bat) ในเหมืองแร่ ยอดเขาหิมะ และที่ราบสูงพายุ หรือทุบไหในดันเจี้ยน' },
  crystal_core: { name: 'แก่นคริสตัลสไลม์', category: 'monster', source: 'ดรอป 70-75% จากสไลม์ผลึกและแมงมุมคริสตัลในเหมือง/ก้นบึ้งถ้ำ หรืออสูรหอคอยมิติ (40%)' },
  hydra_scale: { name: 'เกล็ดมังกรบึงพิษ', category: 'monster', source: 'ดรอป 100% จากจระเข้หนองน้ำพิษ (Swamp Croc) ในหนองน้ำมรณะ และบอสพญาไฮดราคิส (x3)' },
  flame_heart: { name: 'แก่นเพลิงลาวาเดือด', category: 'monster', source: 'ดรอป 35% จากอสูรธาตุเพลิงลาวาในวิหารไฟ (Volcano) และบอสอิกนิสทรอน (x2)' },
  frost_crystal: { name: 'ผลึกน้ำแข็งบริสุทธิ์', category: 'monster', source: 'ดรอป 100% จากหมาป่าหิมะ (Frost Wolf) บนยอดเขาหิมะ Frost Peak และบอสฟรอสต์แฟงก์ (x3)' },
  cursed_relic: { name: 'โบราณวัตถุต้องสาป', category: 'monster', source: 'ดรอป 35% จากนักรบโครงกระดูกในสุสานโบราณ (Crypt ฝั่งตะวันออกหมู่บ้าน) และบอสมาลาคอร์ (x2)' },
  crab_meat: { name: 'เนื้อปูยักษ์สด', category: 'monster', source: 'ดรอป 100% จากปูยักษ์เกราะหิน (Stoneback Crab) บนชายหาดเกาะมหาสมบัติเขตร้อน' },
  pirate_doubloon: { name: 'เหรียญทองโบราณโจรสลัด', category: 'monster', source: 'ดรอปจากโจรสลัดโครงกระดูก (55%) / ปูยักษ์ (30%) บนเกาะสมบัติ, เก็บขวดลายแทง, บอสคาร์ซาร็อค (x6) หรือหลอมจาก Cinder Shard 8 ชิ้น' },
  skeleton_key: { name: 'กุญแจโครงกระดูกโจรสลัด', category: 'monster', source: 'ดรอป 20% จากโจรสลัดโครงกระดูกบนเกาะมหาสมบัติ หรือแลกจากกัปตันบาร์นาบี้ (4 เหรียญโจรสลัด)' },
  dragon_tooth: { name: 'เขี้ยวมังกรโบราณ (Dragon Tooth)', category: 'fish', source: 'ตกปลาขณะมีสกิล Mastery "นักล่าสมบัติ (Treasure Hunter)" (โอกาส 40% ได้รับจากหีบสมบัติใต้สมุทร)' },

  // --- ของดรอปจากมหาบอส (Boss Drops & Sacred Shards) ---
  demon_heart: { name: 'หัวใจจอมอสูรคาธูรอส', category: 'boss', source: 'ปราบมหาบอส "คาธูรอส" (Boss Kathuros) ทางเหนือสุดของป่าเงามืด (Shadow Woods)' },
  crown_of_despair: { name: 'มงกุฎแห่งความสิ้นหวัง', category: 'boss', source: 'ปราบมหาบอส "คาธูรอส" (ป่าเงามืด) หรือมหาบอส "ลอร์ดมาลาคอร์" (สุสาน Crypt)' },
  luminarch_crystal_heart: { name: 'หัวใจผลึกปริซึมลูมินาร์ค', category: 'boss', source: 'ปราบมหาบอส "ลูมินาร์ค" (Luminarch) ในก้นบึ้งถ้ำผลึก (Cave Depths เข้าทางรอยแยกมุมซ้ายบนในเหมือง)' },
  hydra_venom_gland: { name: 'ต่อมพิษพญาไฮดราโบราณ', category: 'boss', source: 'ปราบมหาบอส "พญาไฮดราคิส" (Hydrakis) ในหนองน้ำมรณะ (ทางตะวันตกของหมู่บ้าน)' },
  magma_dragon_horn: { name: 'เขามังกรอัคนีเพลิงอิกนิสทรอน', category: 'boss', source: 'ปราบมหาบอส "อิกนิสทรอน" (Ignistron) ในปล่องภูเขาไฟวิหารมังกร (เข้าต่อจากก้นบึ้งถ้ำ Cave Depths)' },
  glacial_titan_core: { name: 'แก่นเหมันต์ไททันน้ำแข็ง', category: 'boss', source: 'ปราบมหาบอส "ฟรอสต์แฟงก์" (Frostfang) บนยอดเขาหิมะเยือกแข็ง (ทางเหนือของป่าเงามืด)' },
  death_lord_soul: { name: 'ดวงวิญญาณมรณะลอร์ดมาลาคอร์', category: 'boss', source: 'ปราบมหาบอส "ลอร์ดมาลาคอร์" (Lord Malakor) ในสุสานโบราณ Crypt (ทางตะวันออกของหมู่บ้าน)' },
  ancient_tree_heart: { name: 'หัวใจพฤกษาบรรพกาล', category: 'boss', source: 'ปราบมหาบอส "เทพพฤกษาซิลวาเนีย" (Sylvanus) ในป่าพฤกษาบรรพกาล (Ancient Canopy ทางตะวันออกของป่าเงามืด)' },
  storm_core: { name: 'แก่นอัสนีบาตคำราม', category: 'boss', source: 'ปราบมหาบอส "ออสทริออน" (Astreon) บนที่ราบสูงแห่งพายุ (Tempest Plateau ทางเหนือของยอดเขาหิมะ)' },
  magma_wyrm_scale: { name: 'เกล็ดมังกรลาวายักษ์ (Magma Scale)', category: 'boss', source: 'ปราบมังกรลาวา "คาร์ซาร็อค" (Karzarak) ชั้น 10 ดันเจี้ยนภูเขาไฟเกาะสมบัติ (x2) หรือดรอป 8% จาก Lava Lurker ในถ้ำภูเขาไฟ' },
  sacred_shard_earth: { name: 'แก่นศิลาปฐพีศักดิ์สิทธิ์', category: 'boss', source: 'ดรอปการันตีเมื่อปราบมหาบอส "คาธูรอส" ในป่าเงามืด' },
  sacred_shard_sun: { name: 'แก่นศิลาสุริยันศักดิ์สิทธิ์', category: 'boss', source: 'ดรอปการันตีเมื่อปราบมหาบอส "ลูมินาร์ค" ในก้นบึ้งถ้ำผลึก (Cave Depths)' },
  sacred_shard_water: { name: 'แก่นศิลาวารีศักดิ์สิทธิ์', category: 'boss', source: 'ดรอปการันตีเมื่อปราบมหาบอส "ไฮดราคิส" ในหนองน้ำมรณะ (Swamp)' },
  sacred_shard_fire: { name: 'แก่นศิลาเพลิงศักดิ์สิทธิ์', category: 'boss', source: 'ดรอปการันตีเมื่อปราบมหาบอส "อิกนิสทรอน" ในปล่องภูเขาไฟลาวา (Volcano)' },
  sacred_shard_frost: { name: 'แก่นศิลาเหมันต์ศักดิ์สิทธิ์', category: 'boss', source: 'ดรอปการันตีเมื่อปราบมหาบอส "ฟรอสต์แฟงก์" บนยอดเขาหิมะ (Frost Peak)' },
  sacred_shard_shadow: { name: 'แก่นศิลาทมิฬศักดิ์สิทธิ์', category: 'boss', source: 'ดรอปการันตีเมื่อปราบมหาบอส "ลอร์ดมาลาคอร์" ในสุสานโบราณ (Crypt)' },
  sacred_shard_nature: { name: 'แก่นศิลาพฤกษาศักดิ์สิทธิ์', category: 'boss', source: 'ดรอปการันตีเมื่อปราบมหาบอส "ซิลวาเนีย" ในป่าพฤกษาบรรพกาล (Ancient Canopy)' },
  sacred_shard_thunder: { name: 'แก่นศิลาอัสนีศักดิ์สิทธิ์', category: 'boss', source: 'ดรอปการันตีเมื่อปราบมหาบอส "ออสทริออน" บนที่ราบสูงแห่งพายุ (Tempest Plateau)' },

  // --- ผลผลิตสัตว์เลี้ยง & แปรรูป ---
  egg: { name: 'ไข่ไก่สด', category: 'crop', source: 'เลี้ยง "ไก่" ในคอกสัตว์ (ให้อาหารด้วยข้าวโพดทุกเช้า แล้วเดินไปเก็บ)' },
  milk: { name: 'นมวัวสด', category: 'crop', source: 'เลี้ยง "วัวนม" ในคอกสัตว์ (ให้อาหารด้วยข้าวสาลีทุกเช้า แล้วเดินไปรีดนม)' },
  wool: { name: 'ขนแกะนุ่มฟู', category: 'crop', source: 'เลี้ยง "แกะ" ในคอกสัตว์ (ให้อาหารด้วยข้าวสาลีทุกเช้า แล้วเดินไปตัดขน)' },
  truffle: { name: 'เห็ดทรัฟเฟิลดำ', category: 'crop', source: 'เลี้ยง "หมู" ในคอกสัตว์ (ให้อาหารด้วยแครอททุกเช้า หมูจะขุดพบให้เก็บในคอก)' },
  wheat_flour: { name: 'แป้งสาลีเนื้อละเอียด', category: 'artisan', source: 'โม่ข้าวสาลีที่กังหันลม (Windmill) หรือคราฟต์ในหมวดโรงสี [C]' },
  sugar: { name: 'น้ำตาลทรายบริสุทธิ์', category: 'artisan', source: 'นำ "อ้อย" 1 ชิ้นไปบดที่กังหันลม (Windmill Kit) ในฟาร์ม (ได้น้ำตาล x2)' },
  mayonnaise: { name: 'มายองเนสเข้มข้น', category: 'artisan', source: 'นำ "ไข่ไก่" ใส่ในเครื่องทำมายองเนส (Mayonnaise Machine)' },
  aged_cheese: { name: 'เชดดาร์ชีสบ่มพิเศษ', category: 'artisan', source: 'นำ "นมวัวสด" ใส่ในเครื่องอัดชีสแท้ (Cheese Press)' },
  strawberry_jam: { name: 'แยมสตรอเบอร์รี่หวานฉ่ำ', category: 'artisan', source: 'นำ "สตรอเบอร์รี่" หรือ "มะพร้าว" ใส่ในถังหมักแยม (Preserves Jar)' },
  pickled_carrot: { name: 'ผักดองแครอทกรอบ', category: 'artisan', source: 'นำ "แครอท" ใส่ในถังหมักแยม & ผักดอง (Preserves Jar)' },
  fine_wine: { name: 'ไวน์ผลไม้ชั้นเลิศ', category: 'artisan', source: 'นำ "สตรอเบอร์รี่" หรือ "สับปะรด" ใส่ในถังบ่มไวน์ (Wine & Ale Keg)' },
  craft_ale: { name: 'เบียร์สดข้าวสาลีคราฟต์', category: 'artisan', source: 'นำ "ข้าวสาลี" ใส่ในถังบ่มไวน์และเอล (Wine & Ale Keg)' },

  // --- อาวุธ/อุปกรณ์จากร้านค้าพิเศษ ---
  slingshot: { name: 'หนังสติ๊กล่าสัตว์', category: 'shop', source: 'อุปกรณ์เริ่มต้นในกระเป๋าตั้งแต่เริ่มเกม' },
  phoenix_feather: { name: 'ขนนกฟีนิกซ์ศักดิ์สิทธิ์', category: 'shop', source: 'ซื้อที่ร้านค้าลึกลับ Void Shop ของซุล (2,800 G) ใช้ชุบชีวิตอัตโนมัติ 100% เมื่อ HP หมด' },
  void_elixir: { name: 'โอสถแห่งความว่างเปล่า', category: 'shop', source: 'ซื้อที่ร้านค้าลึกลับ Void Shop ของซุล (550 G)' },
  spire_blade: { name: 'ดาบสุริยันผลึกหอคอย', category: 'shop', source: 'แลกด้วย 35 Spire Shard ที่ร้านค้าผลึกหอคอยมิติ (หอคอย Infinite Spire)' },
  spire_bow: { name: 'ธนูประกายดาราผลึก', category: 'shop', source: 'แลกด้วย 35 Spire Shard ที่ร้านค้าผลึกหอคอยมิติ (Infinite Spire)' },
  spire_staff: { name: 'คทาแก่นหอคอยมิติ', category: 'shop', source: 'แลกด้วย 45 Spire Shard ที่ร้านค้าผลึกหอคอยมิติ (Infinite Spire)' },
  parrot_egg: { name: 'ไข่นกแก้วมาคอว์โจรสลัด', category: 'shop', source: 'รางวัล/สมบัติพิเศษเกาะโจรสลัด หรือร้านค้าสำรวจเกาะมหาสมบัติ' }
};

export function getItemDisplayName(itemId: string): string {
  if (!itemId) return '';
  if (CROPS[itemId]?.name) return CROPS[itemId].name;
  if (itemId.endsWith('_seed')) {
    const crop = CROPS[itemId.slice(0, -5)];
    if (crop?.seedName) return crop.seedName;
  }
  if (WORLD_ITEMS[itemId]?.name) return WORLD_ITEMS[itemId].name;
  if (MONSTER_DROPS[itemId]?.name) return MONSTER_DROPS[itemId].name;
  if (FISH[itemId]?.name) return FISH[itemId].name;
  if (RECIPES[itemId]?.name) return RECIPES[itemId].name;
  if (FORGE_RECIPES[itemId]?.name) return FORGE_RECIPES[itemId].name;
  if (PIRATE_SHOP_ITEMS[itemId]?.name) return PIRATE_SHOP_ITEMS[itemId].name;
  if (WEAPONS[itemId]?.name) return WEAPONS[itemId].name;
  const tool = TOOLS.find(t => t.id === itemId);
  if (tool) return tool.name;
  if (ITEM_SOURCES[itemId]?.name) return ITEM_SOURCES[itemId].name!;
  return itemId;
}

export function getItemSourceText(itemId: string): string {
  if (!itemId) return '';
  if (ITEM_SOURCES[itemId]) return ITEM_SOURCES[itemId].source;

  if (itemId.endsWith('_seed')) {
    const base = itemId.slice(0, -5);
    if (base === 'cosmic_fruit') {
      return 'ซื้อที่ร้านค้าลึกลับ (Void Shop) ของซุล ราคา 650 G';
    }
    if (base === 'golden_melon' || base === 'starfruit') {
      const pItem = PIRATE_SHOP_ITEMS[itemId];
      return `แลกที่ร้านกัปตันบาร์นาบี้บนเกาะมหาสมบัติ (${pItem ? pItem.priceDoubloons : 8} เหรียญโจรสลัด)`;
    }
    if (CROPS[base]) {
      return `ซื้อเมล็ดพันธุ์ที่ร้านค้าหมู่บ้าน (คลิกป้ายร้านในหมู่บ้าน) ราคา ${CROPS[base].buyPrice} G`;
    }
  }

  if (CROPS[itemId]) {
    const c = CROPS[itemId];
    return `ปลูกจาก "${c.seedName}" (ซื้อที่ร้านค้าหมู่บ้าน ${c.buyPrice} G, โต ${c.growDays} วัน)`;
  }

  if (FISH[itemId]) {
    const f = FISH[itemId];
    const habitatMap: Record<string, string> = {
      pond: 'ตกปลาที่บ่อน้ำในฟาร์ม (ด้วยคันเบ็ด)',
      river: 'ตกปลาที่ลำธารในป่าเงามืด (ด้วยคันเบ็ด)',
      ocean: 'ตกปลาที่ทะเลรอบเกาะมหาสมบัติเขตร้อน (ด้วยคันเบ็ด)',
      any: 'ตกปลาได้ทุกแหล่งน้ำ (บ่อฟาร์ม, ลำธารป่า และทะเลเกาะ)'
    };
    return habitatMap[f.habitat] || 'ตกปลาด้วยคันเบ็ดริมแหล่งน้ำ';
  }

  const artisanConv = Object.values(ARTISAN_CONVERSIONS).find(c => c.outputItem === itemId);
  if (artisanConv) {
    const machineNames: Record<string, string> = {
      mayo_machine: 'เครื่องทำมายองเนส',
      cheese_press: 'เครื่องอัดชีสแท้',
      preserves_jar: 'ถังหมักแยม & ผักดอง',
      wine_keg: 'ถังบ่มไวน์และเอลโบราณ'
    };
    return `นำ "${getItemDisplayName(artisanConv.inputItem)}" แปรรูปใน${machineNames[artisanConv.machineType] || 'เครื่องแปรรูป'}`;
  }

  const volcanoRec = Object.values(VOLCANO_FORGE_RECIPES).find(v => v.resultItem === itemId);
  if (volcanoRec) {
    return `หลอมที่แท่นหลอมภูเขาไฟโบราณ (ชั้น 10 ดันเจี้ยนภูเขาไฟ หลังปราบคาร์ซาร็อค) ใช้ ${volcanoRec.costCinderShards} Cinder Shards`;
  }

  if (PIRATE_SHOP_ITEMS[itemId]) {
    const p = PIRATE_SHOP_ITEMS[itemId];
    return `แลกที่ร้านกัปตันบาร์นาบี้ บนเกาะมหาสมบัติ (${p.priceDoubloons} เหรียญโจรสลัด)`;
  }

  if (FORGE_RECIPES[itemId]) {
    const f = FORGE_RECIPES[itemId];
    return `หลอมสร้างที่เตาตีเหล็กคาเอล (หมู่บ้าน / ค่ายป่าเงามืด) ใช้ ${f.cost} G + วัตถุดิบ`;
  }

  if (RECIPES[itemId]) {
    const r = RECIPES[itemId];
    const ingStr = Object.entries(r.ingredients)
      .map(([k, v]) => `${getItemDisplayName(k)} x${v}`)
      .join(' + ');
    return `สร้างจากเมนูคราฟต์ [C] (ใช้วัตถุดิบ: ${ingStr})`;
  }

  if (itemId === 'rifle') {
    return 'ซื้อที่ร้านค้าหมู่บ้าน (500 G) หรือหลอมสร้างที่เตาตีเหล็กคาเอล';
  }

  const tool = TOOLS.find(t => t.id === itemId);
  if (tool) {
    return 'เครื่องมือพื้นฐานของนักฟาร์ม (ติดตัวในกระเป๋าหรือสร้างในเมนูคราฟต์)';
  }

  return 'สำรวจฟาร์ม ดันเจี้ยน แหล่งขุดแร่ หรือร้านค้าภายในหมู่บ้าน';
}

export interface ItemFinderEntry {
  id: string;
  name: string;
  category: ItemFinderCategory;
  source: string;
}

export function getAllItemFinderEntries(): ItemFinderEntry[] {
  const map = new Map<string, ItemFinderEntry>();

  const put = (id: string, category: ItemFinderCategory) => {
    if (!id || map.has(id)) return;
    map.set(id, {
      id,
      name: getItemDisplayName(id),
      category,
      source: getItemSourceText(id)
    });
  };

  Object.entries(ITEM_SOURCES).forEach(([id, meta]) => {
    put(id, meta.category);
  });
  Object.keys(CROPS).forEach(id => put(id, 'crop'));
  Object.keys(FISH).forEach(id => put(id, 'fish'));
  Object.keys(ARTISAN_CONVERSIONS).forEach(k => put(ARTISAN_CONVERSIONS[k].outputItem, 'artisan'));
  Object.keys(RECIPES).forEach(id => put(id, 'artisan'));
  Object.keys(FORGE_RECIPES).forEach(id => put(id, 'shop'));
  Object.values(VOLCANO_FORGE_RECIPES).forEach(v => {
    if (v.resultItem) put(v.resultItem, 'boss');
  });
  Object.keys(PIRATE_SHOP_ITEMS).forEach(id => put(id, 'shop'));

  return Array.from(map.values());
}
