import html2canvas from 'html2canvas';

export interface ExportResult {
  success: boolean;
  dataUrl?: string;
  error?: string;
}

export async function exportOrderReceiptAsPng(
  element: HTMLElement,
  orderId: string
): Promise<ExportResult> {
  try {
    // Brief sleep to ensure any dynamic font or styles have settled
    await new Promise(resolve => setTimeout(resolve, 150));

    const canvas = await html2canvas(element, {
      scale: 2, // High-definition retina rendering
      backgroundColor: '#080A10',
      useCORS: true,
      logging: false,
      allowTaint: true,
    });

    const dataUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = `Heroism_Order_${orderId}.png`;
    link.href = dataUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    return {
      success: true,
      dataUrl,
    };
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown screenshot error';
    console.error('HEROISM receipt generation failed:', err);
    return {
      success: false,
      error: message,
    };
  }
}
