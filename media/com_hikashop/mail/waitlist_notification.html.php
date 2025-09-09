<?php
/**
 * @package	HikaShop for Joomla!
 * @version	6.1.0
 * @author	hikashop.com
 * @copyright	(C) 2010-2025 HIKARI SOFTWARE. All rights reserved.
 * @license	GNU/GPLv3 http://www.gnu.org/licenses/gpl-3.0.html
 */
defined('_JEXEC') or die('Restricted access');
?><!-- HELLO USER -->
<?php echo JText::sprintf('HI_CUSTOMER',@$data->name);?><br/>
<!-- EO HELLO USER -->
<br/>
<!-- WAILIST FOR PRODUCT MESSAGE -->
<?php echo JText::sprintf('WAITLIST_SUBSCRIBE_FOR_PRODUCT', $data->product_name);?><br/>
<!-- EO WAILIST FOR PRODUCT MESSAGE -->
<!-- QUANTITY AVAILABLE MESSAGE -->
<?php
if($data->product_quantity < 0 ) { $data->product_quantity = JText::_('UNLIMITED'); }
echo JText::sprintf('THERE_IS_NOW_QTY_FOR_PRODUCT', $data->product_quantity);?><br/>
<!-- EO QUANTITY AVAILABLE MESSAGE -->
<!-- ACCESS PRODUCT LINK -->
<?php
	$url = HIKASHOP_LIVE . 'index.php?option=com_hikashop&ctrl=product&task=show&cid='. $data->product_id . '&Itemid='. $data->product_item_id;
	echo JText::sprintf('SEE_PRODUCT', $url);
?>
<!-- EO ACCESS PRODUCT LINK -->
<br/>
<br/>
<!-- BEST REGARDS -->
<?php echo JText::sprintf('BEST_REGARDS_CUSTOMER',$mail->from_name);?>
<!-- EO BEST REGARDS -->
